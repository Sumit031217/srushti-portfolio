import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Connect from './pages/Connect';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <Router>
      <div className="selection:bg-blue-100 selection:text-brand-accent-blue antialiased flex flex-col min-h-screen">
        
        <nav className="fixed top-0 left-0 w-full bg-brand-bg/90 backdrop-blur-md z-50 border-b border-slate-200/50 px-6 md:px-24 py-5 flex justify-between items-center">
        <Link to="/" className="font-poppins font-bold tracking-tight text-3xl uppercase text-brand-blue hover:text-brand-accent-blue transition-colors">
            Srushti Pagariya
          </Link>
          <div className="flex gap-6 font-mono text-xl uppercase tracking-wider text-slate-500">
            <Link to="/about" className="hover:text-brand-blue transition-colors">About</Link>
            <Link to="/skills" className="hover:text-brand-blue transition-colors">Skills</Link>
            <Link to="/connect" className="hover:text-brand-blue transition-colors">Connect</Link>
          </div>
        </nav>

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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