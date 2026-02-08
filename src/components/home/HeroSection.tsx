import { motion } from 'framer-motion';
import { useGrade } from '../../context/GradeContext';

export default function HeroSection() {
  const { grade } = useGrade();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12 md:py-16"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-6xl mb-6"
      >
        📚
      </motion.div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        NEP based English Learning Guide
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4">
        for Grades 3 to 5
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Fun, interactive exercises to master English! Read stories, build vocabulary,
        practice spelling, learn grammar, and write creatively.
      </p>
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 rounded-2xl">
        <span className="text-primary-600 font-bold">
          Currently learning as Grade {grade}
        </span>
        <span>{grade === 3 ? '🌱' : grade === 4 ? '🌿' : '🌳'}</span>
      </div>
    </motion.section>
  );
}
