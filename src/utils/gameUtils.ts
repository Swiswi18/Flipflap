
import { CardImage, ThemeData } from "../data/cardImages";

export interface Card {
  id: number;
  image: string;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameSettings {
  difficulty: "easy" | "medium" | "hard";
  theme: string;
}

export interface Player {
  name: string;
  score: number;
  time: number;
  moves: number;
  difficulty: string;
  date: string;
}

export const difficultySettings = {
  easy: { gridSize: 4, pairs: 8, timeLimit: 120 },
  medium: { gridSize: 6, pairs: 18, timeLimit: 240 },
  hard: { gridSize: 8, pairs: 32, timeLimit: 360 }
};

// Create cards for the game based on settings
export const createCards = (settings: GameSettings, themeData: ThemeData): Card[] => {
  const { difficulty } = settings;
  const { pairs } = difficultySettings[difficulty];
  
  // Get required number of images for the pairs
  const images = themeData.cardImages.slice(0, pairs);
  
  // Create pairs of cards
  const cards: Card[] = [];
  images.forEach((img, index) => {
    // First card of the pair
    cards.push({
      id: index * 2,
      image: img.image,
      pairId: index,
      isFlipped: false,
      isMatched: false
    });
    
    // Second card of the pair
    cards.push({
      id: index * 2 + 1,
      image: img.image,
      pairId: index,
      isFlipped: false,
      isMatched: false
    });
  });
  
  // Shuffle cards
  return shuffleCards(cards);
};

// Fisher-Yates shuffle algorithm
export const shuffleCards = (cards: Card[]): Card[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Calculate score based on moves, time remaining, and difficulty
export const calculateScore = (moves: number, timeRemaining: number, difficulty: string): number => {
  const baseScore = 1000;
  const timeBonus = timeRemaining * 10; // 10 points per second remaining
  const movePenalty = Math.max(0, moves - difficultySettings[difficulty as keyof typeof difficultySettings].pairs * 2) * 5; // 5 points per extra move
  
  return Math.max(0, baseScore + timeBonus - movePenalty);
};

// Check if the game is completed (all cards matched)
export const isGameComplete = (cards: Card[]): boolean => {
  return cards.every(card => card.isMatched);
};

// Format time from seconds to MM:SS
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
