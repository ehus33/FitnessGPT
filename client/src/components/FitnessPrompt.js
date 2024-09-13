import React, { useState } from 'react';

function FitnessPrompt({ onSubmit }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask FitnessGPT for advice (e.g., Create a 30-minute workout)..."
      ></textarea>
      <button type="submit">Get Fitness Advice</button>
    </form>
  );
}

export default FitnessPrompt;
