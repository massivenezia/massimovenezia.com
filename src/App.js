import React from 'react';
import './App.css';

function App() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
  <div className="container">
    <div className="clickable top-left" onClick={() => handleClick('tel:+541126510620')}></div>
    <div className="clickable top-right">
      <ul>
        <li onClick={() => handleClick('https://instagram.com/massiveneziaa')}></li>
        <li onClick={() => handleClick('https://x.com/massivenezia')}></li>
        <li onClick={() => handleClick('https://linkedin.com/in/massivenezia')}></li>
      </ul>
    </div>
    <div className="clickable center" onClick={() => handleClick('https://example.com/center')}></div>
    <div className="clickable bottom-center" onClick={() => handleClick('mailto:contact@massimovenezia.com')}></div>
  </div>
  );
}

export default App;

