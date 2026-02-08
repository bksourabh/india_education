import { useState, useCallback } from 'react';
import type { Exercise, ExerciseProgress } from '../types';
import { useProgress } from '../context/ProgressContext';

interface ExerciseState {
  currentIndex: number;
  score: number;
  hintsUsed: number;
  answers: Record<number, boolean>;
  isComplete: boolean;
}

export function useExercise(exercise: Exercise) {
  const { updateExerciseProgress } = useProgress();
  const [state, setState] = useState<ExerciseState>({
    currentIndex: 0,
    score: 0,
    hintsUsed: 0,
    answers: {},
    isComplete: false,
  });

  const currentQuestion = exercise.questions[state.currentIndex];
  const totalQuestions = exercise.questions.length;
  const isLastQuestion = state.currentIndex === totalQuestions - 1;

  const submitAnswer = useCallback((isCorrect: boolean) => {
    setState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: { ...prev.answers, [prev.currentIndex]: isCorrect },
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentIndex >= totalQuestions - 1) {
        const result: ExerciseProgress = {
          completed: true,
          score: prev.score,
          totalQuestions,
          hintsUsed: prev.hintsUsed,
          lastAttempted: new Date().toISOString(),
        };
        updateExerciseProgress(exercise.id, result);
        return { ...prev, isComplete: true };
      }
      return { ...prev, currentIndex: prev.currentIndex + 1 };
    });
  }, [totalQuestions, exercise.id, updateExerciseProgress]);

  const useHint = useCallback(() => {
    setState((prev) => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
  }, []);

  const reset = useCallback(() => {
    setState({
      currentIndex: 0,
      score: 0,
      hintsUsed: 0,
      answers: {},
      isComplete: false,
    });
  }, []);

  return {
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions,
    score: state.score,
    hintsUsed: state.hintsUsed,
    answers: state.answers,
    isComplete: state.isComplete,
    isLastQuestion,
    submitAnswer,
    nextQuestion,
    useHint,
    reset,
  };
}
