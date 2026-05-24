import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mascotIdle, mascotCheer } from '../animations/framerVariants';
import { twMerge } from 'tailwind-merge';

export type MascotMood = 'idle' | 'cheer' | 'thinking' | 'empathetic' | 'encouraging' | 'comforting';

interface MascotRootProps {
  mood?: MascotMood;
  message?: string;
  className?: string;
  showTea?: boolean;
}

const mokoMessages: Record<MascotMood, string[]> = {
  idle: [
    'Quietly studying with you ☕',
    'Moko is here 🌱',
    'One small step at a time ✨',
  ],
  cheer: [
    'You understood another tiny thing today! ✨',
    'Learning is growing 🌱',
    'Moko believes in you! 💚',
  ],
  thinking: [
    'Hmm, let\'s think together...',
    'Curious minds learn best 🧐',
  ],
  empathetic: [
    'Learning takes time 🌱',
    'Every try makes you stronger ✨',
    'Wrong answers are never failures here 💚',
  ],
  encouraging: [
    'You\'re doing great 💚',
    'Keep going, one step at a time ✨',
    'Moko is cheering for you!',
  ],
  comforting: [
    'It\'s okay. Let\'s breathe together 🌿',
    'Moko is right here with you 💚',
    'Rainy evenings are for gentle progress ☕',
  ],
};

const facePatterns: Record<MascotMood, string> = {
  idle: '• •',
  cheer: '^ ^',
  thinking: 'o o',
  empathetic: 'u u',
  encouraging: '‿ ‿',
  comforting: '· ·',
};

export const MascotRoot: React.FC<MascotRootProps> = ({
  mood = 'idle',
  message,
  className,
  showTea = false,
}) => {
  const [blink, setBlink] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | undefined>(message);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (message) {
      setCurrentMessage(message);
    } else {
      const msgs = mokoMessages[mood] || mokoMessages.idle;
      setCurrentMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    }
  }, [mood, message]);

  const getAnimation = () => {
    switch (mood) {
      case 'cheer': return mascotCheer.animate;
      default: return mascotIdle.animate;
    }
  };

  return (
    <div className={twMerge("fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-end gap-3 pointer-events-none", className)}>
      {/* Moko body — always anchored to the left */}
      <motion.div
        variants={mascotIdle}
        initial="initial"
        animate={getAnimation()}
        className="relative shrink-0"
      >
        {/* Body */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-mascot-body rounded-blob shadow-float border-2 border-mascot-border flex flex-col items-center justify-center pointer-events-auto relative">
          {/* Eyes/Face */}
          <span className="font-display text-mascot-ink text-lg font-bold leading-none">
            {blink ? '— —' : facePatterns[mood]}
          </span>
          {/* Cheeks */}
          <div className="absolute top-[55%] left-2 w-2 h-1 bg-mascot-cheek rounded-full opacity-60" />
          <div className="absolute top-[55%] right-2 w-2 h-1 bg-mascot-cheek rounded-full opacity-60" />
        </div>

        {/* Tea mug */}
        {showTea && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute -right-5 top-1/2 text-sm pointer-events-none"
          >
            ☕
          </motion.div>
        )}
      </motion.div>

      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 max-w-[180px]"
        >
          <div className="bg-paper-base/95 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl rounded-bl-none shadow-sticker border border-ink-pencil/20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <p className="font-display text-ink-main text-sm md:text-base leading-relaxed">
              {currentMessage}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
