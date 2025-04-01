import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage.jsx';
import GetStartedPage from './pages/GetStartedPage.jsx';
import LoginOptions from './components/LoginOptions.jsx';
import RegisterOptions from './components/RegisterOptions.jsx';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/login-options" element={<LoginOptions />} />
        <Route path="/register-options" element={<RegisterOptions />} />
        <Route path="/login/:userType" element={<LoginPage />} />
        <Route path="/register/:userType" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;