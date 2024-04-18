import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardComponent from './pages/serviceStack';
import StudyCountry from './pages/study';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<CardComponent />} />
        <Route path="/study" element={<StudyCountry />} />


      </Routes>
    </Router>
  );
};

export default App;