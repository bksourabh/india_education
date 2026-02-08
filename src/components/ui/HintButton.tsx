import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HintButtonProps {
  hint: string;
  onHintUsed?: () => void;
}

export default function HintButton({ hint, onHintUsed }: HintButtonProps) {
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    if (!showHint) {
      setShowHint(true);
      onHintUsed?.();
    } else {
      setShowHint(false);
    }
  };

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-4 py-2 bg-warning-100 text-warning-600 rounded-xl font-semibold text-sm hover:bg-warning-500 hover:text-white transition-colors"
      >
        <span>💡</span>
        {showHint ? 'Hide Hint' : 'Show Hint'}
      </motion.button>
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 p-3 bg-warning-50 border border-warning-400 rounded-xl text-sm text-warning-600 font-medium"
          >
            💡 {hint}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
