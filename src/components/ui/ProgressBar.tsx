import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({ current, total, color = 'bg-primary-500' }: ProgressBarProps) {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-gray-600">
          Question {current} of {total}
        </span>
        <span className="text-sm font-bold text-gray-700">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
