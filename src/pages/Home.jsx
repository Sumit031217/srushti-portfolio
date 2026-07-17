import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import profilePhoto from '../assets/srushti.png';
import inforensCover from '../assets/inforens-cover.png';
import widowsCover from '../assets/widows-cover.png';
import sweetLiesCover from '../assets/sweet-lies-cover.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);

  // --- MOUSE-REACTIVE SPOTLIGHT EFFECT ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      // Inject CSS variables for the spotlight
      heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    const heroEl = heroRef.current;
    if (heroEl) heroEl.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. KINETIC TYPOGRAPHY REVEAL (Premium Masking Effect)
      const titleLines = titleRef.current.querySelectorAll('.line-wrapper span');
      gsap.fromTo(titleLines, 
        { y: '100%', rotate: 2 }, 
        { y: '0%', rotate: 0, stagger: 0.1, duration: 1.2, ease: "expo.out", delay: 0.2 }
      );

      // 2. HERO ELEMENTS FADE
      gsap.fromTo(".hero-fade", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.5, ease: "power3.out", delay: 0.6 }
      );

      // 3. ORGANIC FLOATING ANIMATION FOR IMAGE
      gsap.to(photoRef.current, {
        y: -20,
        rotationZ: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 4. SCROLL REVEALS FOR PROJECTS
      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element, 
          { y: 80, opacity: 0, scale: 0.98 }, 
          { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );
      });
      
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Project Data (Unchanged)
  const projects = [
    { id: "inforens", tag: "UX Strategy", title: "Inforens", desc: "Helping a student platform feel as trustworthy as the service behind it.", image: inforensCover },
    { id: "scottish-widows", tag: "Financial Wellbeing", title: "Scottish Widows x GSA", desc: "Designing income protection for people whose lives do not fit a fixed salary.", image: widowsCover },
    { id: "sweet-lies", tag: "Inclusive Education", title: "Sweet Lies & Bitter Truth", desc: "Using one biscuit to open up a much bigger story about empire, labour, and identity.", image: sweetLiesCover }
  ];

  return (
    <main ref={pageRef} className="w-full overflow-hidden bg-white selection:bg-brand-accent-blue selection:text-white">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <section 
        ref={heroRef} 
        className="relative pt-32 pb-32 min-h-screen flex items-center"
        // Spotlight gradient tied to mouse position via CSS vars
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.08) 0%, transparent 40%)'
        }}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & UI */}
            <div className="lg:col-span-7 relative">
              <div className="hero-fade mb-6">
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-brand-accent-blue text-[10px] font-mono uppercase tracking-widest rounded-full shadow-sm shadow-brand-accent-blue/10">
                  Service Designer & Strategist
                </span>
              </div>
              
              {/* Masked Title Reveal */}
              <h1 ref={titleRef} className="font-poppins text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-brand-blue leading-[1.1] mb-8">
                <div className="line-wrapper overflow-hidden pb-2"><span className="block origin-bottom-left">Designing stories,</span></div>
                <div className="line-wrapper overflow-hidden pb-2"><span className="block origin-bottom-left">services, and experiences</span></div>
                <div className="line-wrapper overflow-hidden pb-2"><span className="block origin-bottom-left text-brand-accent-blue">people truly connect with.</span></div>
              </h1>
              
              <p className="hero-fade font-montserrat font-light text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
                From journalism to service design, my work grows around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
              </p>

              {/* Glassmorphism Interactive Bar */}
              <div className="hero-fade relative z-20">
                <div className="bg-white/60 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 p-2 flex items-center justify-between max-w-xl group hover:border-brand-accent-blue/40 transition-colors duration-500">
                  <div className="flex items-center gap-3 pl-4 text-slate-400 group-hover:text-brand-accent-blue transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="font-montserrat text-sm font-medium text-slate-500">Explore skills & case studies...</span>
                  </div>
                  <div className="flex gap-2 pr-1">
                    <div className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-none transition-colors">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-accent-blue flex items-center justify-center cursor-none hover:scale-110 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm12-3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Magnetic Buttons (Setup for custom cursor interactions) */}
                <div className="flex flex-wrap gap-4 mt-8 pl-2">
                  <Link to="/work" className="px-6 py-3 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-brand-blue hover:border-brand-blue transition-all flex items-center gap-2 bg-white shadow-sm cursor-none hover:-translate-y-1 hover:shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    View Selected Work
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column: Interactive Profile Image */}
            <div className="hero-fade lg:col-span-5 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex items-center justify-center group cursor-none">
                {/* Glowing Aurora Underlay */}
                <div className="absolute inset-0 bg-brand-accent-blue/20 blur-[80px] rounded-full group-hover:bg-brand-accent-blue/30 group-hover:scale-110 transition-all duration-1000 ease-out z-0 mix-blend-multiply"></div>
                
                <img 
                  ref={photoRef} 
                  src={profilePhoto} 
                  alt="Srushti Pagariya" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_30px_60px_rgba(124,58,237,0.3)] transition-all duration-700" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: PROJECTS GRID (Prepared for Phase 2 upgrade) --- */}
      <section className="py-32 relative bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="scroll-anim mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent-blue mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-accent-blue"></span> Case Studies
              </h3>
              <h2 className="font-poppins text-4xl md:text-5xl font-black text-brand-blue tracking-tighter">Selected Work</h2>
            </div>
            <Link to="/work" className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-accent-blue transition-colors cursor-none pb-1 border-b border-transparent hover:border-brand-accent-blue w-max">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <Link to={`/case-study/${project.id}`} key={idx} className="scroll-anim group flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(124,58,237,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-none">
                
                <div className="h-64 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-brand-blue text-[9px] font-mono uppercase tracking-widest font-bold rounded-sm shadow-sm">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-slate-100 group-hover:bg-brand-accent-blue group-hover:text-white text-slate-400 transition-all duration-500 z-20">
                    <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                  
                  <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent-blue transition-colors duration-300">{project.title}</h4>
                  <p className="font-montserrat text-sm text-slate-500 font-medium leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FOOTER (Now outside the padded container) --- */}
      <footer className="relative bg-brand-blue w-full pt-40 pb-12 overflow-hidden flex flex-col items-center border-t-4 border-brand-accent-blue">
        {/* Background Footer Topography */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.05]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footertopo" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M-100 200c50-50 100 0 150-50s100-50 150 0" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footertopo)" />
          </svg>
        </div>

        {/* Massive Typography Background */}
        <div className="relative z-10 w-full text-center px-6 mb-32">
          <h2 className="font-poppins font-black text-6xl md:text-[10rem] leading-[0.85] text-white uppercase tracking-tighter opacity-90">
            ALWAYS <br/>
            <span className="text-brand-accent-blue block mt-2">BRINGING</span>
            THE VALUE.
          </h2>
        </div>

        {/* Central Overlay Profile Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[300px] md:w-[500px] pointer-events-none mix-blend-screen opacity-60">
           <img src={profilePhoto} alt="Srushti" className="w-full h-auto object-cover grayscale blur-[1px]" />
        </div>

        {/* Links Grid */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-24">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-mono text-[10px] text-brand-accent-blue uppercase tracking-[0.2em] mb-2 font-bold">Pages</span>
            <a href="/" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Home</a>
            <a href="/#/work" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Work</a>
            <a href="/#/skills" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Skills</a>
          </div>

          {/* Center - Button (Pushed down to the torso to clear the face) */}
          <div className="flex justify-center items-end mt-24 md:mt-32">
            <a href="mailto:your-email@example.com" className="relative overflow-hidden group bg-brand-accent-blue text-white font-poppins font-bold uppercase tracking-widest px-8 py-5 rounded-full shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-500 flex items-center gap-4 cursor-none hover:scale-105">
              <span className="relative z-10">Let's Talk</span>
              <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="font-mono text-[10px] text-brand-accent-blue uppercase tracking-[0.2em] mb-2 font-bold">Follow On</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:-translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:-translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Instagram</a>
            <a href="https://readcv.com" target="_blank" rel="noreferrer" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:-translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Read.CV</a>
          </div>

        </div>

        <div className="relative z-30 w-full bg-slate-900 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] gap-4 md:gap-0 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} Srushti Pagariya.</span>
          <div className="flex gap-8">
            <span className="cursor-none hover:text-white transition-colors">Privacy</span>
            <span className="cursor-none hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;