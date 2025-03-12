export interface User {
  name: string;
  sleepQuality: number;
  sleepDuration: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  lastNightSleep: {
    duration: number;
    quality: number;
    startTime: string;
    endTime: string;
  };
  badges: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export interface SleepLog {
  date: string;
  duration: number;
  quality: number;
  symptoms: string[];
  mood: 'Good' | 'Fair' | 'Poor';
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  availability: string[];
  experience: number;
  rating: number;
  bio: string;
  certifications: string[];
  consultationModes: {
    video: boolean;
    phone: boolean;
    chat: boolean;
  };
}

export interface Appointment {
  id: string;
  specialistId: string;
  date: string;
  time: string;
  mode: 'video' | 'phone' | 'chat';
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Article {
  id: string;
  title: string;
  category: 'Pregnancy' | 'OSA' | 'Lifestyle';
  summary: string;
  content: string;
  image: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  icon: string;
  tried: boolean;
  saved: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}