
import React from "react";
import { Card as CardType } from "../utils/gameUtils";

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
  cardBack: string;
  disabled: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, cardBack, disabled }) => {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick(card);
    }
  };

  const getCardClasses = () => {
    let classes = "card-inner cursor-pointer shadow-lg relative h-full w-full";
    
    if (card.isFlipped) {
      classes += " animate-card-flip";
    } else {
      classes += " animate-card-flip-back";
    }
    
    return classes;
  };

  const getContainerClasses = () => {
    let classes = "memory-card aspect-square rounded-md overflow-hidden";
    
    if (card.isMatched) {
      classes += " ring-4 ring-green-500 animate-match-glow";
    }
    
    return classes;
  };

  return (
    <div 
      className={getContainerClasses()}
      onClick={handleClick}
    >
      <div className={getCardClasses()}>
        {!card.isFlipped && (
          <div 
            className="card-back absolute w-full h-full bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${cardBack})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="font-bold text-white text-2xl">?</span>
            </div>
          </div>
        )}
        <div 
          className={`card-front absolute w-full h-full bg-cover bg-center rounded-md ${card.isFlipped ? 'z-10' : 'z-0'}`}
          style={{ backgroundImage: `url(${card.image})` }}
        />
      </div>
    </div>
  );
};

export default Card;
