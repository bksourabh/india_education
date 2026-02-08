import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';
import { getCorrectMessage, getIncorrectMessage } from '../../utils/encouragement';

interface FillBlankProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function FillBlank({ question, onAnswer, onNext, onHintUsed, isLast }: FillBlankProps) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const isCorrect = input.trim().toLowerCase() === question.correctAnswer?.toLowerCase();

  const handleSubmit = () => {
    if (!input.trim()) return;
    const correct = input.trim().toLowerCase() === question.correctAnswer?.toLowerCase();
    onAnswer(correct);
    setFeedback(correct ? getCorrectMessage() : getIncorrectMessage());
    setSubmitted(true);
  };

  const handleNext = () => {
    setInput('');
    setSubmitted(false);
    setFeedback('');
    onNext();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !submitted) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={submitted}
          placeholder="Type your answer here..."
          className={`w-full p-4 text-lg border-2 rounded-xl font-semibold outline-none transition-colors ${
            submitted
              ? isCorrect
                ? 'border-success-500 bg-success-50'
                : 'border-warning-500 bg-warning-50'
              : 'border-gray-200 focus:border-primary-500 focus:bg-primary-50'
          }`}
          autoFocus
        />
      </div>

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
              The correct answer is: <strong>{question.correctAnswer}</strong>
            </p>
          )}
          {question.explanation && (
            <p className="text-gray-600 text-sm mt-1">{question.explanation}</p>
          )}
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!input.trim()}>
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
