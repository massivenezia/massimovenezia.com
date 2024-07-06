import React from 'react';
import './App.css';

function App() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <div className="top-left" onClick={() => handleClick('tel:+541126510620')}></div>
      <div className="top-right">
        <ul>
          <li onClick={() => handleClick('https://instagram.com/massiveneziaa')}></li>
          <li onClick={() => handleClick('https://x.com/massivenezia')}></li>
          <li onClick={() => handleClick('https://linkedin.com/in/massivenezia')}></li>
        </ul>
      </div>
      <div className="center" onClick={() => handleClick('https://example.com/center')}></div>
      <div className="bottom-center" onClick={() => handleClick('mailto:contact@massimovenezia.com')}></div>
    </div>
  );
}

export default App;

