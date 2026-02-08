import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';
import { getCorrectMessage, getIncorrectMessage } from '../../utils/encouragement';

interface SentenceBuilderProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function SentenceBuilder({ question, onAnswer, onNext, onHintUsed, isLast }: SentenceBuilderProps) {
  const shuffledWords = useMemo(() => {
    return [...(question.words || [])].sort(() => Math.random() - 0.5);
  }, [question.words]);

  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const builtSentence = selectedIndices.map((i) => shuffledWords[i]).join(' ');
  const isCorrect = builtSentence.toLowerCase() === question.correctSentence?.toLowerCase();

  const handleWordClick = (index: number) => {
    if (submitted) return;
    if (selectedIndices.includes(index)) {
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleSubmit = () => {
    if (selectedIndices.length !== shuffledWords.length) return;
    const correct = builtSentence.toLowerCase() === question.correctSentence?.toLowerCase();
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

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      {/* Built sentence */}
      <div className="min-h-[60px] bg-gray-50 rounded-xl p-4 mb-4 border-2 border-dashed border-gray-300">
        {selectedIndices.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedIndices.map((idx, pos) => (
              <motion.button
                key={`placed-${pos}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => handleWordClick(idx)}
                className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-lg font-bold text-sm border border-primary-300"
              >
                {shuffledWords[idx]}
              </motion.button>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 font-medium text-center">Click words to build a sentence</p>
        )}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {shuffledWords.map((word, index) => (
          <motion.button
            key={index}
            whileHover={!submitted ? { scale: 1.05 } : {}}
            whileTap={!submitted ? { scale: 0.95 } : {}}
            onClick={() => handleWordClick(index)}
            disabled={submitted}
            className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition-colors ${
              selectedIndices.includes(index)
                ? 'bg-gray-100 text-gray-300 border-gray-200'
                : 'bg-warning-50 text-warning-700 border-warning-400 hover:bg-warning-100 cursor-pointer'
            }`}
          >
            {word}
          </motion.button>
        ))}
      </div>

      {!submitted && selectedIndices.length > 0 && (
        <div className="text-center mb-4">
          <button
            onClick={() => setSelectedIndices([])}
            className="text-sm text-gray-500 hover:text-gray-700 font-medium"
          >
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
              The correct sentence is: <strong>{question.correctSentence}</strong>
            </p>
          )}
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={selectedIndices.length !== shuffledWords.length}>
            Check Sentence
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
