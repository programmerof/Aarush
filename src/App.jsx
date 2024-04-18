import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardComponent from './pages/serviceStack';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardComponent />} />
      </Routes>
    </Router>
  );
};

export default App;