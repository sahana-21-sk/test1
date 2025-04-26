import React from 'react';
import { formatMoney } from '../data/questions';
import { Trophy, RefreshCw } from 'lucide-react';

interface ResultScreenProps {
  userName: string;
  totalPrize: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ 
  userName, 
  totalPrize, 
  onRestart 
}) => {
  const getMessage = () => {
    if (totalPrize === 0) {
      return "Better luck next time!";
    } else if (totalPrize < 10000) {
      return "Good effort!";
    } else if (totalPrize < 100000) {
      return "Well done!";
    } else if (totalPrize < 1000000) {
      return "Impressive performance!";
    } else {
      return "Outstanding achievement!";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-900 text-white p-4">
      <div className="max-w-lg w-full bg-blue-950/30 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-blue-800/20">
        <div className="text-center mb-8">
          <Trophy 
            size={80} 
            className={`mx-auto ${totalPrize > 0 ? 'text-yellow-400' : 'text-gray-400'} mb-4`} 
          />
          
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Game Complete!
          </h1>
          
          <p className="text-xl font-medium text-blue-200 mb-2">
            {getMessage()}
          </p>
        </div>

        <div className="bg-blue-900/50 rounded-lg p-6 mb-8 border border-blue-700/50">
          <div className="text-center">
            <p className="text-lg text-blue-300 mb-1">Contestant</p>
            <p className="text-2xl font-bold mb-4">{userName}</p>
            
            <p className="text-lg text-blue-300 mb-1">Prize Won</p>
            <p className="text-4xl font-bold text-yellow-400 mb-2">
              {formatMoney(totalPrize)}
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-lg font-medium text-white shadow-lg transform hover:scale-105 transition duration-200 flex items-center justify-center mx-auto"
          >
            <RefreshCw size={20} className="mr-2" />
            Play Again
          </button>
          
          <p className="mt-6 text-sm text-blue-300">
            Thank you for playing our KBC-style quiz game!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;