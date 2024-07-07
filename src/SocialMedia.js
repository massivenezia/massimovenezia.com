import React from 'react';
import './SocialMedia.css';

function SocialMedia() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
  <div className="container">
    <div className="clickable x" onClick={() => handleClick('https://x.com/massivenezia')}></div>
    <div className="clickable instagram" onClick={() => handleClick('https://instagram.com/massiveneziaa')}></div>
    <div className="clickable linkedin" onClick={() => handleClick('https://linkedin.com/in/massivenezia')}></div>
  </div>
  );
}

export default SocialMedia;
