import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';
import { getCorrectMessage, getIncorrectMessage } from '../../utils/encouragement';

interface WordScrambleProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function WordScramble({ question, onAnswer, onNext, onHintUsed, isLast }: WordScrambleProps) {
  const letters = useMemo(() => {
    return (question.scrambledWord || '').split('');
  }, [question.scrambledWord]);

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentWord = selectedIndices.map((i) => letters[i]).join('');
  const isCorrect = currentWord.toLowerCase() === question.correctWord?.toLowerCase();

  const handleLetterClick = (index: number) => {
    if (submitted) return;
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleSubmit = () => {
    if (selectedIndices.length !== letters.length) return;
    const correct = currentWord.toLowerCase() === question.correctWord?.toLowerCase();
    onAnswer(correct);
    setFeedback(correct ? getCorrectMessage() : getIncorrectMessage());
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelectedIndices([]);
    setSubmitted(false);
    setFeedback('');
    onNext();
  };

  const handleClear = () => {
    setSelectedIndices([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      {/* Current word being built */}
      <div className="flex items-center justify-center gap-2 mb-6 min-h-[60px]">
        {selectedIndices.length > 0 ? (
          selectedIndices.map((idx, pos) => (
            <motion.span
              key={`selected-${pos}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-10 h-10 flex items-center justify-center bg-primary-100 text-primary-700 rounded-lg font-bold text-xl border-2 border-primary-300"
            >
              {letters[idx]}
            </motion.span>
          ))
        ) : (
          <span className="text-gray-400 font-medium">Click letters to build the word</span>
        )}
      </div>

      {/* Available letters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {letters.map((letter, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleLetterClick(index)}
            disabled={submitted}
            className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl border-2 transition-colors ${
              selectedIndices.includes(index)
                ? 'bg-gray-100 text-gray-300 border-gray-200'
                : 'bg-warning-50 text-warning-700 border-warning-400 hover:bg-warning-100 cursor-pointer'
            }`}
          >
            {letter.toUpperCase()}
          </motion.button>
        ))}
      </div>

      {!submitted && selectedIndices.length > 0 && (
        <div className="text-center mb-4">
          <button onClick={handleClear} className="text-sm text-gray-500 hover:text-gray-700 font-medium">
            Clear all
          </button>
        </div>
      )}

      {question.hint && !submitted && (
        <div className="mb-4">
          <HintButton hint={question.hint} onHintUsed={onHintUsed} />
        </div>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl mb-4 ${
            isCorrect ? 'bg-success-50 border border-success-400' : 'bg-warning-50 border border-warning-400'
          }`}
        >
          <p className={`font-bold ${isCorrect ? 'text-success-600' : 'text-warning-600'}`}>
            {feedback}
          </p>
          {!isCorrect && (
            <p className="text-gray-600 text-sm mt-1">
              The correct word is: <strong>{question.correctWord}</strong>
            </p>
          )}
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={selectedIndices.length !== letters.length}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} variant="success">
            {isLast ? 'Finish' : 'Next Question →'}
          </Button>
        )}
      </div>
    </div>
  );
}
