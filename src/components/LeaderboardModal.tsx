
import React from "react";
import { formatTime } from "../utils/gameUtils";
import { Player } from "../utils/gameUtils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LeaderboardModalProps {
  open: boolean;
  onClose: () => void;
  leaderboard: Player[];
  selectedDifficulty: string;
}

const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  open,
  onClose,
  leaderboard,
  selectedDifficulty,
}) => {
  // Filter leaderboard by selected difficulty and sort by score
  const filteredLeaderboard = leaderboard
    .filter(player => player.difficulty.toLowerCase() === selectedDifficulty.toLowerCase())
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Get top 10

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Leaderboard - {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
          </DialogTitle>
        </DialogHeader>
        
        {filteredLeaderboard.length > 0 ? (
          <div className="mt-4">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-2">#</th>
                  <th className="pb-2">Player</th>
                  <th className="pb-2 text-right">Score</th>
                  <th className="pb-2 text-right">Time</th>
                  <th className="pb-2 text-right">Moves</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((player, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-2 font-medium">{index + 1}</td>
                    <td className="py-2">{player.name}</td>
                    <td className="py-2 text-right">{player.score}</td>
                    <td className="py-2 text-right">{formatTime(player.time)}</td>
                    <td className="py-2 text-right">{player.moves}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No scores yet for {selectedDifficulty} difficulty.
            <p className="mt-2">Be the first to set a high score!</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeaderboardModal;
