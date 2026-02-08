import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  color?: string;
  emoji?: string;
}

export default function Badge({ label, color = 'bg-primary-100 text-primary-700', emoji }: BadgeProps) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${color}`}
    >
      {emoji && <span>{emoji}</span>}
      {label}
    </motion.span>
  );
}
