export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: 'mcq';
  question: string;
  options: QuestionOption[];
  correct: string[];
  explanation?: string;
  difficulty: number;
  tags: string[];
}

export interface Subject {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questionsFile: string;
  version: string;
  count: number;
  tags: string[];
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  // Simple shuffle for now, can implement seeded PRNG if needed
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function validateAnswer(question: Question, selected: string[]): boolean {
  if (selected.length !== question.correct.length) return false;
  const sortedSelected = [...selected].sort();
  const sortedCorrect = [...question.correct].sort();
  return sortedSelected.every((val, index) => val === sortedCorrect[index]);
}
