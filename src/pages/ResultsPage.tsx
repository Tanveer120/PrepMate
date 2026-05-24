import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PaperCard } from '../components/PaperCard';
import { Button } from '../components/Button';
import { Sticker } from '../components/Sticker';
import { MascotRoot } from '../components/MascotRoot';
import { pageTransition } from '../animations/framerVariants';
import { RefreshCw, Home, List } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { score?: { correct: number; total: number; percentage: number }; subject?: string };

  const score = state?.score || { correct: 0, total: 0, percentage: 0 };
  const subjectSlug = state?.subject || '';

  const getFeedbackMessage = () => {
    if (score.percentage >= 90) return "Warm sunshine and quiet confidence ✨";
    if (score.percentage >= 70) return "Gentle progress feels so good 💚";
    if (score.percentage >= 50) return "You grew a little more today 🌱";
    return "Every attempt is a step forward — Moko is proud of you 💚";
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-1 flex flex-col items-center justify-center py-12"
    >
      <PaperCard className="max-w-md w-full text-center relative">
        <div className="absolute -top-8 -right-4">
          <Sticker label="Session Complete!" colorClass="bg-accent-sage" />
        </div>
        
        <h1 className="text-h1 font-display text-primary-500 mb-2">Results</h1>
        <p className="text-ink-muted mb-8">{getFeedbackMessage()}</p>
        
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-primary-50 border-4 border-primary-200 flex flex-col items-center justify-center shadow-inner-soft">
            <span className="text-3xl font-bold text-primary-500">{score.percentage}%</span>
            <span className="text-sm text-ink-muted">{score.correct} / {score.total}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button onClick={() => navigate(`/quiz/${subjectSlug}`)} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Gentle Review
          </Button>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => navigate('/subjects')} className="flex-1">
              <List className="w-4 h-4 mr-2" />
              Subjects
            </Button>
            <Button variant="ghost" onClick={() => navigate('/')} className="flex-1">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </div>
      </PaperCard>

      <MascotRoot mood={score.percentage > 50 ? 'cheer' : 'idle'} message={getFeedbackMessage()} />
    </motion.div>
  );
};
