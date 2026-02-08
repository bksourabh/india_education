import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-200',
  success: 'bg-success-500 hover:bg-success-600 text-white shadow-lg shadow-success-200',
  warning: 'bg-warning-500 hover:bg-warning-600 text-white shadow-lg shadow-warning-100',
  outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
  ghost: 'text-gray-600 hover:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`font-bold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
