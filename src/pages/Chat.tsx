import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your sleep assistant. How can I help you today?"
    }
  ]);

  return (
    <div className="flex flex-col h-full">
      <header className="p-6 bg-white border-b">
        <div className="flex items-center">
          <Bot className="text-purple-600 mr-2" size={24} />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Sleep Assistant</h1>
            <p className="text-sm text-gray-600">Ask me anything about sleep</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 text-white rounded-full p-3">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;