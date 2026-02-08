import { motion } from 'framer-motion';
import { useGrade } from '../../context/GradeContext';
import type { Grade } from '../../types';

const grades: { value: Grade; label: string; emoji: string }[] = [
  { value: 3, label: 'Grade 3', emoji: '🌱' },
  { value: 4, label: 'Grade 4', emoji: '🌿' },
  { value: 5, label: 'Grade 5', emoji: '🌳' },
];

export default function GradeSelector() {
  const { grade, setGrade } = useGrade();

  return (
    <div className="flex gap-2">
      {grades.map((g) => (
        <motion.button
          key={g.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setGrade(g.value)}
          className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${
            grade === g.value
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-primary-50 border border-gray-200'
          }`}
        >
          {g.emoji} {g.label}
        </motion.button>
      ))}
    </div>
  );
}
