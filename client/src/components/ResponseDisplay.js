import React from 'react';

function ResponseDisplay({ advice }) {
  return (
    <div className="response">
      {advice ? <p>{advice}</p> : <p>Ask for fitness advice above!</p>}
    </div>
  );
}

export default ResponseDisplay;
