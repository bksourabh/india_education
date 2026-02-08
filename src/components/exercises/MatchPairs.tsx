import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';
import { getCorrectMessage, getIncorrectMessage } from '../../utils/encouragement';

interface MatchPairsProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function MatchPairs({ question, onAnswer, onNext, onHintUsed, isLast }: MatchPairsProps) {
  const pairs = question.pairs || [];

  const shuffledRight = useMemo(() => {
    return [...pairs.map((p) => p.right)].sort(() => Math.random() - 0.5);
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const matchedRights = new Set(Object.values(matches));

  const handleLeftClick = (index: number) => {
    if (submitted) return;
    setSelectedLeft(selectedLeft === index ? null : index);
  };

  const handleRightClick = (rightValue: string) => {
    if (submitted || selectedLeft === null) return;
    setMatches({ ...matches, [selectedLeft]: rightValue });
    setSelectedLeft(null);
  };

  const removeMatch = (leftIndex: number) => {
    if (submitted) return;
    const updated = { ...matches };
    delete updated[leftIndex];
    setMatches(updated);
  };

  const allMatched = Object.keys(matches).length === pairs.length;

  const handleSubmit = () => {
    if (!allMatched) return;
    let correct = 0;
    pairs.forEach((pair, index) => {
      if (matches[index] === pair.right) correct++;
    });
    const allCorrect = correct === pairs.length;
    onAnswer(allCorrect);
    setFeedback(allCorrect ? getCorrectMessage() : getIncorrectMessage());
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelectedLeft(null);
    setMatches({});
    setSubmitted(false);
    setFeedback('');
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Left column */}
        <div className="space-y-3">
          <div className="text-sm font-bold text-gray-500 text-center mb-2">Match from</div>
          {pairs.map((pair, index) => (
            <motion.button
              key={`left-${index}`}
              whileHover={!submitted ? { scale: 1.02 } : {}}
              onClick={() => matches[index] ? removeMatch(index) : handleLeftClick(index)}
              className={`w-full p-3 rounded-xl border-2 font-semibold text-sm transition-colors ${
                submitted
                  ? matches[index] === pair.right
                    ? 'border-success-500 bg-success-50 text-success-700'
                    : 'border-warning-500 bg-warning-50 text-warning-700'
                  : selectedLeft === index
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : matches[index]
                      ? 'border-fun-purple bg-purple-50 text-fun-purple'
                      : 'border-gray-200 hover:border-primary-400'
              }`}
            >
              {pair.left}
              {matches[index] && !submitted && (
                <span className="block text-xs text-fun-purple mt-1">→ {matches[index]}</span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <div className="text-sm font-bold text-gray-500 text-center mb-2">Match to</div>
          {shuffledRight.map((right) => (
            <motion.button
              key={`right-${right}`}
              whileHover={!submitted && selectedLeft !== null ? { scale: 1.02 } : {}}
              onClick={() => handleRightClick(right)}
              disabled={submitted || matchedRights.has(right)}
              className={`w-full p-3 rounded-xl border-2 font-semibold text-sm transition-colors ${
                matchedRights.has(right)
                  ? 'border-gray-200 bg-gray-50 text-gray-400'
                  : selectedLeft !== null
                    ? 'border-primary-300 bg-primary-50 hover:border-primary-500 cursor-pointer'
                    : 'border-gray-200'
              }`}
            >
              {right}
            </motion.button>
          ))}
        </div>
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
            feedback.includes('Correct') || feedback.includes('right') || feedback.includes('got it')
              ? 'bg-success-50 border border-success-400'
              : 'bg-warning-50 border border-warning-400'
          }`}
        >
          <p className="font-bold text-gray-700">{feedback}</p>
          {!pairs.every((pair, i) => matches[i] === pair.right) && (
            <div className="mt-2 text-sm text-gray-600">
              <p className="font-semibold mb-1">Correct matches:</p>
              {pairs.map((pair, i) => (
                <p key={i}>{pair.left} → {pair.right}</p>
              ))}
            </div>
          )}
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!allMatched}>
            Check Matches
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
