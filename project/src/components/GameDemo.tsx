import React from 'react';
import { Play } from 'lucide-react';
import { BinarySearchDemo } from './demos/BinarySearchDemo';
import { RandomDemo } from './demos/RandomDemo';
import { LinearDemo } from './demos/LinearDemo';

export const GameDemo = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <BinarySearchDemo />
        <RandomDemo />
        <LinearDemo />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <Play className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Strategy Guide</h2>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Different Approaches:</h3>
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-700">Binary Search Strategy</h4>
                <p className="text-gray-600">Most efficient approach - always guessing in the middle of the possible range.</p>
              </div>
              <div className="pl-4 border-l-4 border-green-500">
                <h4 className="font-medium text-green-700">Random Strategy</h4>
                <p className="text-gray-600">Unpredictable but can be lucky - randomly guessing numbers.</p>
              </div>
              <div className="pl-4 border-l-4 border-purple-500">
                <h4 className="font-medium text-purple-700">Linear Strategy</h4>
                <p className="text-gray-600">Methodical but inefficient - counting up one by one.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Pro Tips:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Start with 50 to eliminate half the possibilities</li>
              <li>Use the hints to narrow down your range</li>
              <li>Keep track of your previous guesses</li>
              <li>Avoid repeating numbers you've already tried</li>
              <li>Learn from the patterns in the feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}