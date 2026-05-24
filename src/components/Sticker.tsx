import React from 'react';
import { type HTMLMotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface StickerProps extends HTMLMotionProps<"div"> {
  label: string;
  icon?: React.ReactNode;
  colorClass?: string; // e.g. 'bg-accent-peach'
  pinned?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({ 
  label, 
  icon, 
  colorClass = 'bg-accent-butter', 
  pinned,
  className,
  ...props 
}) => {
  // Random slight rotation for that handcrafted feel, if not explicitly passed via props.
  // Using a stable random based on label length to avoid hydration mismatch if SSR (though this is SPA)
  const rotation = (label.length % 5) - 2; // range: -2 to 2

  return (
    <motion.div
      initial={{ rotate: rotation, scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, rotate: rotation > 0 ? rotation + 2 : rotation - 2 }}
      className={twMerge(
        'inline-flex items-center gap-xs px-2 py-1 rounded-sm shadow-sticker font-display text-sm whitespace-nowrap',
        colorClass,
        pinned && 'absolute -top-3 -right-3 z-20 shadow-hover',
        className
      )}
      {...props}
    >
      {icon && <span className="w-4 h-4 text-ink-muted">{icon}</span>}
      <span className="text-ink-main">{label}</span>
    </motion.div>
  );
};
