import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Grade } from '../types';

interface GradeContextType {
  grade: Grade;
  setGrade: (grade: Grade) => void;
}

const GradeContext = createContext<GradeContextType | undefined>(undefined);

export function GradeProvider({ children }: { children: ReactNode }) {
  const [grade, setGrade] = useState<Grade>(() => {
    const saved = localStorage.getItem('india_edu_grade');
    return (saved ? Number(saved) : 3) as Grade;
  });

  const handleSetGrade = (newGrade: Grade) => {
    setGrade(newGrade);
    localStorage.setItem('india_edu_grade', String(newGrade));
  };

  return (
    <GradeContext.Provider value={{ grade, setGrade: handleSetGrade }}>
      {children}
    </GradeContext.Provider>
  );
}

export function useGrade(): GradeContextType {
  const context = useContext(GradeContext);
  if (!context) {
    throw new Error('useGrade must be used within a GradeProvider');
  }
  return context;
}
