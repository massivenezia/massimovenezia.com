import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import SocialMedia from './SocialMedia';

function MainPage() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="clickable top-left" onClick={() => handleClick('tel:+541126510620')}></div>
      <div className="clickable top-right" onClick={() => handleClick('https://0-th.com')}></div>
      <div className="clickable center" onClick={() => handleClick('https://en.wiktionary.org/wiki/Massimo#Etymology')}></div>
      <div className="clickable bottom-center" onClick={() => handleClick('mailto:contact@massimovenezia.com')}></div>
      <div className="clickable social-media" onClick={() => handleNavigate('/social-media')}></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Routes>
    </Router>
  );
}

export default App;
