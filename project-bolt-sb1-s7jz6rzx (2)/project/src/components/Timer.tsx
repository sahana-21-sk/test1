import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer = forwardRef<{ stopTimer: () => void }, TimerProps>(({ duration, onTimeUp, isActive }, ref) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  
  useImperativeHandle(ref, () => ({
    stopTimer: () => {
      setIsRunning(false);
    }
  }));
  
  useEffect(() => {
    // Reset timer when duration changes
    setTimeLeft(duration);
  }, [duration]);
  
  useEffect(() => {
    if (isActive && !isRunning) {
      setIsRunning(true);
      setTimeLeft(duration);
    }
  }, [isActive, duration, isRunning]);
  
  useEffect(() => {
    let timer: number | null = null;
    
    if (isRunning && timeLeft > 0) {
      timer = window.setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      onTimeUp();
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isRunning, timeLeft, onTimeUp]);
  
  // Calculate the percentage for the timer
  const percentage = (timeLeft / duration) * 100;
  
  // Get color based on time remaining
  const getTimerColor = () => {
    if (percentage > 50) return 'text-green-500';
    if (percentage > 20) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Timer background track */}
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle
          className="text-gray-700 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        
        {/* Timer progress */}
        <circle
          className={`${getTimerColor()} stroke-current transition-all duration-1000 ease-linear`}
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (percentage * 251.2) / 100}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      
      {/* Timer text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`${getTimerColor()} font-bold text-xl`}>{timeLeft}</span>
      </div>
    </div>
  );
});

Timer.displayName = 'Timer';

export default Timer;