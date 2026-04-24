// Database schema definition and creation statements

export const SCHEMA_VERSION = 1;

export const CREATE_TABLES = `
  PRAGMA foreign_keys = ON;
  
  CREATE TABLE if not exists users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    created_at INTEGER NOT NULL
  );

  CREATE TABLE if not exists notes (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    is_synced INTEGER DEFAULT 0
  );

  CREATE TABLE if not exists flashcards (
    id TEXT PRIMARY KEY,
    front TEXT NOT NULL,
    back TEXT NOT NULL,
    ease_factor REAL DEFAULT 2.5,
    interval INTEGER DEFAULT 0,
    repetitions INTEGER DEFAULT 0,
    due_date INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    is_synced INTEGER DEFAULT 0
  );

  CREATE TABLE if not exists study_sessions (
    id TEXT PRIMARY KEY,
    start_time INTEGER NOT NULL,
    end_time INTEGER,
    duration_minutes INTEGER,
    focus_score INTEGER
  );

  CREATE TABLE if not exists sync_queue (
    id TEXT PRIMARY KEY,
    entity_id TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    operation TEXT NOT NULL,
    timestamp INTEGER NOT NULL
  );
`;
