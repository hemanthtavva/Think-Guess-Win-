interface HintCategory {
  higher: string[];
  lower: string[];
  duplicate: string[];
  victory: string[];
}

export const hints: HintCategory = {
  higher: [
    "Wow, aiming low today, aren't we? Time to reach for the stars! 🚀 ⬆️",
    "Did gravity pull your guess down? Let's defy physics! 🌍 ⬆️",
    "Even my pet rock aims higher than that! 🪨 ⬆️",
    "Are you afraid of heights? Time for some altitude training! 🎢 ⬆️",
    "That's lower than my expectations... and they were already underground! 🕳️ ⬆️",
    "Is your keyboard's up arrow broken? Here, borrow mine! 🎹 ⬆️",
    "Did you mistake this for a limbo contest? Wrong game! 🕺 ⬆️",
    "Houston, we need more altitude! 🛸 ⬆️",
    "Are we diving for pearls? The number's up there! 🤿 ⬆️",
    "Your guess is so low, it's hanging out with dinosaur fossils! 🦖 ⬆️"
  ],
  lower: [
    "Whoa there, high roller! Time to come back to Earth! 📉 ⬇️",
    "Someone's feeling ambitious today! Gravity called, it misses you! 🪂 ⬇️",
    "Did you mistake this for your dream salary? Reality check! 💰 ⬇️",
    "The number is lower, just like my patience right now! 😤 ⬇️",
    "Are you trying to reach Mars? Wrong planet! 🌠 ⬇️",
    "That's higher than my coffee intake... on a Monday! ☕ ⬇️",
    "Lower! This isn't your ego we're measuring! 😏 ⬇️",
    "Your guess is so high, it's having lunch with astronauts! 👨‍🚀 ⬇️",
    "Did you borrow this number from Mount Everest? 🏔️ ⬇️",
    "Even Superman doesn't fly this high! 🦸‍♂️ ⬇️"
  ],
  duplicate: [
    "Having memory issues? You've tried that number already! Maybe write it down? 📝",
    "Déjà vu! That number looks suspiciously familiar... Did we time travel? ⏰",
    "Oh, you liked that number so much you wanted to try it twice? How romantic! 💝",
    "Plot twist: The number hasn't changed in the last 2 seconds! 🎬",
    "Are you stuck in a time loop? Quick, call Doctor Strange! 🌀",
    "Breaking news: Guessing the same number twice still doesn't work! More at 11! 📺",
    "This isn't Groundhog Day! Try a different number! 🦫",
    "Your memory is shorter than a goldfish's! That's the same number! 🐠",
    "Error 404: Original guess not found! 🤖",
    "Copy-paste is not a guessing strategy! 📋"
  ],
  victory: [
    "Finally! I was starting to worry about your math skills! 🎉 🌟",
    "A broken clock is right twice a day, and you're right once now! 🕰️ 🎯",
    "Congratulations! Your random guessing strategy finally paid off! 🎲 🏆",
    "Well, well, well... looks like you got lucky! Buy a lottery ticket! 🍀 💫",
    "I knew you'd get it... eventually! (After all those tries...) 🌟 🎊",
    "Achievement unlocked: Basic counting skills mastered! 🏆 ✨",
    "The impossible has happened! You actually got it right! 🎯 🎨",
    "Alert the media! We have a winner! 📰 🎭",
    "Your persistence finally overcame your guessing skills! 🌈 🎪",
    "Miracles do happen! You've won! 🌟 🎇"
  ]
};

export const getRandomHint = (category: keyof HintCategory): string => {
  const hintList = hints[category];
  return hintList[Math.floor(Math.random() * hintList.length)];
};