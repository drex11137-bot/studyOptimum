import { create } from 'zustand';

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
      // Offline SQLite Database initialization maps here
      set({ isInitialized: true });
    } catch (error) {
      console.error("Initialization error:", error);
    }
  },

  updateFocusScore: (score) => 
    set((state) => ({ focusScore: state.focusScore + score })),

  loadFlashcards: (cards) => 
    set({ flashcards: cards })
}));
