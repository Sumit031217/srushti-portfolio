import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Connect from './pages/Connect';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import CustomCursor from './CustomCursor';

function App() {
  // Function to handle active state styling
  const navLinkStyle = ({ isActive }) => 
    `hover:text-brand-accent-blue transition-colors pb-1 border-b-2 ${isActive ? 'border-brand-accent-blue text-brand-accent-blue' : 'border-transparent text-slate-500'}`;

  return (
    <Router>
      <CustomCursor />
      <div className="selection:bg-purple-100 selection:text-brand-accent-blue antialiased flex flex-col min-h-screen">
        
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200/50 px-6 md:px-24 py-5 flex justify-between items-center">
          <Link to="/" className="font-poppins font-bold tracking-tight text-xl uppercase text-brand-blue hover:text-brand-accent-blue transition-colors">
            Srushti Pagariya
          </Link>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-wider items-center">
            {/* Home Icon Navigation */}
            <NavLink to="/" className={({ isActive }) => `hover:text-brand-accent-blue transition-colors pb-1 border-b-2 ${isActive ? 'border-brand-accent-blue text-brand-accent-blue' : 'border-transparent text-slate-500'}`}>
              <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/work" className={navLinkStyle}>Work</NavLink>
            <NavLink to="/skills" className={navLinkStyle}>Skills</NavLink>
            <NavLink to="/connect" className={navLinkStyle}>Connect</NavLink>
          </div>
        </nav>

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </main>

        <footer className="py-12 text-center text-xs font-mono text-slate-400 border-t border-slate-200 mt-auto">
          <p>&copy; 2026 Srushti Pagariya. Service Designer & UX Researcher.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;