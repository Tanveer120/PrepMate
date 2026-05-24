import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperCard } from '../components/PaperCard';
import { QuestionCard } from '../components/QuestionCard';
import { OptionButton } from '../components/OptionButton';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { MascotRoot, type MascotMood } from '../components/MascotRoot';
import { useQuizEngine } from '../hooks/useQuizEngine';
import { type Question, type Subject, shuffleArray } from '../utils/quiz';
import { pageTransition } from '../animations/framerVariants';
import { useStorage } from '../contexts/StorageContext';
import { useSettings } from '../contexts/SettingsContext';
import { ChevronLeft, Bookmark } from 'lucide-react';

export const QuizPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [mascotState, setMascotState] = useState<{ mood: MascotMood; message?: string }>({ mood: 'idle' });

  const { isBookmarked, toggleBookmark } = useStorage();
  const { settings } = useSettings();

  const targetQuestionId = (location.state as { targetQuestionId?: string })?.targetQuestionId;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const basePath = import.meta.env.BASE_URL || '/';
        const subjectRes = await fetch(`${basePath}data/subjects.json`);
        const subjects: Subject[] = await subjectRes.json();
        const subject = subjects.find(s => s.slug === slug);

        if (!subject) throw new Error("Subject not found");

        const qRes = await fetch(`${basePath}data/${subject.questionsFile}`);
        const allQuestions: any[] = await qRes.json();

        // Sanitize questions to handle variations in JSON format (e.g., missing tags or numerical correct answers)
        const sanitizedQuestions: Question[] = allQuestions.map(q => ({
          ...q,
          tags: q.tags || [],
          correct: Array.isArray(q.correct) ? q.correct.map((c: any) => {
            if (typeof c === 'number' && q.options[c]) {
              return q.options[c].id;
            }
            return String(c);
          }) : [],
          difficulty: q.difficulty || 1,
        }));

        // Basic shuffle and limit if needed (e.g. max 10 for a session)
        const finalQuestions = settings.randomizeQuestions 
          ? shuffleArray(sanitizedQuestions) 
          : sanitizedQuestions;
          
        setQuestions(finalQuestions);
      } catch (err) {
        console.error("Error loading quiz:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [slug, settings.randomizeQuestions]);

  const {
    status,
    currentQuestion,
    currentIndex,
    totalQuestions,
    answers,
    skippedIds,
    startSession,
    submitAnswer,
    skipQuestion,
    nextQuestion,
    goToQuestion,
    getScore
  } = useQuizEngine(questions);

  const score = getScore();

  // Auto-start when loaded
  useEffect(() => {
    if (!loading && questions.length > 0 && status === 'ready') {
      startSession();
    }
  }, [loading, questions, status, startSession]);

  // Jump to bookmarked question
  useEffect(() => {
    if (status === 'active' && targetQuestionId && questions.length > 0) {
      const idx = questions.findIndex(q => q.id === targetQuestionId);
      if (idx !== -1) {
        goToQuestion(idx);
      }
    }
  }, [status, targetQuestionId, questions, goToQuestion]);

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const isAnswered = !!currentAnswer;

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;

    // For MVP, single correct MCQ
    submitAnswer([optionId]);

    const isCorrect = currentQuestion?.correct.includes(optionId);

    if (isCorrect) {
      setMascotState({ mood: 'cheer', message: 'Great job!' });
    } else {
      setMascotState({ mood: 'empathetic', message: 'Almost had it!' });
    }

    setTimeout(() => {
      setMascotState({ mood: 'idle' });
    }, 2500);
  };

  const handleNext = () => {
    if (currentIndex === totalQuestions - 1) {
      // Done
      navigate(`/results`, { state: { score: getScore(), subject: slug } });
    } else {
      nextQuestion();
    }
  };

  if (loading) {
    return <div className="flex-1 flex items-center justify-center font-display text-ink-muted">Waking up notebooks...</div>;
  }

  if (!currentQuestion) {
    return <div className="flex-1 flex items-center justify-center font-display">No questions found.</div>;
  }

  const bookmarked = isBookmarked(currentQuestion.id);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-1 flex flex-col w-full pb-20 md:pb-6"
    >
      <div className="flex justify-between items-center mb-4 max-w-notebook mx-auto w-full">
        <Button variant="ghost" size="sm" onClick={() => navigate('/subjects')}>
          <ChevronLeft className="w-5 h-5 mr-1" /> Back
        </Button>
        <div className="w-1/2">
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleBookmark(currentQuestion.id, slug || '')}
          className={bookmarked ? 'text-accent-peach' : 'text-ink-muted'}
        >
          <Bookmark className="w-5 h-5" fill={bookmarked ? 'currentColor' : 'none'} />
        </Button>
      </div>

      <div className="flex-1 flex flex-col xl:grid xl:grid-cols-[260px_minmax(auto,800px)_minmax(0,1fr)] xl:gap-6 items-start w-full px-4 xl:px-0 xl:-ml-[72px] mb-2">
        {/* Left Question Navigator */}
        <div className="hidden xl:flex flex-col items-center gap-3 sticky top-24 w-full -ml-8">
          <p className="font-display text-xs text-ink-muted">Jump to</p>
          <div className="flex flex-col items-center gap-2 w-full px-2">
            <input
              type="range"
              min={1}
              max={totalQuestions}
              value={currentIndex + 1}
              onChange={(e) => goToQuestion(Number(e.target.value) - 1)}
              className="question-slider w-full"
            />
            <span className="font-display text-sm font-bold text-primary-500">
              {currentIndex + 1} / {totalQuestions}
            </span>
          </div>
          <p className="font-display text-xs text-ink-muted -mb-1">Questions</p>
          <div className="flex flex-wrap gap-1 w-full max-h-[200px] overflow-y-auto question-nav p-2">
            {questions.map((q, i) => {
              const ans = answers[q.id];
              let dotColor = 'bg-ink-faint text-ink-muted';
              if (ans) {
                dotColor = ans.correct ? 'bg-accent-sage text-white' : 'bg-accent-peach text-white';
              }
              if (i === currentIndex) {
                dotColor = 'bg-primary-500 text-white ring-2 ring-primary-200';
              }
              return (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(i)}
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-display font-bold transition-all duration-150 hover:scale-110 ${dotColor}`}
                  title={`Q${i + 1}${ans ? ` (${ans.correct ? '✓' : '✗'})` : ''}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {/* Skipped Questions Scroller */}
          {questions.some((q) => skippedIds.has(q.id) && !answers[q.id]) && (
            <>
              <p className="font-display text-xs text-ink-muted mt-3">Skipped questions</p>
              <div className="flex flex-wrap gap-1 w-full max-h-[100px] overflow-y-auto question-nav p-2">
                {questions.map((q, i) => {
                  if (!skippedIds.has(q.id) || answers[q.id]) return null;
                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(i)}
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-display font-bold transition-all duration-150 hover:scale-110 bg-accent-butter text-ink-muted dark:text-white border border-ink-pencil/30 ${i === currentIndex ? 'ring-2 ring-primary-200' : ''}`}
                      title={`Skipped Q${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Center Main Card */}
        <PaperCard className="w-full max-w-notebook shrink-0 flex flex-col z-10 mx-auto">
          <AnimatePresence mode="wait">
            <QuestionCard key={currentQuestion.id} question={currentQuestion} />
          </AnimatePresence>

          <div className="mt-4 flex flex-col gap-2 md:gap-3">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = currentAnswer?.selected.includes(opt.id);
              const isCorrect = currentQuestion.correct.includes(opt.id);

              let status: 'correct' | 'incorrect' | null = null;
              if (isAnswered) {
                if (isSelected && isCorrect) status = 'correct';
                if (isSelected && !isCorrect) status = 'incorrect';
                if (!isSelected && isCorrect) status = 'correct'; // Show correct answer
              }

              return (
                <OptionButton
                  key={opt.id}
                  index={idx}
                  option={opt}
                  selected={!!isSelected}
                  status={status}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(opt.id)}
                />
              );
            })}
          </div>

          <div className="mt-4 flex justify-end gap-3">
            {!isAnswered && (
              <Button
                variant="secondary"
                size="lg"
                onClick={() => { skipQuestion(); setMascotState({ mood: 'empathetic', message: 'Skipped! You can come back later.' }); setTimeout(() => setMascotState({ mood: 'idle' }), 1500); }}
              >
                Skip
              </Button>
            )}
            <Button 
              size="lg" 
              disabled={!isAnswered && !skippedIds.has(currentQuestion.id) && settings.immediateFeedback}
              onClick={handleNext}
            >
              {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </PaperCard>

        {/* Right Column for Explanation & Stats */}
        <div className="w-full max-w-notebook mx-auto xl:mx-0 mt-6 xl:mt-0 relative flex flex-col gap-4">
          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="w-full xl:w-[350px] shrink-0"
              >
                <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-accent-lavender border-2 border-primary-300 rounded-3xl p-5 md:p-6 shadow-xl relative z-20 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-paper-base p-2 rounded-full shadow-sm">
                      <span className="text-xl block leading-none">💡</span>
                    </div>
                    <p className="font-display font-bold text-ink-main text-xl">Explanation</p>
                  </div>
                  <p className="text-ink-main font-medium text-base leading-relaxed">{currentQuestion.explanation || "No explanation provided."}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: 0.1 }}
                className="w-full xl:w-[350px] shrink-0"
              >
                <div className="bg-gradient-to-br from-accent-butter via-accent-lavender to-primary-50 border-2 border-accent-lavender rounded-3xl p-5 md:p-6 shadow-xl relative z-20 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-paper-base p-2 rounded-full shadow-sm">
                      <span className="text-xl block leading-none">📊</span>
                    </div>
                    <p className="font-display font-bold text-ink-main text-xl">Progress</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-paper-base/60 rounded-2xl p-3">
                      <p className="font-display text-2xl font-bold text-accent-sage">{score.correct}</p>
                      <p className="text-ink-muted text-xs font-medium mt-1">Correct</p>
                    </div>
                    <div className="bg-paper-base/60 rounded-2xl p-3">
                      <p className="font-display text-2xl font-bold text-accent-peach">{score.answered - score.correct}</p>
                      <p className="text-ink-muted text-xs font-medium mt-1">Wrong</p>
                    </div>
                    <div className="bg-paper-base/60 rounded-2xl p-3">
                      <p className="font-display text-2xl font-bold text-primary-500">{score.correct}/{score.answered}</p>
                      <p className="text-ink-muted text-xs font-medium mt-1">Score</p>
                    </div>
                  </div>
                  <div className="mt-3 bg-paper-base/60 rounded-2xl p-3 flex items-center justify-between">
                    <span className="text-ink-muted text-sm font-medium">Overall</span>
                    <span className="font-display font-bold text-ink-main">{score.percentage}%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MascotRoot mood={mascotState.mood} message={mascotState.message} />
    </motion.div>
  );
};
