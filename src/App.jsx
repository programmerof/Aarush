import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardComponent from './pages/serviceStack';
import StudyCountry from './pages/study';
import Service from './pages/Service';
import Footer from './pages/footer';
import Header from './pages/Header';
import Hero from './pages/Hero';

const App = () => {
  return (
    <Router>
      {/* Put components in here */}
      <Header />
      <Hero />
      <Service />
      <StudyCountry />
      <CardComponent />
      <Footer />

      <Routes>
        {/* <Route path="/" element={<CardComponent />} />
        <Route path="/study" element={<StudyCountry />} /> */}


      </Routes>
    </Router>
  );
};

export default App;