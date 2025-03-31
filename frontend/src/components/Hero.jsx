import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <h1>Welcome to the Interview App</h1>
      <p>Your journey to a successful interview starts here.</p>
      <button onClick={() => navigate('/get-started')}>Get Started</button>
    </div>
  );
};

export default Hero;