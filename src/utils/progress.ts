import type { UserProgress, ExerciseProgress } from '../types';

const STORAGE_KEY = 'india_edu_progress';

export function loadProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function saveExerciseProgress(
  exerciseId: string,
  result: ExerciseProgress
): UserProgress {
  const progress = loadProgress();
  progress[exerciseId] = result;
  saveProgress(progress);
  return progress;
}

export function getExerciseProgress(exerciseId: string): ExerciseProgress | null {
  const progress = loadProgress();
  return progress[exerciseId] || null;
}

export function clearAllProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
