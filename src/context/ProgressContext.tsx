import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { UserProgress, ExerciseProgress } from '../types';
import { loadProgress, saveExerciseProgress, clearAllProgress } from '../utils/progress';

interface ProgressContextType {
  progress: UserProgress;
  updateExerciseProgress: (exerciseId: string, result: ExerciseProgress) => void;
  getExerciseScore: (exerciseId: string) => ExerciseProgress | null;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  const updateExerciseProgress = useCallback((exerciseId: string, result: ExerciseProgress) => {
    const updated = saveExerciseProgress(exerciseId, result);
    setProgress(updated);
  }, []);

  const getExerciseScore = useCallback((exerciseId: string): ExerciseProgress | null => {
    return progress[exerciseId] || null;
  }, [progress]);

  const resetProgress = useCallback(() => {
    clearAllProgress();
    setProgress({});
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, updateExerciseProgress, getExerciseScore, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextType {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
