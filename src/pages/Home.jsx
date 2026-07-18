import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
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
  const globeRef = useRef(null);
  const textSectionRef = useRef(null);
  
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingText, setLoadingText] = useState('🌍 Welcome to Srushti');

  // --- 1. LUXURY GREETING LOADER SEQUENCE ---
  useEffect(() => {
    const sequences = [
      { text: '🌍 Welcome to Srushti', delay: 1000 },
      { text: '✨ Where Ideas Take Shape', delay: 2400 },
      { text: '🚀 Explore the Journey', delay: 3800 }
    ];

    sequences.forEach((seq, index) => {
      setTimeout(() => {
        setLoadingText(seq.text);
        if (index === sequences.length - 1) {
          setTimeout(() => {
            gsap.to(".luxury-loader", {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power4.inOut",
              onComplete: () => setLoadingComplete(true)
            });
          }, 1200);
        }
      }, seq.delay);
    });
  }, []);

  // --- 2. DYNAMIC LIGHTING & MOUSE SPOTLIGHT ENGINE ---
  useEffect(() => {
    if (!loadingComplete) return;

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);

      // Gentle interactive rotation on the 3D Globe based on cursor position
      if (globeRef.current) {
        const moveX = (x - 0.5) * 30;
        const moveY = (y - 0.5) * -30;
        gsap.to(globeRef.current, {
          rotateY: moveX,
          rotateX: moveY,
          duration: 1.5,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [loadingComplete]);

  // --- 3. HIGH-END GSAP TEXT & LAYER REVEALS ---
  useLayoutEffect(() => {
    if (!loadingComplete) return;

    let ctx = gsap.context(() => {
      // Split lines character layout reveal
      gsap.fromTo(".char-reveal span", 
        { y: '100%', rotate: 3 }, 
        { y: '0%', rotate: 0, stagger: 0.03, duration: 1.4, ease: "expo.out" }
      );

      gsap.fromTo(".hero-fade", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      // Line-by-line Philosophy reveal via scroll
      gsap.utils.toArray('.scroll-line-reveal').forEach((line) => {
        gsap.fromTo(line, 
          { opacity: 0, y: 20, filter: "blur(4px)" },
          { scrollTrigger: { trigger: line, start: "top 85%" }, opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
        );
      });

      // Selected Work cards reveal
      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element, 
          { y: 60, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      });

    }, pageRef);
    return () => ctx.revert();
  }, [loadingComplete]);

  const projects = [
    { id: "inforens", tag: "UX Strategy", title: "Inforens", desc: "Helping a student platform feel as trustworthy as the service behind it.", image: inforensCover },
    { id: "scottish-widows", tag: "Financial Wellbeing", title: "Scottish Widows x GSA", desc: "Designing income protection for people whose lives do not fit a fixed salary.", image: widowsCover },
    { id: "sweet-lies", tag: "Inclusive Education", title: "Sweet Lies & Bitter Truth", desc: "Using one biscuit to open up a much bigger story about empire, labour, and identity.", image: sweetLiesCover }
  ];

  return (
    <main ref={pageRef} className="w-full overflow-hidden bg-white text-brand-blue selection:bg-brand-accent-blue selection:text-white">
      
      {/* --- LUXURY SEQUENTIAL INTRO LOADING SCREEN --- */}
      {!loadingComplete && (
        <div className="luxury-loader fixed inset-0 z-[99999] bg-brand-blue flex flex-col items-center justify-center transition-all duration-500">
          <div className="text-center">
            <h2 className="font-poppins font-light text-white text-xl md:text-2xl tracking-[0.2em] mb-4 animate-pulse">
              {loadingText}
            </h2>
            <div className="w-48 h-[1px] bg-white/20 mx-auto overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-brand-accent-blue animate-[loadingBar_1.5s_infinite_ease-in-out]"></div>
            </div>
          </div>
        </div>
      )}

      {/* --- CINEMATIC HERO ENVIRONMENT --- */}
      <section 
        ref={heroRef}
        className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.06) 0%, transparent 50%)'
        }}
      >
        {/* Cosmos Layer: Starfield Overlay & Subtle Moving Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: HERO HEADERS & DISCOVERY PANEL */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="hero-fade mb-6">
              <span className="px-4 py-1.5 bg-brand-accent-blue/10 border border-brand-accent-blue/20 text-brand-accent-blue text-[10px] font-mono uppercase tracking-[0.25em] font-bold rounded-full shadow-sm">
                सृष्टि // The Beginning of Everything
              </span>
            </div>

            <h1 className="char-reveal font-poppins text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-brand-blue leading-[1.1] mb-8">
              <div className="overflow-hidden pb-1"><span className="block origin-bottom-left">Creating Digital Worlds</span></div>
              <div className="overflow-hidden pb-1"><span className="block origin-bottom-left text-brand-accent-blue">Inspired by Srushti.</span></div>
            </h1>

            <p className="hero-fade font-montserrat font-light text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
              Combining strategy, systematic research, and elegant visual design to mold interactive experiences out of raw ideas. Where imagination meets execution.
            </p>

            {/* Interactive Glassmorphism Navigation Actions */}
            <div className="hero-fade relative z-20 w-full max-w-lg">
              <div className="bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-200/60 p-2 flex items-center justify-between group hover:border-brand-accent-blue/30 transition-all duration-500">
                <div className="flex items-center gap-3 pl-4 text-slate-400 group-hover:text-brand-accent-blue transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="font-montserrat text-xs font-semibold tracking-wide text-slate-400">Discover Case Studies...</span>
                </div>
                <Link to="/work" className="bg-brand-blue text-white font-mono text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-brand-accent-blue hover:scale-105 transition-all shadow-md shadow-brand-blue/10 cursor-none">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REFINED 3D EARTH Visual Centerpiece */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[500px]">
            
            {/* Curved Orbiting Typography Halo Ring */}
            <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-brand-accent-blue/20 animate-[spin_40s_linear_infinite] pointer-events-none z-0 flex items-center justify-center">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0" fill="none" />
                <text className="font-mono text-[2.8px] fill-brand-accent-blue/40 uppercase tracking-[6px] font-bold">
                  <textPath href="#circlePath">CREATION • THE WORLD OF IDEAS • INNOVATION WITHOUT LIMITS • </textPath>
                </text>
              </svg>
            </div>

            {/* Orbiting Tiny Cosmic Satellites */}
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full animate-[spin_12s_linear_infinite] pointer-events-none z-10">
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-brand-accent-blue shadow-[0_0_10px_#7c3aed]"></div>
            </div>

            {/* Interactive 3D Earth Object */}
            <div 
              ref={globeRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.15)] group transition-transform duration-700 overflow-hidden bg-[#0d1b2a] z-10 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Atmospheric Soft Internal Glow Shield */}
              <div className="absolute inset-0 rounded-full border border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.1),inset_-20px_-20px_50px_rgba(0,0,0,0.8)] z-30 pointer-events-none"></div>
              
              {/* Real-world Atmospheric Gradient Halo Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-brand-accent-blue/10 to-brand-accent-blue/20 mix-blend-screen opacity-70 z-20 pointer-events-none"></div>

              {/* Seamless Panoramic Earth Map Layer */}
              <div 
                className="absolute inset-0 w-[200%] h-full opacity-60 mix-blend-lightbox bg-repeat-x animate-[earthRotate_25s_linear_infinite] z-10 pointer-events-none"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80')`,
                  backgroundSize: 'contain'
                }}
              ></div>

              {/* Flowing Floating Clouds Layer */}
              <div 
                className="absolute inset-0 w-[200%] h-full opacity-30 mix-blend-screen bg-repeat-x animate-[earthRotate_18s_linear_infinite] z-20 pointer-events-none"
                style={{
                  backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cloud_forest_in_the_cloud.jpg/1200px-Cloud_forest_in_the_cloud.jpg')`,
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>

            {/* Soft Cosmic Shadow Drop Base */}
            <div className="absolute bottom-10 w-64 h-6 bg-slate-900/5 blur-xl rounded-full z-0 pointer-events-none"></div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PHILOSOPHY OF SRUSHTI --- */}
      <section ref={textSectionRef} className="py-32 relative bg-slate-50 border-y border-slate-200/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="scroll-line-reveal font-poppins text-xs font-bold uppercase tracking-[0.3em] text-brand-accent-blue mb-6">
            The Ethos // सृष्टि
          </h3>
          <h2 className="scroll-line-reveal font-poppins text-3xl md:text-5xl font-black text-brand-blue tracking-tighter uppercase mb-8">
            Derived from Sanskrit, <br/>Srushti means <span className="text-brand-accent-blue">Creation</span>.
          </h2>
          <p className="scroll-line-reveal font-montserrat text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            "It is the birth of new ideas, the endless unfolding of nature, and the architecture of complete universes. This portfolio reflects that philosophy—blending technology, human strategy, and design systems to bring dynamic digital platforms into existence."
          </p>
        </div>
      </section>

      {/* --- SECTION 3: SELECTED WORKS GRID --- */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="scroll-anim mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent-blue mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-accent-blue"></span> Case Studies
              </h3>
              <h2 className="font-poppins text-4xl md:text-5xl font-black text-brand-blue tracking-tighter">Selected Work</h2>
            </div>
            <Link to="/work" className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-accent-blue transition-colors cursor-none pb-1 border-b border-transparent hover:border-brand-accent-blue w-max">
              View All Work &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <Link to={`/case-study/${project.id}`} key={idx} className="scroll-anim group flex flex-col h-full bg-white rounded-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-none">
                
                <div className="h-64 bg-slate-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-brand-blue text-[9px] font-mono uppercase tracking-widest font-bold rounded-sm shadow-sm">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-slate-100 group-hover:bg-brand-accent-blue group-hover:text-white text-slate-400 transition-all duration-500 z-20">
                    <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                  
                  <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent-blue transition-colors duration-300">{project.title}</h4>
                  <p className="font-montserrat text-sm text-slate-400 font-medium leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MASSIVE CONNECT FOOTER --- */}
      <footer className="relative bg-brand-blue w-full pt-40 pb-12 overflow-hidden flex flex-col items-center border-t border-slate-800">
        
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footertopo" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M-100 200c50-50 100 0 150-50s100-50 150 0" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footertopo)" />
          </svg>
        </div>

        <div className="relative z-10 w-full text-center px-6 mb-32">
          <h2 className="font-poppins font-black text-6xl md:text-[10rem] leading-[0.85] text-white uppercase tracking-tighter">
            ALWAYS <br/>
            <span className="text-brand-accent-blue block mt-2">BRINGING</span>
            THE VALUE.
          </h2>
        </div>

        {/* Torso Profile Overlay Placement to avoid covering face */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[300px] md:w-[500px] pointer-events-none mix-blend-screen opacity-50">
           <img src={profilePhoto} alt="Srushti" className="w-full h-auto object-cover grayscale blur-[0.5px]" />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-24">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-mono text-[10px] text-brand-accent-blue uppercase tracking-[0.2em] mb-2 font-bold">Pages</span>
            <a href="/" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Home</a>
            <a href="/#/work" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Work</a>
            <a href="/#/skills" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Skills</a>
          </div>

          <div className="flex justify-center items-end mt-24 md:mt-32 z-30">
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

        <div className="relative z-30 w-full bg-slate-950 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] gap-4 md:gap-0 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} Srushti Pagariya.</span>
          <div className="flex gap-8">
            <span className="cursor-none hover:text-white transition-colors">Privacy</span>
            <span className="cursor-none hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </footer>

      {/* --- INLINE HIGH-PERFORMANCE GPU KEYFRAMES --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes earthRotate {
          0% { background-position: 0px 0; }
          100% { background-position: 640px 0; }
        }
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />

    </main>
  );
};

export default Home;