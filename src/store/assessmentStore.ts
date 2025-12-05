import { create } from 'zustand';

interface AssessmentState {
  currentScore: number;
  totalQuestions: number;
  answeredQuestions: number;
  incrementCorrect: () => void;
  incrementTotal: () => void;
  resetScore: () => void;
}

export const useAssessmentStore = create<AssessmentState>((set) => ({
  currentScore: 0,
  totalQuestions: 0,
  answeredQuestions: 0,
  incrementCorrect: () =>
    set((state) => ({
      currentScore: state.currentScore + 1,
      answeredQuestions: state.answeredQuestions + 1,
    })),
  incrementTotal: () =>
    set((state) => ({
      totalQuestions: state.totalQuestions + 1,
      answeredQuestions: state.answeredQuestions + 1,
    })),
  resetScore: () =>
    set({
      currentScore: 0,
      totalQuestions: 0,
      answeredQuestions: 0,
    }),
}));
