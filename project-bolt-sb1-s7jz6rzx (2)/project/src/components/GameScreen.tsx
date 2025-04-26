import React, { useState, useEffect, useRef } from 'react';
import { Question, Theme } from '../types';
import { formatMoney } from '../data/questions';
import PrizeMoneyLadder from './PrizeMoneyLadder';
import Timer from './Timer';

interface GameScreenProps {
  userName: string;
  selectedTheme: Theme;
  questions: Question[];
  onGameEnd: (totalPrize: number) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ 
  userName, 
  selectedTheme, 
  questions, 
  onGameEnd 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [totalPrize, setTotalPrize] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [animateQuestion, setAnimateQuestion] = useState(true);
  
  const timerRef = useRef<any>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    setAnimateQuestion(true);
    const timer = setTimeout(() => setAnimateQuestion(false), 500);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    setTimeUp(true);
    setIsAnswerRevealed(true);
    
    // Move to next question after delay
    setTimeout(() => {
      if (isLastQuestion) {
        onGameEnd(totalPrize);
      } else {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedOption(null);
        setIsAnswerRevealed(false);
        setTimeUp(false);
      }
    }, 3000);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null || isAnswerRevealed || timeUp) return;
    
    setSelectedOption(optionIndex);
    
    if (timerRef.current) {
      timerRef.current.stopTimer();
    }
    
    setTimeout(() => {
      setIsAnswerRevealed(true);
      
      if (optionIndex === currentQuestion.correctAnswer) {
        const newPrize = currentQuestion.prize;
        setTotalPrize(prevPrize => prevPrize + newPrize);
      }
      
      // Continue to next question after delay
      setTimeout(() => {
        if (isLastQuestion) {
          onGameEnd(totalPrize + (optionIndex === currentQuestion.correctAnswer ? currentQuestion.prize : 0));
        } else {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setSelectedOption(null);
          setIsAnswerRevealed(false);
          setTimeUp(false);
        }
      }, 3000);
    }, 2000);
  };

  const getOptionClass = (index: number) => {
    let baseClass = "relative border border-blue-700 rounded-lg p-4 text-left flex items-center transition duration-300 ";
    
    if (selectedOption === index) {
      baseClass += "bg-blue-900 border-blue-600 ";
    } else if (selectedOption !== null || timeUp) {
      baseClass += "opacity-70 ";
    } else {
      baseClass += "hover:bg-blue-900 hover:border-blue-600 cursor-pointer ";
    }
    
    if (isAnswerRevealed) {
      if (index === currentQuestion.correctAnswer) {
        baseClass = "relative border border-green-500 bg-green-900 rounded-lg p-4 text-left flex items-center";
      } else if (index === selectedOption && index !== currentQuestion.correctAnswer) {
        baseClass = "relative border border-red-500 bg-red-900 rounded-lg p-4 text-left flex items-center";
      }
    }
    
    return baseClass;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6 p-4 bg-blue-950/50 rounded-lg backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-medium">{userName}</h3>
              <p className="text-blue-300 text-sm">Theme: {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-blue-300">Current Prize</p>
                <p className="text-xl font-bold text-yellow-400">{formatMoney(currentQuestion.prize)}</p>
              </div>
              <Timer 
                duration={25} 
                onTimeUp={handleTimeUp} 
                isActive={!isAnswerRevealed}
                ref={timerRef}
              />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className={`bg-blue-950/60 rounded-xl p-6 mb-6 backdrop-blur-sm shadow-lg border border-blue-800/30 ${animateQuestion ? 'animate-fade-in' : ''}`}>
              <p className="text-blue-300 mb-2">Question {currentQuestionIndex + 1} of 10</p>
              <h2 className="text-xl md:text-2xl font-medium mb-2">{currentQuestion.question}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  disabled={selectedOption !== null || isAnswerRevealed || timeUp}
                  onClick={() => handleOptionSelect(index)}
                  className={getOptionClass(index)}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-950 mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              ))}
            </div>
            
            {timeUp && (
              <div className="text-center p-4 bg-red-900/50 rounded-lg animate-fade-in">
                <p className="text-xl">Time's up! The correct answer was: {currentQuestion.options[currentQuestion.correctAnswer]}</p>
              </div>
            )}
            
            {isAnswerRevealed && selectedOption !== null && !timeUp && (
              <div className={`text-center p-4 ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-900/50' : 'bg-red-900/50'} rounded-lg animate-fade-in`}>
                <p className="text-xl">
                  {selectedOption === currentQuestion.correctAnswer 
                    ? `Correct! You won ${formatMoney(currentQuestion.prize)}` 
                    : `Wrong answer! The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full md:w-1/4 bg-blue-950/40 p-4 md:min-h-screen overflow-y-auto backdrop-blur-sm">
          <PrizeMoneyLadder 
            currentQuestionIndex={currentQuestionIndex} 
            selectedTheme={selectedTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;