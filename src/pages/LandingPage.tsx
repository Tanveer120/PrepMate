import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PaperCard } from '../components/PaperCard';
import { Button } from '../components/Button';
import { Sticker } from '../components/Sticker';
import { pageTransition, stickerFloat } from '../animations/framerVariants';
import { BookOpen } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-1 flex flex-col items-center justify-center min-h-[80vh]"
    >
      <div className="relative w-full max-w-lg">
        {/* Floating background decorations */}
        <motion.div variants={stickerFloat} initial="initial" animate="animate" className="absolute -top-12 -left-8">
          <Sticker label="Stay Cozy" colorClass="bg-accent-peach" />
        </motion.div>
        
        <motion.div variants={stickerFloat} initial="initial" animate="animate" className="absolute -bottom-8 -right-4" style={{ animationDelay: '2s' }}>
          <Sticker label="You've got this!" colorClass="bg-accent-sage" />
        </motion.div>

        <PaperCard className="text-center p-xl relative z-10">
          <div className="mb-8">
            <h1 className="text-h1 text-primary-500 mb-2">PrepMate</h1>
            <p className="font-display text-ink-muted text-xl">Your cozy study desk.</p>
          </div>
          
          <div className="flex flex-col gap-4 items-center">
            <Button size="lg" onClick={() => navigate('/subjects')} className="w-full sm:w-auto">
              <BookOpen className="w-5 h-5 mr-2" />
              Open Notebook
            </Button>
            
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" onClick={() => navigate('/bookmarks')}>
                Bookmarks
              </Button>
              <Button variant="ghost" onClick={() => navigate('/settings')}>
                Settings
              </Button>
            </div>
          </div>
        </PaperCard>
      </div>
    </motion.div>
  );
};
