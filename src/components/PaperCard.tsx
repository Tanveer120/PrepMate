import React from 'react';
import { twMerge } from 'tailwind-merge';
import { type HTMLMotionProps, motion } from 'framer-motion';

interface PaperCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  notebookStyle?: boolean;
}

export const PaperCard: React.FC<PaperCardProps> = ({ children, className, notebookStyle, ...props }) => {
  return (
    <motion.div 
      className={twMerge(
        'relative bg-paper-base rounded-lg shadow-paper border border-ink-pencil/5 overflow-hidden',
        notebookStyle ? 'p-6 border-l-4 border-l-primary-500' : 'p-lg md:p-xl',
        className
      )}
      {...props}
    >
      {notebookStyle && <div className="absolute inset-0 pointer-events-none bg-grad-ruled-lines opacity-60" style={{ backgroundPosition: '0 -6px' }}></div>}
      <div className="absolute inset-0 pointer-events-none texture-paper"></div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
