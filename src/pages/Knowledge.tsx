import React, { useState } from 'react';
import { Search, BookOpen, ArrowLeft, Tag } from 'lucide-react';
import { mockArticles } from '../data/mockData';
import { Article } from '../types';

const Knowledge: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(mockArticles.map(article => article.category)));

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="p-6">
        <button
          onClick={() => setSelectedArticle(null)}
          className="flex items-center text-purple-600 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Articles
        </button>

        <img
          src={selectedArticle.image}
          alt={selectedArticle.title}
          className="w-full h-48 object-cover rounded-xl mb-6"
        />

        <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center mb-4">
          <Tag size={16} className="mr-1" />
          {selectedArticle.category}
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedArticle.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {selectedArticle.summary}
        </p>

        <div className="prose prose-purple">
          <p className="text-gray-700 leading-relaxed">
            {selectedArticle.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">Knowledge Center</h1>
        <p className="text-gray-600">Learn about sleep health</p>
      </header>

      <div className="relative mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-white rounded-lg pl-12 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedCategory
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedArticle(article)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2">
                <BookOpen className="text-purple-600 mr-2" size={20} />
                <span className="text-sm font-medium text-purple-600">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">{article.summary}</p>
              <div className="mt-4 text-purple-600 font-medium text-sm flex items-center">
                Read More
                <ArrowLeft size={16} className="ml-1 transform rotate-180" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;