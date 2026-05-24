import React from 'react';
import { twMerge } from 'tailwind-merge';
import { type HTMLMotionProps, motion } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'sticker' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-paper-base";
    
    const variants = {
      primary: "bg-primary-500 text-white rounded-full shadow-sticker hover:bg-primary-200 hover:text-ink-main hover:shadow-hover",
      secondary: "bg-transparent text-ink-main border-2 border-ink-pencil rounded-lg hover:border-primary-500 hover:text-primary-500",
      sticker: "bg-paper-base text-ink-main rounded-md shadow-sticker hover:shadow-hover border border-ink-pencil/20",
      ghost: "bg-transparent text-ink-muted hover:text-ink-main hover:bg-ink-pencil/10 rounded-md"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm h-button-sm",
      md: "px-4 py-2 text-base h-button-md",
      lg: "px-8 py-3 text-lg h-button-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={twMerge(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
