import React from 'react';
import { Trophy } from 'lucide-react';

interface GameScoreProps {
  bestScore: number;
}

export const GameScore: React.FC<GameScoreProps> = ({ bestScore }) => {
  return bestScore < 999 ? (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative px-4 py-2 bg-white ring-1 ring-yellow-500/50 rounded-lg leading-none flex items-center">
        <Trophy className="w-5 h-5 text-yellow-500 mr-2 animate-bounce" />
        <span className="text-yellow-600 font-semibold">Best Score: {bestScore} attempts</span>
      </div>
    </div>
  ) : null;
};