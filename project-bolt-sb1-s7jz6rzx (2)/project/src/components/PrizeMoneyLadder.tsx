import React from 'react';
import { getAllPrizeMoney, formatMoney } from '../data/questions';
import { Theme } from '../types';

interface PrizeMoneyLadderProps {
  currentQuestionIndex: number;
  selectedTheme: Theme;
}

const PrizeMoneyLadder: React.FC<PrizeMoneyLadderProps> = ({ 
  currentQuestionIndex, 
  selectedTheme 
}) => {
  const prizeMoney = getAllPrizeMoney();
  
  const getThemeColor = () => {
    switch (selectedTheme) {
      case 'cricket': return 'bg-blue-800';
      case 'coding': return 'bg-blue-700';
      case 'gk': return 'bg-blue-800';
      case 'riddles': return 'bg-blue-700';
      default: return 'bg-blue-800';
    }
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">Prize Money</h3>
      <div className="space-y-2">
        {prizeMoney.map((prize, index) => {
          const questionIndex = 9 - index;
          const isCurrentQuestion = questionIndex === currentQuestionIndex;
          const isPastQuestion = questionIndex < currentQuestionIndex;
          
          return (
            <div 
              key={index}
              className={`
                flex items-center justify-between py-2 px-3 rounded-lg transition-all
                ${isCurrentQuestion ? `${getThemeColor()} font-bold animate-pulse` : 
                  isPastQuestion ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-950/30'}
              `}
            >
              <span className="font-medium">Q{questionIndex + 1}</span>
              <span className={isCurrentQuestion ? 'text-white font-bold' : ''}>{formatMoney(prize)}</span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-3 bg-blue-950/30 rounded-lg">
        <h4 className="font-medium text-center mb-2 text-yellow-400">How to Play</h4>
        <ul className="text-sm space-y-1 text-blue-200">
          <li>• Answer questions to win money</li>
          <li>• You have 25 seconds per question</li>
          <li>• Each correct answer adds to your prize</li>
          <li>• Play all 10 questions to maximize your winnings</li>
        </ul>
      </div>
    </div>
  );
};

export default PrizeMoneyLadder;