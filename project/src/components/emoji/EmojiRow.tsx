import React from 'react';
import { EmojiBackground } from './EmojiBackground';

interface EmojiRowProps {
  emojis: string[];
  rowIndex: number;
}

export const EmojiRow: React.FC<EmojiRowProps> = ({ emojis, rowIndex }) => {
  return (
    <div className="flex justify-center items-center w-full space-x-16">
      {emojis.map((emoji, index) => (
        <EmojiBackground
          key={`${rowIndex}-${index}`}
          emoji={emoji}
          index={rowIndex * emojis.length + index}
        />
      ))}
    </div>
  );
};