import React, { useState, useEffect } from 'react';
import { X, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RelaxationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RelaxationModal: React.FC<RelaxationModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let breathTimer: NodeJS.Timeout;

    if (isOpen && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      // Breathing cycle: 4s inhale, 4s hold, 4s exhale
      breathTimer = setInterval(() => {
        setBreathPhase((prev) => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, 4000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(breathTimer);
    };
  }, [isOpen, isPaused, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getBreathText = () => {
    switch (breathPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-6 m-4 max-w-sm w-full shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Relaxation Session</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="text-center mb-8">
            <motion.div
              key={breathPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-medium text-purple-600 mb-2"
            >
              {getBreathText()}
            </motion.div>
            <motion.div
              animate={{
                scale: breathPhase === 'inhale' ? 1.2 : breathPhase === 'hold' ? 1.2 : 1,
              }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-purple-600">{formatTime(timeLeft)}</span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              End Session
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RelaxationModal;