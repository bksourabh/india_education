export type Section = 'reading' | 'writing' | 'spelling' | 'vocabulary' | 'grammar';
export type Grade = 3 | 4 | 5;
export type QuestionType = 'mcq' | 'fill-blank' | 'word-scramble' | 'match-pairs' | 'writing-prompt' | 'sentence-builder';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  hint?: string;
  explanation?: string;
  options?: string[];
  correctAnswer?: string;
  scrambledWord?: string;
  correctWord?: string;
  pairs?: { left: string; right: string }[];
  writingGuide?: string[];
  words?: string[];
  correctSentence?: string;
}

export interface Exercise {
  id: string;
  section: Section;
  grade: Grade;
  title: string;
  description: string;
  passage?: string;
  questions: Question[];
  difficulty: 'easy' | 'medium' | 'challenging';
}

export interface ExerciseProgress {
  completed: boolean;
  score: number;
  totalQuestions: number;
  hintsUsed: number;
  lastAttempted: string;
}

export interface UserProgress {
  [exerciseId: string]: ExerciseProgress;
}

export interface SectionInfo {
  id: Section;
  title: string;
  description: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
}
