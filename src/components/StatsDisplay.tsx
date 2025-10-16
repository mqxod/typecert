import { Clock, Zap, Target, AlertCircle } from "lucide-react";

interface StatsDisplayProps {
  wpm: number;
  accuracy: number;
  timeRemaining: number;
  errors: number;
}

export default function StatsDisplay({ wpm, accuracy, timeRemaining, errors }: StatsDisplayProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-card border border-border rounded-lg p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Clock className="h-5 w-5 text-primary mr-2" />
          <span className="text-sm font-medium text-muted-foreground">Time</span>
        </div>
        <p className="text-2xl font-bold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Zap className="h-5 w-5 text-accent mr-2" />
          <span className="text-sm font-medium text-muted-foreground">WPM</span>
        </div>
        <p className="text-2xl font-bold text-accent">{wpm}</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Target className="h-5 w-5 text-success mr-2" />
          <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
        </div>
        <p className="text-2xl font-bold text-success">{accuracy}%</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <AlertCircle className="h-5 w-5 text-destructive mr-2" />
          <span className="text-sm font-medium text-muted-foreground">Errors</span>
        </div>
        <p className="text-2xl font-bold text-destructive">{errors}</p>
      </div>
    </div>
  );
}
