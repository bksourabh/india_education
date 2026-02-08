import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';
import { getCorrectMessage, getIncorrectMessage } from '../../utils/encouragement';

interface MCQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function MCQuestion({ question, onAnswer, onNext, onHintUsed, isLast }: MCQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const isCorrect = selected === question.correctAnswer;

  const handleSubmit = () => {
    if (!selected) return;
    const correct = selected === question.correctAnswer;
    onAnswer(correct);
    setFeedback(correct ? getCorrectMessage() : getIncorrectMessage());
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelected(null);
    setSubmitted(false);
    setFeedback('');
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      <div className="space-y-3 mb-4">
        {question.options?.map((option) => {
          let optionStyle = 'border-gray-200 hover:border-primary-400 hover:bg-primary-50';
          if (submitted) {
            if (option === question.correctAnswer) {
              optionStyle = 'border-success-500 bg-success-50 text-success-700';
            } else if (option === selected && !isCorrect) {
              optionStyle = 'border-warning-500 bg-warning-50 text-warning-700';
            } else {
              optionStyle = 'border-gray-200 opacity-50';
            }
          } else if (option === selected) {
            optionStyle = 'border-primary-500 bg-primary-50 text-primary-700';
          }

          return (
            <motion.button
              key={option}
              whileHover={!submitted ? { scale: 1.02 } : {}}
              whileTap={!submitted ? { scale: 0.98 } : {}}
              onClick={() => !submitted && setSelected(option)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-xl border-2 font-semibold transition-colors ${optionStyle}`}
            >
              {option}
            </motion.button>
          );
        })}
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
          {question.explanation && (
            <p className="text-gray-600 text-sm mt-1">{question.explanation}</p>
          )}
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!selected}>
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
