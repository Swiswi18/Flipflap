
import React from "react";
import { themes } from "../data/cardImages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeSelectorProps {
  selectedTheme: string;
  onSelectTheme: (theme: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedTheme,
  onSelectTheme,
}) => {
  return (
    <div className="w-full max-w-md mb-6">
      <h2 className="text-lg font-semibold mb-3 text-center">Select Theme</h2>
      <div className="flex justify-center gap-3">
        {Object.entries(themes).map(([key, theme]) => (
          <Button
            key={key}
            onClick={() => onSelectTheme(key)}
            className={cn(
              "relative overflow-hidden",
              selectedTheme === key ? "ring-2 ring-white ring-offset-2" : ""
            )}
            variant={selectedTheme === key ? "default" : "outline"}
          >
            <span className="relative z-10">{theme.name}</span>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${theme.cardBack})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(1px)',
              }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
