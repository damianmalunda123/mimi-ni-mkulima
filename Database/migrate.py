#!/usr/bin/env python3
"""
MIMI NI MKULIMA - Database Migration and Verification Runner
Senior Backend Engineering Migration Tool for PostgreSQL, pgvector & Full-Text Search.
"""

import os
import sys
import argparse
import subprocess
from pathlib import Path
from urllib.parse import urlparse

BASE_DIR = Path(__file__).resolve().parent
SCHEMA_FILE = BASE_DIR / "001_initial_schema.sql"
VERIFY_FILE = BASE_DIR / "verify_schema.sql"

def get_connection_config(url_str=None):
    if not url_str:
        url_str = os.getenv("DATABASE_URL") or os.getenv("POSTGRES_URL")
    
    if url_str and (url_str.startswith("postgresql://") or url_str.startswith("postgres://")):
        parsed = urlparse(url_str)
        return {
            "host": parsed.hostname or "localhost",
            "port": parsed.port or 5432,
            "user": parsed.username or "postgres",
            "password": parsed.password or "",
            "dbname": parsed.path.lstrip("/") or "postgres",
            "raw_url": url_str
        }
    
    return {
        "host": os.getenv("PGHOST", "localhost"),
        "port": int(os.getenv("PGPORT", "5432")),
        "user": os.getenv("PGUSER", "postgres"),
        "password": os.getenv("PGPASSWORD", ""),
        "dbname": os.getenv("PGDATABASE", "postgres"),
        "raw_url": f"postgresql://{os.getenv('PGUSER', 'postgres')}@{os.getenv('PGHOST', 'localhost')}:{os.getenv('PGPORT', '5432')}/{os.getenv('PGDATABASE', 'postgres')}"
    }

def run_psql_migration(config, sql_file):
    print(f"[*] Applying migration via psql: {sql_file.name} ...")
    env = os.environ.copy()
    if config.get("password"):
        env["PGPASSWORD"] = config["password"]

    cmd = [
        "psql",
        "-h", config["host"],
        "-p", str(config["port"]),
        "-U", config["user"],
        "-d", config["dbname"],
        "-f", str(sql_file)
    ]
    try:
        res = subprocess.run(cmd, env=env, capture_output=True, text=True, check=True)
        print("[+] Migration successfully executed via psql:")
        print(res.stdout)
        return True
    except subprocess.CalledProcessError as exc:
        print(f"[-] psql failed with error:\n{exc.stderr}")
        return False
    except FileNotFoundError:
        return False

def run_python_driver_migration(config, sql_file):
    # Try psycopg / psycopg2 / asyncpg if available
    for driver_name in ["psycopg", "psycopg2"]:
        try:
            driver = __import__(driver_name)
            print(f"[*] Connecting using Python driver '{driver_name}' to {config['host']}:{config['port']}/{config['dbname']} ...")
            conn = driver.connect(
                host=config["host"],
                port=config["port"],
                user=config["user"],
                password=config["password"],
                dbname=config["dbname"]
            )
            conn.autocommit = True
            with conn.cursor() as cur:
                with open(sql_file, "r", encoding="utf-8") as f:
                    sql_content = f.read()
                print(f"[*] Executing SQL statements from {sql_file.name} ...")
                cur.execute(sql_content)
                print("[+] Migration executed successfully!")
            conn.close()
            return True
        except ImportError:
            continue
        except Exception as exc:
            print(f"[-] Database connection error with {driver_name}: {exc}")
            return False

    return False

def validate_sql_file():
    print(f"[*] Validating SQL file: {SCHEMA_FILE} ...")
    if not SCHEMA_FILE.exists():
        print(f"[-] Error: {SCHEMA_FILE} does not exist!")
        return False
    
    with open(SCHEMA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    
    required_keywords = [
        "CREATE EXTENSION IF NOT EXISTS vector",
        "CREATE TABLE IF NOT EXISTS users",
        "CREATE TABLE IF NOT EXISTS posts",
        "CREATE TABLE IF NOT EXISTS post_embeddings",
        "vector(384)",
        "media_url",
        "idx_posts_search_vector",
        "idx_post_embeddings_hnsw"
    ]
    
    for kw in required_keywords:
        if kw not in content:
            print(f"[-] Warning: Expected pattern '{kw}' not found in {SCHEMA_FILE.name}")
        else:
            print(f"    ✓ Found: {kw}")

    print("[+] SQL migration script validated successfully.")
    return True

def main():
    parser = argparse.ArgumentParser(description="MIMI NI MKULIMA Database Migration Tool")
    parser.add_argument("--url", help="PostgreSQL connection string (e.g. postgresql://user:pass@host:5432/dbname)")
    parser.add_argument("--dry-run", action="store_true", help="Validate SQL files without connecting")
    args = parser.parse_args()

    print("====================================================================")
    print(" MIMI NI MKULIMA - Database Migration Engine")
    print(" PostgreSQL + pgvector (384-dim) + Full-Text Search (GIN)")
    print("====================================================================")

    # 1. Validate SQL script
    if not validate_sql_file():
        sys.exit(1)

    if args.dry_run:
        print("[*] Dry run complete. Database connection skipped.")
        return

    config = get_connection_config(args.url)
    print(f"[*] Target Database: {config['raw_url']}")

    # 2. Attempt migration via psql CLI
    psql_success = run_psql_migration(config, SCHEMA_FILE)
    if psql_success:
        print("[*] Running verification checks...")
        run_psql_migration(config, VERIFY_FILE)
        return

    # 3. Attempt migration via Python driver
    driver_success = run_python_driver_migration(config, SCHEMA_FILE)
    if driver_success:
        return

    # 4. If neither was available or connected, provide clear instructions
    print("\n--------------------------------------------------------------------")
    print("[!] PostgreSQL Server Status:")
    print("    Could not connect to a running PostgreSQL server on localhost:5432.")
    print("    If your database is hosted remotely (e.g. Neon, Supabase, RDS) or")
    print("    in Docker, you can run the migration immediately using:")
    print(f"    python Database/migrate.py --url 'postgresql://user:password@host:5432/dbname'")
    print("    OR via psql:")
    print(f"    psql '<connection-string>' -f Database/001_initial_schema.sql")
    print("--------------------------------------------------------------------\n")

if __name__ == "__main__":
    main()

