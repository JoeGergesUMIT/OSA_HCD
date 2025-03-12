import React, { useEffect, useRef } from 'react';
import { Activity, Moon, Volume2, Lock, Pause } from 'lucide-react';
import { useRecording } from '../context/RecordingContext';

const Sleep: React.FC = () => {
  const { isRecording, elapsedTime, setIsRecording, setElapsedTime } = useRecording();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let startTime: number;
    if (isRecording) {
      startTime = Date.now() - elapsedTime;
      const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw waveform
        ctx.beginPath();
        ctx.strokeStyle = '#7c3aed';
        ctx.lineWidth = 2;
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);

        for (let x = 0; x < canvas.width; x++) {
          const frequency = 0.02;
          const amplitude = 20 + Math.random() * 10;
          const y = canvas.height / 2 + 
                   Math.sin(x * frequency + elapsed * 0.003) * amplitude +
                   Math.sin(x * frequency * 0.5 + elapsed * 0.002) * amplitude * 0.5;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRecording, elapsedTime, setElapsedTime]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const toggleRecording = () => {
    if (!isRecording) {
      setElapsedTime(0);
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Sleep Analysis</h1>
        <p className="text-gray-600">Monitor your sleep patterns</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Volume2 className="text-purple-600 mr-2" />
            <h2 className="text-lg font-medium">Audio Capture</h2>
          </div>
          <button 
            onClick={toggleRecording}
            className={`flex items-center gap-2 ${
              isRecording 
                ? 'bg-red-100 text-red-600' 
                : 'bg-purple-100 text-purple-600'
            } rounded-lg px-4 py-2 text-sm font-medium transition-colors`}
          >
            {isRecording ? (
              <>
                <Pause size={16} />
                Stop Recording
              </>
            ) : (
              <>
                <Volume2 size={16} />
                Start Recording
              </>
            )}
          </button>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={800}
            height={120}
            className="w-full h-32 bg-gray-50 rounded-lg"
          />
          {isRecording && (
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Recording: {formatTime(elapsedTime)}
            </div>
          )}
        </div>

        {isRecording && (
          <div className="mt-4 bg-blue-50 rounded-lg p-4 flex items-start gap-3">
            <Lock className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-blue-700 font-medium">Recording will continue in background</p>
              <p className="text-blue-600 text-sm mt-1">
                You can lock your phone or use other apps. The recording will continue until you stop it.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">AHI Score</h2>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-3xl font-bold text-purple-600">2.4</p>
            <p className="text-sm text-gray-600">Events per hour</p>
          </div>
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            Low Risk
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Your AHI score indicates the number of breathing pauses per hour during sleep.
          A score below 5 is considered normal.
        </p>
      </div>
    </div>
  );
}

export default Sleep;