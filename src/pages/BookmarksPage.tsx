import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PaperCard } from '../components/PaperCard';
import { Button } from '../components/Button';
import { pageTransition, cardEntrance } from '../animations/framerVariants';
import { useStorage } from '../contexts/StorageContext';
import { ChevronLeft, Trash2 } from 'lucide-react';

export const BookmarksPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookmarks, toggleBookmark } = useStorage();
  const bList = Object.values(bookmarks).sort((a, b) => b.createdAt - a.createdAt);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-6 w-full max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-h1 text-ink-main font-display">Bookmarks</h1>
      </div>

      {bList.length === 0 ? (
        <PaperCard className="text-center py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none texture-paper opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-mascot-body rounded-blob shadow-float border-2 border-mascot-border flex items-center justify-center">
              <span className="font-display text-mascot-ink text-2xl font-bold">• •</span>
            </div>
            <div>
              <p className="font-display text-h3 text-ink-main mb-1">Your notebook is empty</p>
              <p className="font-body text-sm text-ink-muted max-w-xs">
                When you find a question worth revisiting, bookmark it here.
                Moko will keep it safe for you 💚
              </p>
            </div>
          </div>
        </PaperCard>
      ) : (
        <div className="flex flex-col gap-4">
          {bList.map((bm, idx) => (
            <motion.div
              key={bm.questionId}
              variants={cardEntrance}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.05 }}
            >
              <PaperCard className="flex items-center justify-between !p-4 hover:shadow-hover cursor-pointer" onClick={() => navigate(`/quiz/${bm.subject}`, { state: { targetQuestionId: bm.questionId } })}>
                <div>
                  <span className="text-xs bg-accent-lavender text-ink-muted px-2 py-1 rounded-sm mb-2 inline-block">
                    {bm.subject}
                  </span>
                  <p className="text-sm font-body text-ink-main">Question ID: {bm.questionId}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); toggleBookmark(bm.questionId, bm.subject); }} className="text-accent-peach hover:text-accent-peach">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
