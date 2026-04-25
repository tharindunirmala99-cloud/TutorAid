
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SubjectsPage from './pages/SubjectsPage';
import TutorsPage from './pages/TutorsPage';
// import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
// import AIPromptSection from './components/AIPromptSection';
import Footer from './components/Footer';
//import SnowfallEffect from './components/Effects/SnowfallEffect';
import "./index.css"
import ScrollToTop from './components/Functions/ScrollToTop';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* <SnowfallEffect /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <LandingPage />
                {/* <AIPromptSection /> */}
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/tutors" element={<TutorsPage />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
