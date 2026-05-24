import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import type { QuestionOption } from '../utils/quiz';

interface OptionButtonProps {
  option: QuestionOption;
  selected: boolean;
  status?: 'correct' | 'incorrect' | null;
  disabled?: boolean;
  onClick: () => void;
  index: number;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  selected,
  status,
  disabled,
  onClick,
  index
}) => {
  // Determine styling based on state
  let bgClass = 'bg-paper-base';
  let borderClass = 'border-ink-faint';
  let textClass = 'text-ink-main';
  let shadowClass = 'shadow-sticker';

  if (selected) {
    if (status === 'correct') {
      bgClass = 'bg-accent-sage';
      borderClass = 'border-accent-sage';
    } else if (status === 'incorrect') {
      bgClass = 'bg-accent-peach';
      borderClass = 'border-accent-peach';
      textClass = 'text-ink-main'; // high contrast text
    } else {
      // Just selected, waiting for validation (if immediateFeedback is off)
      bgClass = 'bg-primary-50';
      borderClass = 'border-primary-200';
    }
    shadowClass = 'shadow-inner-soft';
  } else if (status === 'correct') {
    // Show correct answer if missed
    borderClass = 'border-accent-sage border-dashed border-2';
    bgClass = 'bg-accent-sage';
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={!disabled && !selected ? { scale: 1.01, x: 4 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'w-full text-left p-3 md:p-4 rounded-lg border',
        'font-body text-base md:text-lg transition-colors duration-300',
        bgClass,
        borderClass,
        textClass,
        shadowClass,
        disabled && !selected && status !== 'correct' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <div className="flex items-center gap-4">
        <div className={twMerge(
          "w-8 h-8 rounded-full flex items-center justify-center font-display text-lg",
          selected ? "bg-paper-base/50" : "bg-ink-pencil/10"
        )}>
          {String.fromCharCode(65 + index)}
        </div>
        <span className="flex-1">{option.text}</span>
      </div>
    </motion.button>
  );
};
