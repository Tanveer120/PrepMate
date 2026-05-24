import { useState, useCallback } from 'react';
import { type Question, validateAnswer } from '../utils/quiz';

export interface AnswerRecord {
  selected: string[];
  correct: boolean;
  timeMs?: number;
}

export function useQuizEngine(questions: Question[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>({});
  const [skippedIds, setSkippedIds] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'ready' | 'active' | 'finished'>('ready');

  const currentQuestion = questions[currentIndex];
  
  const startSession = useCallback(() => {
    setStatus('active');
    setCurrentIndex(0);
    setAnswers({});
    setSkippedIds(new Set());
  }, []);

  const submitAnswer = useCallback((selectedOptions: string[]) => {
    if (!currentQuestion) return;
    
    const isCorrect = validateAnswer(currentQuestion, selectedOptions);
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selected: selectedOptions,
        correct: isCorrect
      }
    }));
    setSkippedIds(prev => { const n = new Set(prev); n.delete(currentQuestion.id); return n; });
  }, [currentQuestion]);

  const skipQuestion = useCallback(() => {
    if (!currentQuestion) return;
    setSkippedIds(prev => { const n = new Set(prev); n.add(currentQuestion.id); return n; });
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentQuestion, currentIndex, questions.length]);

  const goToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  }, [questions.length]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStatus('finished');
    }
  }, [currentIndex, questions.length]);

  const prevQuestion = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const getScore = useCallback(() => {
    let correct = 0;
    let answered = 0;
    Object.entries(answers).forEach(([id, ans]) => {
      if (skippedIds.has(id)) return;
      answered++;
      if (ans.correct) correct++;
    });
    return {
      correct,
      total: questions.length,
      answered,
      skipped: skippedIds.size,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0
    };
  }, [answers, questions.length, skippedIds]);

  return {
    status,
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    answers,
    skippedIds,
    startSession,
    submitAnswer,
    skipQuestion,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    getScore
  };
}
