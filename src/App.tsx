import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import LiveCamera from './pages/LiveCamera';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<Auth />} />
        <Route path="/live-camera" element={<LiveCamera />} />
        <Route path="/map" element={<div>Map View Coming Soon</div>} />
        <Route path="/alerts" element={<div>Alerts Dashboard Coming Soon</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
