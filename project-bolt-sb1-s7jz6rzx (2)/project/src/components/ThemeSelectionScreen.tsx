import React from 'react';
import { Code, Ticket as Cricket, Globe, Lightbulb } from 'lucide-react';
import { Theme } from '../types';

interface ThemeSelectionScreenProps {
  userName: string;
  onThemeSelect: (theme: Theme) => void;
}

const ThemeSelectionScreen: React.FC<ThemeSelectionScreenProps> = ({ userName, onThemeSelect }) => {
  const themes: { id: Theme; name: string; icon: React.ReactNode; color: string }[] = [
    { 
      id: 'cricket', 
      name: 'Cricket', 
      icon: <Cricket size={36} />, 
      color: 'from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800' 
    },
    { 
      id: 'coding', 
      name: 'Coding', 
      icon: <Code size={36} />, 
      color: 'from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700' 
    },
    { 
      id: 'gk', 
      name: 'General Knowledge', 
      icon: <Globe size={36} />, 
      color: 'from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800' 
    },
    { 
      id: 'riddles', 
      name: 'Riddles', 
      icon: <Lightbulb size={36} />, 
      color: 'from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700' 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 text-white p-4">
      <div className="max-w-4xl w-full bg-blue-950/30 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-blue-800/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome, {userName}!
          </h1>
          <p className="text-blue-200 text-lg">
            Choose a theme to begin your quest for ₹25,00,000
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onThemeSelect(theme.id)}
              className={`flex items-center p-6 rounded-xl bg-gradient-to-r ${theme.color} text-white shadow-lg transform hover:scale-105 transition duration-200`}
            >
              <div className="bg-white/10 p-3 rounded-full mr-4">
                {theme.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold">{theme.name}</h3>
                <p className="text-white/80 text-sm">10 questions</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-blue-300">
          <p>Each theme contains 10 challenging questions.</p>
          <p className="mt-1">You'll have 25 seconds to answer each question.</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelectionScreen;