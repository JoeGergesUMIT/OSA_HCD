import React from 'react';
import { Volume2, StopCircle } from 'lucide-react';
import { useRecording } from '../context/RecordingContext';
import { useNavigate } from 'react-router-dom';

const RecordingWidget: React.FC = () => {
  const { isRecording, elapsedTime, setIsRecording } = useRecording();
  const navigate = useNavigate();

  if (!isRecording) return null;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleWidgetClick = () => {
    navigate('/sleep');
  };

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md">
      <div className="bg-white rounded-xl shadow-lg p-4 border border-purple-100">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 flex-1 cursor-pointer"
            onClick={handleWidgetClick}
          >
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
              <Volume2 className="text-purple-600" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Recording Sleep</span>
              </div>
              <p className="text-sm text-gray-500">{formatTime(elapsedTime)}</p>
            </div>
          </div>
          <button
            onClick={handleStopRecording}
            className="ml-4 p-2 hover:bg-red-50 rounded-full transition-colors"
          >
            <StopCircle className="text-red-500" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordingWidget;