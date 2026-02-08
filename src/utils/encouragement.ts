const perfectMessages = [
  "Perfect score! You're a superstar! 🌟",
  "Amazing! You got them all right! 🎉",
  "Wow, 100%! You're brilliant! 🧠",
  "Outstanding work! Keep shining! ✨",
  "Incredible! You nailed every single one! 🏆",
];

const greatMessages = [
  "Great job! You're doing wonderfully! 🌈",
  "Fantastic work! Almost perfect! 👏",
  "You're really getting the hang of this! 💪",
  "Excellent effort! Keep it up! 🎯",
  "So close to perfect! You're amazing! 🌟",
];

const goodMessages = [
  "Good effort! You're learning fast! 📚",
  "Nice work! Practice makes perfect! 🌱",
  "You're on the right track! Keep going! 🚀",
  "Well done! Every answer helps you learn! 💡",
  "Great try! You're getting better! 🎨",
];

const encouragingMessages = [
  "Don't give up! Every mistake is a chance to learn! 🌻",
  "Keep trying! You're braver than you think! 🦁",
  "Practice makes progress! Try again! 🌈",
  "You can do it! Learning takes time! ⏰",
  "Stay positive! You'll get there! 🌟",
];

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getEncouragementMessage(score: number, total: number): string {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  if (percentage === 100) return pickRandom(perfectMessages);
  if (percentage >= 75) return pickRandom(greatMessages);
  if (percentage >= 50) return pickRandom(goodMessages);
  return pickRandom(encouragingMessages);
}

export function getCorrectMessage(): string {
  const messages = [
    "Correct! Well done! ✅",
    "That's right! Great job! 🎉",
    "You got it! 🌟",
    "Exactly right! 👏",
    "Perfect answer! ✨",
  ];
  return pickRandom(messages);
}

export function getIncorrectMessage(): string {
  const messages = [
    "Not quite, but good try! Let's see the answer.",
    "Almost! Don't worry, you're learning!",
    "That's okay! Let's look at the correct answer.",
    "Nice try! Learning from mistakes makes us smarter!",
    "Keep going! The next one could be yours!",
  ];
  return pickRandom(messages);
}
