import { motion, AnimatePresence } from 'framer-motion';
import StarRating from './StarRating';
import Button from './Button';
import { getEncouragementMessage } from '../../utils/encouragement';

interface FeedbackModalProps {
  isOpen: boolean;
  score: number;
  total: number;
  hintsUsed: number;
  onClose: () => void;
  onRetry: () => void;
}

export default function FeedbackModal({ isOpen, score, total, hintsUsed, onClose, onRetry }: FeedbackModalProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const message = getEncouragementMessage(score, total);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-6xl mb-4"
            >
              {percentage === 100 ? '🏆' : percentage >= 75 ? '🎉' : percentage >= 50 ? '👍' : '💪'}
            </motion.div>

            <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Exercise Complete!</h2>
            <p className="text-lg font-semibold text-gray-600 mb-4">{message}</p>

            <div className="flex justify-center mb-4">
              <StarRating score={score} total={total} size="lg" />
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Score</span>
                <span className="font-bold text-primary-600">{score}/{total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Percentage</span>
                <span className="font-bold text-primary-600">{percentage}%</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Hints Used</span>
                <span className="font-bold text-warning-600">{hintsUsed}</span>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={onRetry}>
                Try Again
              </Button>
              <Button variant="primary" onClick={onClose}>
                Done
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
