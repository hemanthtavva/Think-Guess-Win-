import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { GameButton } from './GameButton';

export const AutoDemo: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState(75);
  const [currentGuess, setCurrentGuess] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [guesses, setGuesses] = useState<number[]>([]);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const reset = () => {
    setCurrentGuess(null);
    setMessage('');
    setGuesses([]);
    setMin(1);
    setMax(100);
    setIsPlaying(false);
  };

  const makeGuess = () => {
    const guess = Math.floor((min + max) / 2);
    setCurrentGuess(guess);
    setGuesses(prev => [...prev, guess]);

    if (guess === targetNumber) {
      setMessage(`Found it! The number was ${guess}`);
      setIsPlaying(false);
    } else if (guess < targetNumber) {
      setMin(guess + 1);
      setMessage(`${guess} is too low`);
    } else {
      setMax(guess - 1);
      setMessage(`${guess} is too high`);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && currentGuess !== targetNumber) {
      timer = setTimeout(makeGuess, 1500);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentGuess, min, max]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Automated Demo</h2>
          <p className="text-gray-600">Watch the computer find the number {targetNumber}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <GameButton
            onClick={() => setIsPlaying(!isPlaying)}
            icon={isPlaying ? Pause : Play}
            variant="primary"
          >
            {isPlaying ? 'Pause' : 'Start'} Demo
          </GameButton>
          <GameButton
            onClick={reset}
            icon={RotateCcw}
            variant="secondary"
          >
            Reset
          </GameButton>
        </div>

        {message && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium text-center">{message}</p>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Guesses:</h3>
          <div className="flex flex-wrap gap-2">
            {guesses.map((guess, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  guess === targetNumber
                    ? 'bg-green-100 text-green-800'
                    : guess < targetNumber
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {guess}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};