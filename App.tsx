import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterPlayer from './components/FooterPlayer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-white border-t border-slate-200 py-10 pb-24 text-center">
           <div className="max-w-7xl mx-auto px-4">
             <p className="text-slate-500 text-sm">
               &copy; {new Date().getFullYear()} Solusi FM 93.8. All rights reserved. <br/>
               Part of Solusi University.
             </p>
           </div>
        </footer>

        <FooterPlayer />
      </div>
    </Router>
  );
};

export default App;