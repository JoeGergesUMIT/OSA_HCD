import { User, Article, Recommendation, Specialist, Appointment, FAQ } from '../types';

export const mockUser: User = {
  name: "Sarah",
  sleepQuality: 85,
  sleepDuration: 7.5,
  riskLevel: "Low",
  lastNightSleep: {
    duration: 7.5,
    quality: 85,
    startTime: "22:30",
    endTime: "06:00"
  },
  badges: [
    {
      id: "1",
      title: "Sleep Master",
      description: "Maintained good sleep schedule for 30 days"
    },
    {
      id: "2",
      title: "Early Bird",
      description: "Woke up early for 7 days straight"
    },
    {
      id: "3",
      title: "Deep Sleeper",
      description: "Achieved 90% sleep quality"
    },
    {
      id: "4",
      title: "Consistent",
      description: "Regular sleep schedule for 2 weeks"
    },
    {
      id: "5",
      title: "Progress",
      description: "Improved sleep score by 20%"
    }
  ]
};

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Sleep Changes During Pregnancy',
    category: 'Pregnancy',
    summary: 'Understanding how sleep patterns change during pregnancy and tips for better rest.',
    content: 'Sleep undergoes significant changes during pregnancy. As your body adapts to support your growing baby, you might experience various sleep challenges. This article explores common sleep issues during pregnancy and provides practical solutions for better sleep quality.',
    image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Understanding Sleep Apnea',
    category: 'OSA',
    summary: 'Learn about the symptoms, causes, and treatments for Obstructive Sleep Apnea.',
    content: 'Obstructive Sleep Apnea (OSA) is a common sleep disorder characterized by repeated interruptions in breathing during sleep. This comprehensive guide explains the mechanisms behind OSA, its health impacts, and various treatment options available.',
    image: 'https://images.unsplash.com/photo-1584794171574-fe3f84b43838?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Healthy Sleep Habits',
    category: 'Lifestyle',
    summary: 'Essential tips for developing and maintaining healthy sleep habits.',
    content: 'Good sleep hygiene is crucial for overall health and well-being. This article provides practical advice on creating an optimal sleep environment, establishing a consistent sleep schedule, and developing habits that promote restful sleep.',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b5cf786?auto=format&fit=crop&q=80&w=800'
  }
];

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Create a Bedtime Routine',
    description: 'Establish a consistent pre-sleep routine to help your body recognize when it\'s time to sleep.',
    icon: 'moon',
    tried: true,
    saved: true
  },
  {
    id: '2',
    title: 'Optimize Sleep Environment',
    description: 'Keep your bedroom cool, dark, and quiet. Consider using blackout curtains or a white noise machine.',
    icon: 'home',
    tried: false,
    saved: true
  },
  {
    id: '3',
    title: 'Limit Screen Time',
    description: 'Avoid blue light exposure from devices at least 1 hour before bedtime.',
    icon: 'smartphone',
    tried: true,
    saved: false
  },
  {
    id: '4',
    title: 'Regular Exercise',
    description: 'Engage in moderate exercise during the day, but avoid vigorous activity close to bedtime.',
    icon: 'activity',
    tried: false,
    saved: false
  },
  {
    id: '5',
    title: 'Mindful Breathing',
    description: 'Practice deep breathing exercises before bed to help reduce anxiety and promote relaxation.',
    icon: 'wind',
    tried: false,
    saved: true
  }
];

export const mockSpecialists: Specialist[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    title: 'Sleep Medicine Specialist',
    specialty: 'Pregnancy Sleep Disorders',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    experience: 12,
    rating: 4.9,
    availability: ['Mon', 'Wed', 'Fri'],
    bio: 'Dr. Carter specializes in sleep disorders during pregnancy, with a focus on OSA management and treatment. She has helped hundreds of expectant mothers achieve better sleep quality.',
    certifications: [
      'American Board of Sleep Medicine',
      'Maternal-Fetal Medicine Fellowship'
    ],
    consultationModes: {
      video: true,
      phone: true,
      chat: true
    }
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Sleep Disorders Specialist',
    specialty: 'OSA & Respiratory Care',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    experience: 15,
    rating: 4.8,
    availability: ['Tue', 'Thu', 'Sat'],
    bio: 'Dr. Chen is an expert in respiratory care and sleep-disordered breathing. He focuses on personalized treatment plans and CPAP therapy optimization.',
    certifications: [
      'American Academy of Sleep Medicine',
      'Respiratory Care Specialist'
    ],
    consultationModes: {
      video: true,
      phone: true,
      chat: false
    }
  },
  {
    id: '3',
    name: 'Dr. Sarah Thompson',
    title: 'Sleep Medicine Physician',
    specialty: 'General Sleep Medicine',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    experience: 8,
    rating: 4.7,
    availability: ['Mon', 'Tue', 'Thu'],
    bio: 'Dr. Thompson specializes in comprehensive sleep medicine, focusing on holistic approaches to sleep health and lifestyle modifications.',
    certifications: [
      'Board Certified in Sleep Medicine',
      'Behavioral Sleep Medicine'
    ],
    consultationModes: {
      video: true,
      phone: false,
      chat: true
    }
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    specialistId: '1',
    date: '2024-03-25',
    time: '10:00',
    mode: 'video',
    status: 'upcoming'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How does teleconsultation work?',
    answer: 'Teleconsultation allows you to connect with sleep specialists remotely through video calls, phone calls, or chat. Choose your preferred specialist, select a convenient time slot, and receive expert care from the comfort of your home.'
  },
  {
    id: '2',
    question: 'Is my data secure?',
    answer: 'Yes, we take your privacy seriously. All consultations are encrypted and comply with healthcare privacy regulations. Your medical information is stored securely and only accessible to your authorized healthcare providers.'
  },
  {
    id: '3',
    question: 'What do I need for a video consultation?',
    answer: 'For video consultations, you\'ll need a stable internet connection, a device with a camera and microphone (smartphone, tablet, or computer), and a quiet, private space for your appointment.'
  },
  {
    id: '4',
    question: 'Can I get prescriptions through teleconsultation?',
    answer: 'Yes, specialists can provide prescriptions when appropriate. However, some medications may require in-person visits. Your specialist will advise you on the best course of action during your consultation.'
  }
];