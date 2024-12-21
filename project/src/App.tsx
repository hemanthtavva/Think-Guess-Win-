import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './components/Game';
import { GameRules } from './components/GameRules';
import { GameDemo } from './components/GameDemo';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';
import { Brain } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-8 shadow-lg transition-colors duration-200">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between"> {/* Flexbox for layout */}
                <div className="flex items-center justify-center w-full"> {/* Center the title */}
                  <div className="flex items-center space-x-4">
                    <Brain className="w-10 h-10 text-yellow-300 animate-pulse" />
                    <div>
                      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 filter drop-shadow-lg">
                        Think, Guess, Win!
                      </h1>
                      <p className="text-blue-100 dark:text-blue-200 mt-1 font-medium">
                        Challenge your mind, test your luck
                      </p>
                    </div>
                  </div>
                </div>
                <ThemeToggle className="ml-auto" /> {/* Moves the toggle to the right */}
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <Navigation />
            <div className="flex justify-center">
              <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/how-to-play" element={<GameRules />} />
                <Route path="/demo" element={<GameDemo />} />
              </Routes>
            </div>
          </main>

          <footer className="bg-gray-800 dark:bg-gray-950 text-white py-4 mt-8 transition-colors duration-200">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2024 Think, Guess, Win! Challenge your intuition!</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
