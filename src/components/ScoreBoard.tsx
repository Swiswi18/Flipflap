
import React from "react";
import { Button } from "@/components/ui/button";
import { formatTime } from "../utils/gameUtils";
import { Trophy, RotateCcw } from "lucide-react";

interface ScoreBoardProps {
  moves: number;
  timeRemaining: number;
  playerName: string;
  onReset: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  moves,
  timeRemaining,
  playerName,
  onReset,
}) => {
  const timeClass = timeRemaining < 30 ? "text-red-500" : "text-white";

  return (
    <div className="bg-black bg-opacity-50 rounded-lg p-4 w-full max-w-4xl text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Trophy className="mr-2" />
          <h2 className="text-xl font-bold mr-2">{playerName || "Player"}</h2>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <div className="text-center sm:text-left mb-3 sm:mb-0">
            <p className="text-sm opacity-70">Moves</p>
            <p className="text-xl font-bold">{moves}</p>
          </div>
          
          <div className="text-center sm:text-left mb-3 sm:mb-0">
            <p className="text-sm opacity-70">Time</p>
            <p className={`text-xl font-bold ${timeClass}`}>{formatTime(timeRemaining)}</p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            onClick={onReset}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
