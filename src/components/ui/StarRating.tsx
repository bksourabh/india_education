import { motion } from 'framer-motion';

interface StarRatingProps {
  score: number;
  total: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarRating({ score, total, size = 'md' }: StarRatingProps) {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  const stars = percentage >= 90 ? 3 : percentage >= 60 ? 2 : percentage > 0 ? 1 : 0;
  const sizeClass = size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-2xl' : 'text-lg';

  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3].map((star) => (
        <motion.span
          key={star}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: star * 0.2, type: 'spring', stiffness: 200 }}
          className={sizeClass}
        >
          {star <= stars ? '⭐' : '☆'}
        </motion.span>
      ))}
    </div>
  );
}
