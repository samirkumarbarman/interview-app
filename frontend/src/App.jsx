import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing.jsx';
// import RegisterPage from './pages/RegisterPage';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/get-started" element={<RegisterPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;