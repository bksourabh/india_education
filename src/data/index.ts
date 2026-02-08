import type { Exercise, Section, Grade, SectionInfo } from '../types';

import readingGrade3 from './reading/grade3';
import readingGrade4 from './reading/grade4';
import readingGrade5 from './reading/grade5';
import writingGrade3 from './writing/grade3';
import writingGrade4 from './writing/grade4';
import writingGrade5 from './writing/grade5';
import spellingGrade3 from './spelling/grade3';
import spellingGrade4 from './spelling/grade4';
import spellingGrade5 from './spelling/grade5';
import vocabularyGrade3 from './vocabulary/grade3';
import vocabularyGrade4 from './vocabulary/grade4';
import vocabularyGrade5 from './vocabulary/grade5';
import grammarGrade3 from './grammar/grade3';
import grammarGrade4 from './grammar/grade4';
import grammarGrade5 from './grammar/grade5';

const allExercises: Exercise[] = [
  ...readingGrade3, ...readingGrade4, ...readingGrade5,
  ...writingGrade3, ...writingGrade4, ...writingGrade5,
  ...spellingGrade3, ...spellingGrade4, ...spellingGrade5,
  ...vocabularyGrade3, ...vocabularyGrade4, ...vocabularyGrade5,
  ...grammarGrade3, ...grammarGrade4, ...grammarGrade5,
];

export function getExercises(section: Section, grade: Grade): Exercise[] {
  return allExercises.filter((e) => e.section === section && e.grade === grade);
}

export function getExerciseById(id: string): Exercise | undefined {
  return allExercises.find((e) => e.id === id);
}

export const sections: SectionInfo[] = [
  {
    id: 'reading',
    title: 'Reading Comprehension',
    description: 'Read stories and passages, then answer questions to test your understanding.',
    emoji: '📖',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'writing',
    title: 'Writing Practice',
    description: 'Express yourself through creative writing, letters, and stories.',
    emoji: '✏️',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'spelling',
    title: 'Spelling Bee',
    description: 'Master spelling with scrambles, fill-in-the-blanks, and quizzes.',
    emoji: '🔤',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary Builder',
    description: 'Learn new words, meanings, synonyms, antonyms, and idioms.',
    emoji: '📚',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    id: 'grammar',
    title: 'Grammar Garden',
    description: 'Practice nouns, verbs, tenses, sentences, and punctuation rules.',
    emoji: '📝',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];
