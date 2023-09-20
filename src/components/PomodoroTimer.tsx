import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  let audio: HTMLAudioElement;

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    // Initialize audio object
    audio = new Audio('/alarm.mp3');

    let interval: NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval as NodeJS.Timeout);
            // Play the sound
            audio.play();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, minutes, seconds]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>
      <div className="text-6xl font-mono mb-8">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="flex items-center mb-8">
        <button onClick={() => setMinutes(minutes + 1)} className="px-4 py-2 mr-2 bg-blue-500 rounded">+</button>
        <button onClick={() => setMinutes(minutes - 1)} className="px-4 py-2 mr-2 bg-blue-500 rounded">-</button>
        <button onClick={() => setSeconds(seconds + 1)} className="px-4 py-2 mr-2 bg-blue-500 rounded">+</button>
        <button onClick={() => setSeconds(seconds - 1)} className="px-4 py-2 mr-2 bg-blue-500 rounded">-</button>
      </div>
      <div>
        <button className="px-4 py-2 mr-4 bg-blue-500 rounded" onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}</button>
        <button className="px-4 py-2 bg-red-500 rounded" onClick={() => { setMinutes(25); setSeconds(0); setIsRunning(false); stopAudio(); }}>Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
