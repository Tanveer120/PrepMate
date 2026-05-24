import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mascotIdle, mascotCheer } from '../animations/framerVariants';
import { twMerge } from 'tailwind-merge';

export type MascotMood = 'idle' | 'cheer' | 'thinking' | 'empathetic';

interface MascotRootProps {
  mood?: MascotMood;
  message?: string;
  className?: string;
}

export const MascotRoot: React.FC<MascotRootProps> = ({ mood = 'idle', message, className }) => {
  // A simple CSS-based representation of the mascot since we don't have SVGs
  const getFace = () => {
    switch (mood) {
      case 'cheer': return '^ ^';
      case 'thinking': return 'o o';
      case 'empathetic': return 'u u';
      case 'idle':
      default: return '• •';
    }
  };

  const getAnimation = () => {
    switch (mood) {
      case 'cheer': return mascotCheer.animate;
      default: return mascotIdle.animate;
    }
  };

  return (
    <div className={twMerge("fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-end gap-4 pointer-events-none", className)}>
      <motion.div
        variants={mascotIdle}
        initial="initial"
        animate={getAnimation()}
        className="relative"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 bg-mascot-body rounded-blob shadow-float border-2 border-mascot-border flex flex-col items-center justify-center pointer-events-auto">
          {/* Eyes/Face */}
          <span className="font-display text-mascot-ink text-lg font-bold">
            {getFace()}
          </span>
          {/* Cheeks */}
          <div className="absolute top-1/2 left-2 w-2 h-1 bg-mascot-cheek rounded-full opacity-60"></div>
          <div className="absolute top-1/2 right-2 w-2 h-1 bg-mascot-cheek rounded-full opacity-60"></div>
        </div>
      </motion.div>

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10, y: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10, y: 10 }}
            className="mb-4 bg-paper-base/90 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-bl-none shadow-sticker border border-primary-50 max-w-[200px]"
          >
            <p className="font-display text-ink-main text-sm md:text-base leading-tight">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
