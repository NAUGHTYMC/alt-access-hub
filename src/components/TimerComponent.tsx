import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface TimerComponentProps {
  duration: number;
  onComplete: () => void;
}

export const TimerComponent = ({ duration, onComplete }: TimerComponentProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (timeLeft <= 0) {
        onComplete();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onComplete]);

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className="w-5 h-5 text-primary" />
        <span className="text-2xl font-bold tabular-nums">
          {timeLeft}s
        </span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-primary transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-2">
        {timeLeft > 0 ? "Please wait for the timer to complete..." : "Timer completed!"}
      </p>
    </div>
  );
};