import React, { useState } from 'react';
import './App.css';
import FitnessPrompt from './components/FitnessPrompt';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [advice, setAdvice] = useState('');

  const handleFitnessAdvice = async (prompt) => {
    try {
      const response = await fetch('http://localhost:5000/api/fitness/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setAdvice(data.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="App">
      <h1>FitnessGPT</h1>
      <FitnessPrompt onSubmit={handleFitnessAdvice} />
      <ResponseDisplay advice={advice} />
    </div>
  );
}

export default App;
