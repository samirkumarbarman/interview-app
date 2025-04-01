import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedPage = () => {
    const navigate = useNavigate();
  return (
    <div className="get-started-page">
      <h1>Get Started</h1>
      <div>
        <button onClick={() => navigate('/login-options')}>Login</button>
        <button onClick={() => navigate('/register-options')}>Register</button>
      </div>
    </div>
  );
};

export default GetStartedPage