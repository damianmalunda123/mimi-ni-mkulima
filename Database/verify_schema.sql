-- ============================================================================
-- MIMI NI MKULIMA - Database Verification Script
-- Purpose: Verify that pgvector, all tables, constraints, and GIN/HNSW indexes
--          are correctly installed and operational.
-- ============================================================================

\echo '---------------------------------------------------------'
\echo '1. Verifying Extensions...'
\echo '---------------------------------------------------------'
SELECT extname, extversion, extnamespace::regnamespace AS schema
FROM pg_extension
WHERE extname IN ('vector', 'pgvector');

\echo '---------------------------------------------------------'
\echo '2. Verifying Tables and Ownership...'
\echo '---------------------------------------------------------'
SELECT table_name, table_type
FROM information_schema.tables
WHERE table_schema = 'public' 
  AND table_name IN ('users', 'posts', 'post_embeddings')
ORDER BY table_name;

\echo '---------------------------------------------------------'
\echo '3. Verifying Columns & Data Types...'
\echo '---------------------------------------------------------'
SELECT table_name, column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name IN ('users', 'posts', 'post_embeddings')
ORDER BY table_name, ordinal_position;

\echo '---------------------------------------------------------'
\echo '4. Verifying Foreign Keys and Constraints...'
\echo '---------------------------------------------------------'
SELECT 
    tc.table_name, 
    tc.constraint_name, 
    tc.constraint_type, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
LEFT JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.table_schema = 'public'
  AND tc.table_name IN ('users', 'posts', 'post_embeddings')
ORDER BY tc.table_name, tc.constraint_type;

\echo '---------------------------------------------------------'
\echo '5. Verifying Indexes (GIN, HNSW, B-Tree)...'
\echo '---------------------------------------------------------'
SELECT 
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN ('users', 'posts', 'post_embeddings')
ORDER BY tablename, indexname;

