
import React, { useState, useEffect } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import { Card as CardType, createCards, isGameComplete, calculateScore, difficultySettings } from "../utils/gameUtils";
import { themes, ThemeData } from "../data/cardImages";
import { useToast } from "@/components/ui/use-toast";

interface GameBoardProps {
  difficulty: "easy" | "medium" | "hard";
  theme: string;
  playerName: string;
  onGameComplete: (score: number, moves: number, time: number) => void;
  onResetGame: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  difficulty,
  theme,
  playerName,
  onGameComplete,
  onResetGame,
}) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [moves, setMoves] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(difficultySettings[difficulty].timeLimit);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isCheckingMatch, setIsCheckingMatch] = useState(false);
  const { toast } = useToast();
  
  const themeData: ThemeData = themes[theme] || themes.nature;
  const { gridSize } = difficultySettings[difficulty];

  // Initialize game
  useEffect(() => {
    const newCards = createCards({ difficulty, theme }, themeData);
    setCards(newCards);
    setMoves(0);
    setFlippedCards([]);
    setTimeRemaining(difficultySettings[difficulty].timeLimit);
    setGameOver(false);
    setGameStarted(false);
  }, [difficulty, theme]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    
    if (gameStarted && !gameOver && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setGameOver(true);
            toast({
              title: "Time's up!",
              description: "You ran out of time. Try again!",
              variant: "destructive",
            });
            // Calculate final score even if time ran out
            const finalScore = calculateScore(moves, 0, difficulty);
            onGameComplete(finalScore, moves, difficultySettings[difficulty].timeLimit);
            // Redirect to start page after a delay
            setTimeout(() => {
              onResetGame();
            }, 3000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStarted, gameOver, timeRemaining, difficulty, moves, onGameComplete, onResetGame]);

  // Check for game completion
  useEffect(() => {
    if (gameStarted && !gameOver && cards.length > 0 && isGameComplete(cards)) {
      setGameOver(true);
      const finalScore = calculateScore(moves, timeRemaining, difficulty);
      
      toast({
        title: "Congratulations!",
        description: `You completed the game with a score of ${finalScore}!`,
        variant: "default",
      });
      
      onGameComplete(finalScore, moves, difficultySettings[difficulty].timeLimit - timeRemaining);
      
      // Redirect to start page after a delay
      setTimeout(() => {
        onResetGame();
      }, 3000);
    }
  }, [cards, gameStarted, gameOver, moves, timeRemaining, difficulty, onGameComplete, onResetGame]);

  // Handle card click
  const handleCardClick = (clickedCard: CardType) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    if (isCheckingMatch || gameOver || clickedCard.isFlipped || clickedCard.isMatched) {
      return;
    }

    // Flip the card
    const updatedCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    
    const updatedFlippedCards = [...flippedCards, clickedCard];
    
    setCards(updatedCards);
    setFlippedCards(updatedFlippedCards);
    
    // Check if we have a pair to compare
    if (updatedFlippedCards.length === 2) {
      setMoves(moves + 1);
      setIsCheckingMatch(true);
      
      const [firstCard, secondCard] = updatedFlippedCards;
      const isMatch = firstCard.pairId === secondCard.pairId;
      
      setTimeout(() => {
        const updatedCardsAfterCheck = updatedCards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return isMatch 
              ? { ...card, isMatched: true } 
              : { ...card, isFlipped: false };
          }
          return card;
        });
        
        setCards(updatedCardsAfterCheck);
        setFlippedCards([]);
        setIsCheckingMatch(false);
        
        if (isMatch) {
          toast({
            title: "Match!",
            description: "You found a pair!",
            variant: "default",
          });
        }
      }, 1000);
    }
  };

  // Grid size based on difficulty
  const gridClass = {
    easy: "grid-cols-4",
    medium: "grid-cols-6",
    hard: "grid-cols-8",
  }[difficulty];

  return (
    <div className={`${themeData.background} min-h-screen flex flex-col items-center py-8 px-4`}>
      <ScoreBoard 
        moves={moves} 
        timeRemaining={timeRemaining} 
        playerName={playerName} 
        onReset={onResetGame} 
      />
      
      <div 
        className={`grid ${gridClass} gap-2 md:gap-4 w-full max-w-4xl mt-6`}
      >
        {cards.map(card => (
          <Card 
            key={card.id}
            card={card}
            onClick={handleCardClick}
            cardBack={themeData.cardBack}
            disabled={isCheckingMatch || gameOver}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
