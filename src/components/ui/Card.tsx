import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { scale: 1.03, y: -4 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-lg p-6 ${
        hover ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
