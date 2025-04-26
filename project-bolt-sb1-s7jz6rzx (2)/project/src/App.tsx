import React, { useState } from 'react';
import { questions } from './data/questions';
import { GameState, Theme } from './types';
import RegistrationScreen from './components/RegistrationScreen';
import ThemeSelectionScreen from './components/ThemeSelectionScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    screen: 'registration',
    userName: '',
    selectedTheme: null,
    currentQuestionIndex: 0,
    currentPrize: 0,
    totalPrize: 0,
    gameOver: false
  });

  // Handle name submission from registration screen
  const handleNameSubmit = (name: string) => {
    setGameState(prevState => ({
      ...prevState,
      screen: 'theme-selection',
      userName: name
    }));
  };

  // Handle theme selection
  const handleThemeSelect = (theme: Theme) => {
    setGameState(prevState => ({
      ...prevState,
      screen: 'game',
      selectedTheme: theme
    }));
  };

  // Handle game end
  const handleGameEnd = (totalPrize: number) => {
    setGameState(prevState => ({
      ...prevState,
      screen: 'result',
      totalPrize: totalPrize,
      gameOver: true
    }));
  };

  // Restart the game
  const handleRestart = () => {
    setGameState({
      screen: 'registration',
      userName: '',
      selectedTheme: null,
      currentQuestionIndex: 0,
      currentPrize: 0,
      totalPrize: 0,
      gameOver: false
    });
  };

  // Render the current screen based on game state
  const renderScreen = () => {
    switch (gameState.screen) {
      case 'registration':
        return <RegistrationScreen onSubmit={handleNameSubmit} />;
      
      case 'theme-selection':
        return (
          <ThemeSelectionScreen 
            userName={gameState.userName} 
            onThemeSelect={handleThemeSelect} 
          />
        );
      
      case 'game':
        return (
          <GameScreen 
            userName={gameState.userName}
            selectedTheme={gameState.selectedTheme as Theme}
            questions={questions[gameState.selectedTheme as Theme]}
            onGameEnd={handleGameEnd}
          />
        );
      
      case 'result':
        return (
          <ResultScreen 
            userName={gameState.userName}
            totalPrize={gameState.totalPrize}
            onRestart={handleRestart}
          />
        );
      
      default:
        return <RegistrationScreen onSubmit={handleNameSubmit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900">
      {renderScreen()}
    </div>
  );
}

export default App;