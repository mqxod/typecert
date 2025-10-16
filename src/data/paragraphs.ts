export const typingParagraphs = [
  "The quick brown fox jumps over the lazy dog while the sun sets behind the mountains. Every moment brings new opportunities to grow and learn something valuable. Practice makes perfect, and with dedication, anyone can master any skill they set their mind to achieve.",
  
  "Technology has revolutionized the way we communicate and interact with each other. From smartphones to social media, we are more connected than ever before. However, it is important to maintain a balance between our digital and real-world relationships to lead a fulfilling life.",
  
  "Learning to type efficiently is an essential skill in the modern workplace. Whether you are writing emails, creating documents, or coding software, the ability to type quickly and accurately can significantly boost your productivity and professional capabilities.",
  
  "The art of typing is not just about speed but also about precision and consistency. Every keystroke matters, and developing muscle memory through regular practice helps improve both accuracy and typing speed over time. Remember that patience and persistence are key to mastering this valuable skill.",
  
  "In today's fast-paced digital world, effective communication through written text has become increasingly important. From professional emails to creative writing, the ability to express ideas clearly and quickly through typing has become an indispensable skill for success.",
  
  "Practice is the foundation of excellence in any field. When it comes to typing, regular practice helps develop muscle memory and improves both speed and accuracy. Set aside time each day to practice typing, and you will see remarkable improvement in your skills over time.",
  
  "The beauty of learning lies in the journey itself, not just the destination. Each practice session brings you closer to your goals, whether you aim to type faster, reduce errors, or simply feel more comfortable with the keyboard. Embrace the process and celebrate small victories.",
  
  "Time management is crucial for productivity in both personal and professional life. Learning to type efficiently saves valuable time that can be used for other important tasks. As your typing speed increases, you will find yourself completing work faster and with greater ease.",
  
  "Attention to detail makes the difference between good and great performance. When typing, focus on accuracy first, and speed will naturally follow. Taking time to correct mistakes and learn from them is more valuable than rushing through text with numerous errors.",
  
  "Success in any endeavor requires dedication, practice, and the willingness to learn from mistakes. Typing is no exception. With consistent effort and the right approach, anyone can become proficient at typing and reap the benefits of this essential modern skill."
];

export function getRandomParagraph(): string {
  return typingParagraphs[Math.floor(Math.random() * typingParagraphs.length)];
}
