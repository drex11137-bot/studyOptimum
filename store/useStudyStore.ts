import { create } from 'zustand';
import * as SQLite from 'expo-sqlite';

interface StudyState {
  isInitialized: boolean;
  flashcards: any[];
  focusScore: number;
  streak: number;
  initStore: () => Promise<void>;
  updateFocusScore: (score: number) => void;
  loadFlashcards: (cards: any[]) => void;
}

export const useStudyStore = create<StudyState>((set, get) => ({
  isInitialized: false,
  flashcards: [],
  focusScore: 0,
  streak: 0,

  initStore: async () => {
    try {
      // 1. Establish the Native SQLite Bridge
      const db = await SQLite.openDatabaseAsync('studyoptimum.db');
      
      // 2. Execute strict synchronous schema creation
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS flashcards (
          id TEXT PRIMARY KEY NOT NULL,
          front TEXT NOT NULL,
          back TEXT NOT NULL,
          ease_factor REAL NOT NULL,
          interval INTEGER NOT NULL,
          repetitions INTEGER NOT NULL,
          due_date INTEGER NOT NULL
        );
      `);

      // 3. Authorize the UI Thread to proceed
      set({ isInitialized: true });
    } catch (error) {
      console.error("Database allocation fatal error:", error);
    }
  },

  updateFocusScore: (score) => 
    set((state) => ({ focusScore: state.focusScore + score })),

  loadFlashcards: (cards) => 
    set({ flashcards: cards })
}));
