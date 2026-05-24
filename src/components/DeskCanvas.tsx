import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { FloatingParticles } from './FloatingParticles';
import { twMerge } from 'tailwind-merge';

interface DeskCanvasProps {
  children: React.ReactNode;
  className?: string;
}

export const DeskCanvas: React.FC<DeskCanvasProps> = ({ children, className }) => {
  const { settings } = useSettings();
  const bgClass = settings.themeIntensity === 'high' ? 'bg-desk-dark' : 'bg-desk-light';

  return (
    <div className={twMerge(`min-h-screen w-full relative overflow-hidden ${bgClass} transition-colors duration-slow`, className)}>
      {/* Subtle grain texture */}
      <div className="absolute inset-0 pointer-events-none texture-grain"></div>

      {/* Floating dust particles */}
      <FloatingParticles />

      {/* Decorative watercolor wash blobs (using CSS gradients for now) */}
      <div className="absolute top-0 left-0 w-full h-full bg-grad-wash-blue opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-grad-wash-peach opacity-10 pointer-events-none rounded-blob transform translate-x-1/4 translate-y-1/4"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
