import React from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../utils/quiz';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      key={question.id}
      className="mb-4 md:mb-6"
    >
      <div className="flex gap-2 mb-2 flex-wrap">
        {(question.tags || []).map(tag => (
          <span key={tag} className="text-xs font-body text-ink-muted bg-ink-pencil/10 px-2 py-1 rounded-sm">
            #{tag}
          </span>
        ))}
      </div>
      <h2 className="text-h2 font-body font-medium text-ink-main leading-relaxed">
        {question.question}
      </h2>
    </motion.div>
  );
};
