import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="register-options">
      <h2>Register as:</h2>
      <button onClick={() => navigate('/register/candidate')}>Candidate</button>
      <button onClick={() => navigate('/register/interviewer')}>Interviewer</button>
    </div>
  );
};

export default RegisterOptions;