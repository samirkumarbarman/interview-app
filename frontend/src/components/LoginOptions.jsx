import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="login-options">
      <h2>Login as:</h2>
      <button onClick={() => navigate('/login/candidate')}>Candidate</button>
      <button onClick={() => navigate('/login/interviewer')}>Interviewer</button>
    </div>
  );
};

export default LoginOptions;