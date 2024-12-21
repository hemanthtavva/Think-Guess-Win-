import React from 'react';
import { EmojiRow } from './emoji/EmojiRow';
import { emojiSets, EmojiType } from '../utils/emojiSets';

interface EmojiEffectProps {
  type: EmojiType | null;
}

export const EmojiEffect: React.FC<EmojiEffectProps> = ({ type }) => {
  const currentEmojis = type ? emojiSets[type] : emojiSets.default;
  const rows = Array(3).fill(null); // Create 3 rows of emojis for better coverage

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0">
      <div className="absolute inset-0 flex flex-col justify-between items-center py-8">
        {rows.map((_, rowIndex) => (
          <EmojiRow
            key={rowIndex}
            emojis={currentEmojis}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </div>
  );
};