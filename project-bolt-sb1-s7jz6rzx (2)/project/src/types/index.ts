export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  prize: number;
}

export interface ThemeQuestions {
  cricket: Question[];
  coding: Question[];
  gk: Question[];
  riddles: Question[];
}

export type Theme = 'cricket' | 'coding' | 'gk' | 'riddles';

export interface GameState {
  screen: 'registration' | 'theme-selection' | 'game' | 'result';
  userName: string;
  selectedTheme: Theme | null;
  currentQuestionIndex: number;
  currentPrize: number;
  totalPrize: number;
  gameOver: boolean;
}