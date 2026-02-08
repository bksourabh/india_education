import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { SectionInfo } from '../../types';
import { useGrade } from '../../context/GradeContext';
import { useProgress } from '../../context/ProgressContext';
import { getExercises } from '../../data';

interface SectionCardProps {
  section: SectionInfo;
  index: number;
}

export default function SectionCard({ section, index }: SectionCardProps) {
  const navigate = useNavigate();
  const { grade } = useGrade();
  const { progress } = useProgress();

  const exercises = getExercises(section.id, grade);
  const completed = exercises.filter((e) => progress[e.id]?.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.03, y: -6 }}
      onClick={() => navigate(`/${section.id}`)}
      className={`cursor-pointer rounded-2xl shadow-lg p-6 border-2 ${section.borderColor} ${section.bgColor} hover:shadow-xl transition-shadow`}
    >
      <div className="text-4xl mb-3">{section.emoji}</div>
      <h3 className="text-xl font-extrabold text-gray-800 mb-2">{section.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{section.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500">
          {exercises.length} exercises
        </span>
        {completed > 0 && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${section.color} bg-white/80`}>
            {completed}/{exercises.length} done
          </span>
        )}
      </div>
      {exercises.length > 0 && (
        <div className="mt-3 w-full bg-white/50 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              section.id === 'reading' ? 'bg-blue-400' :
              section.id === 'writing' ? 'bg-green-400' :
              section.id === 'spelling' ? 'bg-orange-400' :
              section.id === 'vocabulary' ? 'bg-pink-400' :
              'bg-purple-400'
            }`}
            style={{ width: `${(completed / exercises.length) * 100}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
