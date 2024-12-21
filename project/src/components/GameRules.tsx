import React from 'react';
import { BookOpen, Target, ArrowUp, ArrowDown, Award } from 'lucide-react';

export const GameRules: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full transition-colors duration-200">
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">How to Play</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">The game will randomly select a number between 1 and 100.</p>
        </div>
        
        <div className="flex items-start">
          <ArrowUp className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">If your guess is too low, you'll be prompted to guess higher.</p>
        </div>
        
        <div className="flex items-start">
          <ArrowDown className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">If your guess is too high, you'll be prompted to guess lower.</p>
        </div>
        
        <div className="flex items-start">
          <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">Try to guess the number in as few attempts as possible!</p>
        </div>
      </div>
    </div>
  );
};