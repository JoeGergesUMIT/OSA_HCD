import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Moon, Sun, Activity, BookOpen, PenLine, PlayCircle, 
  Phone, AlertCircle, Award
} from 'lucide-react';
import { mockUser } from '../data/mockData';
import { useRecording } from '../context/RecordingContext';
import RelaxationModal from '../components/RelaxationModal';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  variant?: 'default' | 'recording' | 'sos';
}

const QuickAction: React.FC<QuickActionProps> = ({ 
  icon, 
  title, 
  onClick, 
  variant = 'default' 
}) => {
  const baseClasses = "flex flex-col items-center gap-2 p-4 rounded-xl transition-all";
  const variantClasses = {
    default: "bg-gray-50 text-gray-700 hover:bg-gray-100",
    recording: "bg-purple-50 text-purple-700 hover:bg-purple-100",
    sos: "bg-red-50 text-red-700 hover:bg-red-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </button>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isRecording, setIsRecording, setElapsedTime } = useRecording();
  const [showRelaxation, setShowRelaxation] = useState(false);

  const handleStartRecording = () => {
    if (!isRecording) {
      setElapsedTime(0);
      setIsRecording(true);
    }
    navigate('/sleep');
  };

  return (
    <div className="p-6 space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Good Morning, {mockUser.name}!
        </h1>
        <p className="text-gray-600">Here's your sleep summary</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Moon className="text-purple-600 mr-2" />
            <h2 className="text-lg font-medium">Last Night's Sleep</h2>
          </div>
          <span className="text-sm text-gray-500">
            {mockUser.lastNightSleep.startTime} - {mockUser.lastNightSleep.endTime}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Sun className="text-purple-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Duration</span>
            </div>
            <p className="text-2xl font-semibold text-purple-700">
              {mockUser.lastNightSleep.duration}h
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Activity className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Quality</span>
            </div>
            <p className="text-2xl font-semibold text-blue-700">
              {mockUser.lastNightSleep.quality}%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-sm p-6 text-white">
        <h3 className="text-lg font-medium mb-2">Sleep Achievements</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {mockUser.badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-2">
                <Award className="text-white" size={24} />
              </div>
              <span className="text-sm text-white/90 whitespace-nowrap">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <QuickAction
            icon={<Activity size={20} />}
            title={isRecording ? "Recording..." : "Start Recording"}
            onClick={handleStartRecording}
            variant="recording"
          />
          <QuickAction
            icon={<PenLine size={20} />}
            title="Log Sleep Journal"
            onClick={() => {}}
          />
          <QuickAction
            icon={<PlayCircle size={20} />}
            title="Start Relaxation"
            onClick={() => setShowRelaxation(true)}
          />
          <QuickAction
            icon={<BookOpen size={20} />}
            title="Morning Report"
            onClick={() => {}}
          />
          <QuickAction
            icon={<Phone size={20} />}
            title="Teleconsultation"
            onClick={() => {}}
          />
          <QuickAction
            icon={<AlertCircle size={20} />}
            title="SOS Support"
            variant="sos"
            onClick={() => {}}
          />
        </div>
      </div>

      <RelaxationModal 
        isOpen={showRelaxation} 
        onClose={() => setShowRelaxation(false)} 
      />
    </div>
  );
};

export default Home;