import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SocialMedia.css';

function SocialMedia() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container2">
      <div className="clickable2 x" onClick={() => handleClick('https://x.com/massivenezia')}></div>
      <div className="clickable2 instagram" onClick={() => handleClick('https://instagram.com/massivenezia')}></div>
      <div className="clickable2 linkedin" onClick={() => handleClick('https://linkedin.com/in/massivenezia')}></div>
      <div className="clickable2 info" onClick={() => handleNavigate('/')}></div>
    </div>
  );
}

export default SocialMedia;
