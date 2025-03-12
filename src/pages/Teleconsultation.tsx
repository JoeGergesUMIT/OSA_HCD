import React, { useState } from 'react';
import { 
  Video, Phone, MessageSquare, Star, Calendar, Clock, 
  ChevronRight, X, HelpCircle, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockSpecialists, mockAppointments, mockFAQs } from '../data/mockData';
import type { Specialist } from '../types';

const Teleconsultation: React.FC = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showSupportChat, setShowSupportChat] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const upcomingAppointment = mockAppointments[0];
  const specialist = mockSpecialists.find(s => s.id === upcomingAppointment?.specialistId);

  const renderSpecialistCard = (specialist: Specialist) => (
    <div 
      key={specialist.id}
      className="bg-white rounded-xl shadow-sm p-6 mb-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setSelectedSpecialist(specialist)}
    >
      <div className="flex items-center gap-4">
        <img 
          src={specialist.image} 
          alt={specialist.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-800">{specialist.name}</h3>
          <p className="text-sm text-gray-600">{specialist.title}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm">{specialist.rating}</span>
            </div>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{specialist.experience} years exp.</span>
          </div>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );

  const renderSpecialistProfile = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="p-6">
        <button
          onClick={() => setSelectedSpecialist(null)}
          className="mb-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img 
            src={selectedSpecialist?.image} 
            alt={selectedSpecialist?.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{selectedSpecialist?.name}</h2>
            <p className="text-gray-600">{selectedSpecialist?.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span className="ml-1">{selectedSpecialist?.rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{selectedSpecialist?.experience} years experience</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">About</h3>
            <p className="text-gray-600">{selectedSpecialist?.bio}</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Certifications</h3>
            <div className="space-y-2">
              {selectedSpecialist?.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Award size={16} className="text-purple-600" />
                  <span className="text-gray-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Consultation Modes</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${
                selectedSpecialist?.consultationModes.video 
                  ? 'bg-purple-50 text-purple-700' 
                  : 'bg-gray-50 text-gray-400'
              }`}>
                <Video size={24} className="mx-auto mb-2" />
                <span className="text-sm">Video</span>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                selectedSpecialist?.consultationModes.phone
                  ? 'bg-purple-50 text-purple-700'
                  : 'bg-gray-50 text-gray-400'
              }`}>
                <Phone size={24} className="mx-auto mb-2" />
                <span className="text-sm">Phone</span>
              </div>
              <div className={`p-4 rounded-lg text-center ${
                selectedSpecialist?.consultationModes.chat
                  ? 'bg-purple-50 text-purple-700'
                  : 'bg-gray-50 text-gray-400'
              }`}>
                <MessageSquare size={24} className="mx-auto mb-2" />
                <span className="text-sm">Chat</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowAppointmentModal(true)}
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Teleconsultation</h1>
        <p className="text-gray-600">Connect with certified sleep specialists</p>
      </header>

      {upcomingAppointment && (
        <div className="p-6">
          <div className="bg-purple-50 rounded-xl p-6 mb-6">
            <h2 className="font-medium text-purple-900 mb-2">Upcoming Appointment</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={specialist?.image}
                  alt={specialist?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-purple-900">{specialist?.name}</p>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <Calendar size={16} />
                    <span>{upcomingAppointment.date}</span>
                    <Clock size={16} />
                    <span>{upcomingAppointment.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                  Reschedule
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        <h2 className="font-medium text-gray-800 mb-4">Available Specialists</h2>
        <div className="space-y-4">
          {mockSpecialists.map(renderSpecialistCard)}
        </div>

        <div className="mt-8">
          <h2 className="font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {mockFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronRight
                    className={`text-gray-400 transition-transform ${
                      expandedFAQ === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSupportChat(true)}
        className="fixed bottom-20 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <HelpCircle size={24} />
      </button>

      <AnimatePresence>
        {selectedSpecialist && renderSpecialistProfile()}
      </AnimatePresence>
    </div>
  );
};

export default Teleconsultation;