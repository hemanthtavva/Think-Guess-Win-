import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, Target, RefreshCw } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import { getRandomHint } from '../utils/hints';
import { EmojiEffect } from './EmojiEffect';
import { GameScore } from './GameScore';
import { GameButton } from './GameButton';
import { EmojiType } from '../utils/emojiSets';

export const Game: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '999')
  );
  const [guessState, setGuessState] = useState<EmojiType | null>(null);
  const [showVictoryAnimation, setShowVictoryAnimation] = useState(false);
  const [lastGuessNumber, setLastGuessNumber] = useState<number | null>(null);

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameWon(false);
    setPreviousGuesses([]);
    setGuessState(null);
    setShowVictoryAnimation(false);
    setLastGuessNumber(null);
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    const guessNum = parseInt(guess);

    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      setGuess('');
      return;
    }

    if (previousGuesses.includes(guessNum)) {
      setMessage(getRandomHint('duplicate'));
      setGuessState(null);
      setGuess('');
      return;
    }

    setAttempts(prev => prev + 1);
    setPreviousGuesses(prev => [...prev, guessNum]);
    setLastGuessNumber(guessNum);
    setGuess('');

    if (guessNum === targetNumber) {
      setMessage(getRandomHint('victory'));
      setGameWon(true);
      setGuessState('victory');
      setShowVictoryAnimation(true);
      if (attempts + 1 < bestScore) {
        setBestScore(attempts + 1);
        localStorage.setItem('bestScore', (attempts + 1).toString());
      }
    } else if (guessNum < targetNumber) {
      setMessage(getRandomHint('higher'));
      setGuessState('higher');
    } else {
      setMessage(getRandomHint('lower'));
      setGuessState('lower');
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg relative transform transition-all duration-300 hover:shadow-xl">
      <EmojiEffect type={guessState} />
      {showVictoryAnimation && (
        <>
          <ReactConfetti
            recycle={false}
            numberOfPieces={200}
            onConfettiComplete={() => setShowVictoryAnimation(false)}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-20 animate-gradient-xy rounded-xl" />
        </>
      )}
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Make Your Guess!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Guess a number between 1 and 100</p>
        <GameScore bestScore={bestScore} />
      </div>

      <form onSubmit={handleGuess} className="space-y-4">
        <div className="transform transition-all duration-200 hover:scale-102">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={gameWon}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     transition-all duration-200"
            placeholder="Enter your guess..."
            min="1"
            max="100"
            autoFocus
          />
        </div>

        <div className="flex gap-2">
          <GameButton
            onClick={() => {}}
            disabled={gameWon || !guess}
            icon={Target}
            fullWidth
          >
            Submit Guess
          </GameButton>
          <GameButton
            onClick={generateNewNumber}
            icon={RefreshCw}
            variant="secondary"
          >
            Reset
          </GameButton>
        </div>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center transform transition-all duration-300 ${
          gameWon ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 animate-bounce' : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
        }`}>
          <p className="font-medium">
            {message}
            {!gameWon && lastGuessNumber !== null && (
              <span className="inline-block ml-2 animate-pulse">
                {lastGuessNumber < targetNumber ? <ArrowUp className="inline w-5 h-5" /> : <ArrowDown className="inline w-5 h-5" />}
              </span>
            )}
          </p>
          {gameWon && <p className="text-sm mt-1">You won in {attempts} attempts!</p>}
        </div>
      )}

      {previousGuesses.length > 0 && !gameWon && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Previous Guesses:</h3>
          <div className="flex flex-wrap gap-2">
            {previousGuesses.map((g, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                         rounded-md transform transition-all duration-200 hover:scale-110 
                         hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};