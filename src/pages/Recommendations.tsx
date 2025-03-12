import React from 'react';
import { Bookmark, CheckCircle } from 'lucide-react';
import { mockRecommendations } from '../data/mockData';

const Recommendations: React.FC = () => {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Recommendations</h1>
        <p className="text-gray-600">Personalized tips for better sleep</p>
      </header>

      <div className="space-y-4">
        {mockRecommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {recommendation.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {recommendation.description}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-full ${
                    recommendation.tried
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <CheckCircle size={20} />
                </button>
                <button
                  className={`p-2 rounded-full ${
                    recommendation.saved
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;