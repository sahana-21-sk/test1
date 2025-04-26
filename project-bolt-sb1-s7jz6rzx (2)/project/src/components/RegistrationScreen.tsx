import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

interface RegistrationScreenProps {
  onSubmit: (name: string) => void;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Please enter your name to continue');
      return;
    }
    onSubmit(name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 text-white p-4">
      <div className="max-w-md w-full bg-blue-950/30 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-blue-800/20">
        <div className="text-center mb-8 animate-pulse">
          <Trophy size={60} className="mx-auto text-yellow-400 mb-4" />
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            KBC Quiz Game
          </h1>
          <p className="text-blue-200">
            Test your knowledge and win up to ₹25,00,000!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-200">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="John Doe"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg font-medium text-white shadow-lg transform hover:scale-105 transition duration-200"
          >
            Start Quiz
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-blue-300">
          <p>Get ready for 10 exciting questions!</p>
          <p className="mt-1">Choose from Cricket, Coding, General Knowledge, or Riddles.</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;