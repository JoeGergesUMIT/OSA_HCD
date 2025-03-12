import React, { createContext, useContext, useState } from 'react';

interface RecordingContextType {
  isRecording: boolean;
  elapsedTime: number;
  setIsRecording: (value: boolean) => void;
  setElapsedTime: (value: number) => void;
}

const RecordingContext = createContext<RecordingContextType | undefined>(undefined);

export const RecordingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  return (
    <RecordingContext.Provider value={{ isRecording, elapsedTime, setIsRecording, setElapsedTime }}>
      {children}
    </RecordingContext.Provider>
  );
};

export const useRecording = () => {
  const context = useContext(RecordingContext);
  if (context === undefined) {
    throw new Error('useRecording must be used within a RecordingProvider');
  }
  return context;
};