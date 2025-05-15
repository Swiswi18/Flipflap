
import React from "react";
import { Button } from "@/components/ui/button";
import { difficultySettings } from "../utils/gameUtils";

interface DifficultySelectorProps {
  selectedDifficulty: "easy" | "medium" | "hard";
  onSelectDifficulty: (difficulty: "easy" | "medium" | "hard") => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
}) => {
  return (
    <div className="w-full max-w-md mb-6">
      <h2 className="text-lg font-semibold mb-3 text-center">Select Difficulty</h2>
      <div className="flex justify-center gap-3">
        {(Object.keys(difficultySettings) as Array<"easy" | "medium" | "hard">).map(difficulty => (
          <Button
            key={difficulty}
            onClick={() => onSelectDifficulty(difficulty)}
            variant={selectedDifficulty === difficulty ? "default" : "outline"}
          >
            <span className="capitalize">{difficulty}</span>
            <span className="text-xs ml-2 opacity-70">
              ({difficultySettings[difficulty].gridSize}x{difficultySettings[difficulty].gridSize})
            </span>
          </Button>
        ))}
      </div>
      <div className="text-center text-sm mt-2 text-gray-500">
        {selectedDifficulty === "easy" && "4x4 grid with 8 pairs (2 minutes)"}
        {selectedDifficulty === "medium" && "6x6 grid with 18 pairs (4 minutes)"}
        {selectedDifficulty === "hard" && "8x8 grid with 32 pairs (6 minutes)"}
      </div>
    </div>
  );
};

export default DifficultySelector;
