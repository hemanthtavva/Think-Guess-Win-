export const emojiSets = {
  higher: ['⬆️', '🚀', '📈', '🆙', '⏫'],
  lower: ['⬇️', '📉', '⏬', '🔽', '⤵️'],
  victory: ['🎉', '🎊', '🎯', '🏆', '⭐'],
  default: ['🎲', '🎮', '🎯', '🎪', '🎨']
} as const;

export type EmojiType = keyof typeof emojiSets;