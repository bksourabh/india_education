import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Exercise } from '../../types';
import { useExercise } from '../../hooks/useExercise';
import ProgressBar from '../ui/ProgressBar';
import FeedbackModal from '../ui/FeedbackModal';
import Badge from '../ui/Badge';
import MCQuestion from './MCQuestion';
import FillBlank from './FillBlank';
import WordScramble from './WordScramble';
import MatchPairs from './MatchPairs';
import WritingPrompt from './WritingPrompt';
import SentenceBuilder from './SentenceBuilder';

interface ExerciseShellProps {
  exercise: Exercise;
}

export default function ExerciseShell({ exercise }: ExerciseShellProps) {
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    hintsUsed,
    isComplete,
    isLastQuestion,
    submitAnswer,
    nextQuestion,
    useHint,
    reset,
  } = useExercise(exercise);

  const difficultyConfig = {
    easy: { label: 'Easy', color: 'bg-success-100 text-success-600', emoji: '🟢' },
    medium: { label: 'Medium', color: 'bg-warning-100 text-warning-600', emoji: '🟡' },
    challenging: { label: 'Challenging', color: 'bg-fun-pink/10 text-fun-pink', emoji: '🔴' },
  };

  const diff = difficultyConfig[exercise.difficulty];

  const renderQuestion = () => {
    if (!currentQuestion) return null;

    const commonProps = {
      question: currentQuestion,
      onAnswer: submitAnswer,
      onNext: nextQuestion,
      onHintUsed: useHint,
      isLast: isLastQuestion,
    };

    switch (currentQuestion.type) {
      case 'mcq':
        return <MCQuestion {...commonProps} />;
      case 'fill-blank':
        return <FillBlank {...commonProps} />;
      case 'word-scramble':
        return <WordScramble {...commonProps} />;
      case 'match-pairs':
        return <MatchPairs {...commonProps} />;
      case 'writing-prompt':
        return <WritingPrompt {...commonProps} />;
      case 'sentence-builder':
        return <SentenceBuilder {...commonProps} />;
      default:
        return <div>Unknown question type</div>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-gray-700 font-semibold text-sm mb-3 inline-flex items-center gap-1"
          >
            ← Back
          </button>
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800">{exercise.title}</h1>
              <p className="text-gray-500 mt-1">{exercise.description}</p>
            </div>
            <Badge label={diff.label} color={diff.color} emoji={diff.emoji} />
          </div>
        </div>

        {/* Reading passage */}
        {exercise.passage && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <h3 className="font-bold text-blue-700 mb-2">📖 Read the passage:</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{exercise.passage}</p>
          </div>
        )}

        {/* Progress */}
        <div className="mb-6">
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {renderQuestion()}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Completion modal */}
      <FeedbackModal
        isOpen={isComplete}
        score={score}
        total={totalQuestions}
        hintsUsed={hintsUsed}
        onClose={() => navigate(-1)}
        onRetry={reset}
      />
    </div>
  );
}
