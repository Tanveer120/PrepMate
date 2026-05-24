import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PaperCard } from '../components/PaperCard';
import { pageTransition, cardEntrance } from '../animations/framerVariants';
import type { Subject } from '../utils/quiz';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const SubjectListPage: React.FC = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine the base path; Vite's import.meta.env.BASE_URL will be '/' in dev and whatever is set in prod
    const basePath = import.meta.env.BASE_URL || '/';
    fetch(`${basePath}data/subjects.json`)
      .then(res => res.json())
      .then(data => {
        setSubjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load subjects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-6 w-full max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-h1 text-ink-main font-display">My Notebooks</h1>
      </div>

      {loading ? (
        <div className="text-center p-8 text-ink-muted">Loading your notebooks...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, idx) => (
            <motion.div
              key={subject.slug}
              variants={cardEntrance}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => navigate(`/quiz/${subject.slug}`)}
              className="cursor-pointer h-full"
            >
              <PaperCard notebookStyle className="h-full flex flex-col hover:shadow-hover transition-shadow duration-slow">
                <h2 className="text-xl font-display font-bold leading-[24px] mb-[24px] truncate">{subject.title}</h2>
                <p className="text-ink-muted font-body text-sm leading-[24px] mb-[24px] flex-1 line-clamp-3">{subject.description}</p>
                <div className="flex justify-between items-center mt-auto pt-[16px] pb-[8px] border-t border-ink-pencil/20 h-[48px]">
                  <span className="text-xs font-bold text-ink-faint leading-[24px] whitespace-nowrap">{subject.count} Qs</span>
                  <div className="flex gap-1">
                    {subject.tags[0] && (
                      <span className="text-xs bg-ink-pencil/10 px-2 py-1 rounded-sm text-ink-muted whitespace-nowrap">
                        {subject.tags[0]}
                      </span>
                    )}
                  </div>
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
