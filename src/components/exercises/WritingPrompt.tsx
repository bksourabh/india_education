import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types';
import HintButton from '../ui/HintButton';
import Button from '../ui/Button';

interface WritingPromptProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onHintUsed: () => void;
  isLast: boolean;
}

export default function WritingPrompt({ question, onAnswer, onNext, onHintUsed, isLast }: WritingPromptProps) {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const minWords = 10;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleSubmit = () => {
    if (wordCount < minWords) return;
    // Writing prompts are always marked correct (self-assessment)
    onAnswer(true);
    setSubmitted(true);
  };

  const handleNext = () => {
    setText('');
    setSubmitted(false);
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{question.question}</h3>

      {question.writingGuide && question.writingGuide.length > 0 && (
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-4">
          <h4 className="font-bold text-primary-700 text-sm mb-2">Writing Guide:</h4>
          <ul className="space-y-1">
            {question.writingGuide.map((step, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-primary-500 font-bold">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={submitted}
          placeholder="Write your answer here..."
          rows={6}
          className={`w-full p-4 border-2 rounded-xl font-medium outline-none transition-colors resize-none ${
            submitted
              ? 'border-success-500 bg-success-50'
              : 'border-gray-200 focus:border-primary-500 focus:bg-primary-50'
          }`}
        />
        <div className="flex justify-between mt-1">
          <span className={`text-sm font-medium ${wordCount >= minWords ? 'text-success-600' : 'text-gray-400'}`}>
            {wordCount} word{wordCount !== 1 ? 's' : ''} written
          </span>
          <span className="text-sm text-gray-400">
            Minimum {minWords} words
          </span>
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
          className="p-4 rounded-xl mb-4 bg-success-50 border border-success-400"
        >
          <p className="font-bold text-success-600">Great writing! Keep practicing to become an even better writer!</p>
        </motion.div>
      )}

      <div className="flex justify-end gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={wordCount < minWords}>
            Submit Writing
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
