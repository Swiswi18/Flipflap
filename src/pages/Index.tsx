
import React, { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import ThemeSelector from "../components/ThemeSelector";
import DifficultySelector from "../components/DifficultySelector";
import LeaderboardModal from "../components/LeaderboardModal";
import { Player } from "../utils/gameUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("nature");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [leaderboard, setLeaderboard] = useState<Player[]>([]);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  // Load leaderboard from localStorage on component mount
  useEffect(() => {
    const savedLeaderboard = localStorage.getItem("memoryGameLeaderboard");
    if (savedLeaderboard) {
      try {
        const parsed = JSON.parse(savedLeaderboard);
        setLeaderboard(parsed);
      } catch (e) {
        console.error("Failed to parse leaderboard data", e);
      }
    }
  }, []);

  // Handle game completion
  const handleGameComplete = (score: number, moves: number, time: number) => {
    if (playerName.trim()) {
      const newPlayer: Player = {
        name: playerName,
        score,
        moves,
        time,
        difficulty: selectedDifficulty,
        date: new Date().toISOString().split('T')[0]
      };
      
      const updatedLeaderboard = [...leaderboard, newPlayer];
      setLeaderboard(updatedLeaderboard);
      
      // Save to localStorage
      localStorage.setItem("memoryGameLeaderboard", JSON.stringify(updatedLeaderboard));
    }
  };

  // Reset game state
  const handleResetGame = () => {
    setGameStarted(false);
  };

  // Start the game
  const handleStartGame = () => {
    if (!playerName.trim()) {
      setPlayerName("Player");
    }
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {!gameStarted ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">Memory Match</h1>
            <p className="text-xl opacity-80">Test your memory and concentration skills</p>
          </div>

          <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-center text-white">Game Setup</CardTitle>
              <CardDescription className="text-center text-white/70">
                Enter your name and select game options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="playerName" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="playerName"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  maxLength={15}
                  className="bg-white/20 border-0 text-white placeholder:text-white/50"
                />
              </div>

              <ThemeSelector 
                selectedTheme={selectedTheme} 
                onSelectTheme={setSelectedTheme} 
              />
              
              <DifficultySelector 
                selectedDifficulty={selectedDifficulty} 
                onSelectDifficulty={setSelectedDifficulty} 
              />
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700" 
                  onClick={handleStartGame}
                >
                  Start Game
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 text-white bg-transparent hover:bg-white/20"
                  onClick={() => setLeaderboardOpen(true)}
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <GameBoard
          difficulty={selectedDifficulty}
          theme={selectedTheme}
          playerName={playerName}
          onGameComplete={handleGameComplete}
          onResetGame={handleResetGame}
        />
      )}

      <LeaderboardModal
        open={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
        leaderboard={leaderboard}
        selectedDifficulty={selectedDifficulty}
      />
    </div>
  );
};

export default Index;
