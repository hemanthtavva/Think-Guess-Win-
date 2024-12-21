import React from 'react';

interface EmojiBackgroundProps {
  emoji: string;
  index: number;
}

export const EmojiBackground: React.FC<EmojiBackgroundProps> = ({ emoji, index }) => {
  return (
    <span
      className="inline-block transform animate-bounce opacity-10"
      style={{
        animationDelay: `${(index % 5) * 0.2}s`,
        fontSize: '100px',
        animationDuration: '2s'
      }}
    >
      {emoji}
    </span>
  );
};