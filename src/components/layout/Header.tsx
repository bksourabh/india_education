import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradeSelector from '../ui/GradeSelector';

const navLinks = [
  { to: '/reading', label: 'Reading', emoji: '📖' },
  { to: '/writing', label: 'Writing', emoji: '✏️' },
  { to: '/spelling', label: 'Spelling', emoji: '🔤' },
  { to: '/vocabulary', label: 'Vocabulary', emoji: '📚' },
  { to: '/grammar', label: 'Grammar', emoji: '📝' },
];

export default function Header() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span
              className="text-2xl"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              📚
            </motion.span>
            <span className="font-extrabold text-lg text-primary-600 hidden sm:inline">
              NEP English Guide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.emoji} {link.label}
              </Link>
            ))}
          </nav>

          <GradeSelector />
        </div>

        {/* Mobile nav */}
        <nav className="md:hidden flex gap-1 pb-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                location.pathname === link.to
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {link.emoji} {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
