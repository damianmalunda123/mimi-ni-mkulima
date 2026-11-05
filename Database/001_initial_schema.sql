-- ============================================================================
-- MIMI NI MKULIMA - Database Migration 001: Initial Content Feed & AI Schema
-- Purpose: Public content feed with media streaming, Full-Text Search & pgvector
-- ============================================================================

-- 1. Enable pgvector capabilities
-- In PostgreSQL, the standard extension name for pgvector is 'vector'.
-- We also ensure compatibility if configured under 'pgvector'.
CREATE EXTENSION IF NOT EXISTS vector;
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'vector') THEN
        BEGIN
            CREATE EXTENSION IF NOT EXISTS pgvector;
        EXCEPTION WHEN OTHERS THEN
            RAISE NOTICE 'pgvector extension created as vector or alias.';
        END;
    END IF;
END $$;

-- 2. Users Table
-- Stores user accounts for the public feed platform
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. Posts Table
-- Public feed where all posted content is visible to everyone globally
CREATE TABLE IF NOT EXISTS posts (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    media_url TEXT, -- Stores Cloudflare R2 / AWS S3 audio/video/image stream URLs
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Precomputed tsvector for lightning-fast Full-Text Search
    -- GENERATED ALWAYS AS ... STORED precalculates lexemes at write time
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', coalesce(title, '') || ' ' || coalesce(content, ''))
    ) STORED
);

-- 4. Post Embeddings Table
-- 384-dimensional dense vectors for semantic search and AI question answering
-- (Optimized for lightweight, accurate embedding models such as all-MiniLM-L6-v2)
CREATE TABLE IF NOT EXISTS post_embeddings (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL UNIQUE REFERENCES posts(id) ON DELETE CASCADE,
    embedding vector(384) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- 5. Database Indexes for High Throughput & Global Low Latency
-- ============================================================================

-- 5a. GIN (Generalized Inverted Index) on Post Content and Title
-- Accelerates Full-Text Search queries (to_tsquery, websearch_to_tsquery, plainto_tsquery)
CREATE INDEX IF NOT EXISTS idx_posts_search_vector 
    ON posts USING GIN (search_vector);

-- Secondary GIN expression index for direct expression queries
CREATE INDEX IF NOT EXISTS idx_posts_fts_expr 
    ON posts USING GIN (to_tsvector('english', title || ' ' || content));

-- 5b. HNSW (Hierarchical Navigable Small World) Index on Vectors
-- Delivers single-digit millisecond approximate nearest neighbor (ANN) lookups
-- using cosine similarity (<=> operator)
CREATE INDEX IF NOT EXISTS idx_post_embeddings_hnsw 
    ON post_embeddings USING hnsw (embedding vector_cosine_ops)
    WITH (m = 16, ef_construction = 64);

-- 5c. Feed Sorting & Foreign Key Lookup Indexes
-- Accelerates public feed pagination (e.g., SELECT * FROM posts ORDER BY created_at DESC LIMIT 20)
CREATE INDEX IF NOT EXISTS idx_posts_created_at_desc 
    ON posts (created_at DESC);

-- Accelerates user activity and cascading deletion checks
CREATE INDEX IF NOT EXISTS idx_posts_user_id 
    ON posts (user_id);

CREATE INDEX IF NOT EXISTS idx_post_embeddings_post_id 
    ON post_embeddings (post_id);

