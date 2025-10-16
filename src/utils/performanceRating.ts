export interface PerformanceLevel {
  title: string;
  description: string;
  color: string;
}

export function getPerformanceRating(wpm: number): PerformanceLevel {
  if (wpm < 20) {
    return {
      title: "Beginner",
      description: "Keep practicing! You're just getting started.",
      color: "text-muted-foreground"
    };
  } else if (wpm < 40) {
    return {
      title: "Intermediate",
      description: "Good progress! You're building your skills.",
      color: "text-accent"
    };
  } else if (wpm < 60) {
    return {
      title: "Advanced",
      description: "Excellent work! You're typing with confidence.",
      color: "text-primary"
    };
  } else if (wpm < 80) {
    return {
      title: "Expert",
      description: "Outstanding! You're among the fastest typists.",
      color: "text-success"
    };
  } else {
    return {
      title: "Master",
      description: "Incredible! You've achieved mastery in typing.",
      color: "bg-gradient-primary bg-clip-text text-transparent"
    };
  }
}
