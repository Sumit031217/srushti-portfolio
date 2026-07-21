import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
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
  
  // NEW: State and Ref for the Bio Modal
  const [isBioOpen, setIsBioOpen] = useState(false);
  const bioRef = useRef(null);

  // NEW: The Poem Data with Visual Elements
  const bioPoem = [
    { if: "If I were a device", then: "I'd be a radio", desc: "Because I love speaking, storytelling, music, and words.", icon: "📻", color: "from-orange-400 to-amber-500" },
    { if: "If I were a thing", then: "I'd be a mirror", desc: "Because I'm self reflective, honest with myself, and always trying to grow.", icon: "🪞", color: "from-sky-400 to-blue-500" },
    { if: "If I were a designer", then: "I'd be sun, moon, & clouds", desc: "Because I don't want to fit into one box. I want to create all day, every day.", icon: "⛅", color: "from-yellow-400 to-orange-400" },
    { if: "If I were a caption", then: "I'd be 6°", desc: "Because I like the kind of people and ideas that feel relatable.", icon: "❄️", color: "from-teal-300 to-emerald-400" },
    { if: "If I were a vegetable", then: "I'd be a chilli", desc: "Not everyone can handle me. But the right people never let go.", icon: "🌶️", color: "from-red-500 to-rose-600" },
    { if: "If I were an app", then: "I'd be Spotify", desc: "Because I want people to feel comfortable being themselves around me.", icon: "🎧", color: "from-green-400 to-emerald-500" },
    { if: "If I were an animal", then: "I'd be a dog", desc: "Loyal, close to my people, and all in when I care.", icon: "🐕", color: "from-amber-600 to-orange-700" },
    { if: "If I were an ornament", then: "I'd be earrings", desc: "Small, but impossible to ignore.", icon: "✨", color: "from-purple-400 to-brand-accent-blue" }
  ];

  // NEW: GSAP Animation for the Modal opening
  useEffect(() => {
    if (isBioOpen && bioRef.current) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when open
      gsap.fromTo(
        gsap.utils.toArray('.bio-line'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isBioOpen]);
  

  // --- DYNAMIC LIGHTING & MOUSE SPOTLIGHT ENGINE ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);

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
  }, []); 

  // --- GSAP TEXT REVEALS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".char-reveal span", 
        { y: '100%', rotate: 3 }, 
        { y: '0%', rotate: 0, stagger: 0.03, duration: 1.4, ease: "expo.out" }
      );

      gsap.fromTo(".hero-fade", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );

      gsap.utils.toArray('.scroll-line-reveal').forEach((line) => {
        gsap.fromTo(line, 
          { opacity: 0, y: 20, filter: "blur(4px)" },
          { scrollTrigger: { trigger: line, start: "top 85%" }, opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }
        );
      });

      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element, 
          { y: 60, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      });

    }, pageRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    { id: "inforens", tag: "UX Strategy", title: "Inforens", desc: "Helping a student platform feel as trustworthy as the service behind it.", image: inforensCover },
    { id: "scottish-widows", tag: "Financial Wellbeing", title: "Scottish Widows x GSA", desc: "Designing income protection for people whose lives do not fit a fixed salary.", image: widowsCover },
    { id: "sweet-lies", tag: "Inclusive Education", title: "Sweet Lies & Bitter Truth", desc: "Using one biscuit to open up a much bigger story about empire, labour, and identity.", image: sweetLiesCover }
  ];

  return (
    <main ref={pageRef} className="w-full overflow-hidden bg-white text-brand-blue selection:bg-brand-accent-blue selection:text-white">
      
      <section 
        ref={heroRef}
        className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden"
        style={{ background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.06) 0%, transparent 50%)' }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
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

          <div className="lg:col-span-6 flex justify-center items-center relative h-[500px]">
            <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-brand-accent-blue/20 animate-[spin_40s_linear_infinite] pointer-events-none z-0 flex items-center justify-center">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0" fill="none" />
                <text className="font-mono text-[2.8px] fill-brand-accent-blue/40 uppercase tracking-[6px] font-bold">
                  <textPath href="#circlePath">CREATION • THE WORLD OF IDEAS • INNOVATION WITHOUT LIMITS • </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full animate-[spin_12s_linear_infinite] pointer-events-none z-10">
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-brand-accent-blue shadow-[0_0_10px_#7c3aed]"></div>
            </div>

            {/* THE HYPER-REALISTIC EARTH: NASA textures and atmospheric scattering (No Clouds). */}
            <div 
              ref={globeRef}
              onClick={() => setIsBioOpen(true)}
              /* ADDED overflow-hidden BACK IN TO LOCK THE MAP INSIDE THE CIRCLE */
              className="relative flex-shrink-0 aspect-square w-72 h-72 md:w-80 md:h-80 min-w-[18rem] min-h-[18rem] md:min-w-[20rem] md:min-h-[20rem] rounded-full group transition-all duration-700 bg-black z-10 transform-gpu cursor-pointer overflow-hidden hover:scale-105 hover:shadow-[0_0_100px_rgba(124,58,237,0.4)]"
             >
              {/* 1. True 3D Spherical Shading (Day/Night Terminator) */}
              <div className="absolute inset-0 rounded-full shadow-[inset_-50px_-30px_60px_rgba(0,0,0,0.9),inset_10px_10px_40px_rgba(255,255,255,0.4)] z-30 pointer-events-none border border-white/10"></div>
              
              {/* 2. Natural Earth Map (No clouds!) */}
              <div 
                className="absolute top-0 left-0 h-full w-[400%] animate-[earthSpin_40s_linear_infinite] z-10 pointer-events-none opacity-100"
                style={{
                  backgroundImage: `url('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg')`,
                  backgroundSize: '50% 100%',
                  backgroundRepeat: 'repeat-x',
                  filter: 'contrast(1.1) saturate(1.1)' 
                }}
              ></div>

              {/* 3. Subtle Blue Atmospheric Edge Glow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(100,150,255,0.3)] z-40 pointer-events-none mix-blend-screen"></div>
            </div>

            <div className="absolute bottom-10 w-64 h-6 bg-slate-900/5 blur-xl rounded-full z-0 pointer-events-none"></div>

          </div>
        </div>
      </section>

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

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[300px] md:w-[500px] pointer-events-none mix-blend-screen opacity-50">
           <img src={profilePhoto} alt="Srushti" className="w-full h-auto object-cover grayscale blur-[0.5px]" />
        </div>

        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-24">
        <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-mono text-[10px] text-brand-accent-blue uppercase tracking-[0.2em] mb-2 font-bold">Pages</span>
            {/* Switched to React <Link> to fix routing issues and changed Home to About */}
            <Link to="/about" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">About</Link>
            <Link to="/work" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Work</Link>
            <Link to="/skills" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">Skills</Link>
          </div>

          <div className="flex justify-center items-end mt-24 md:mt-32 z-30">
            {/* Switched to a direct Gmail web link so it works perfectly for everyone, even without a desktop mail app */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=srushtisachinpagariya@gmail.com" target="_blank" rel="noreferrer" className="relative overflow-hidden group bg-brand-accent-blue text-white font-poppins font-bold uppercase tracking-widest px-8 py-5 rounded-full shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-500 flex items-center gap-4 cursor-none hover:scale-105">
              <span className="relative z-10">Let's Talk</span>
              <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="font-mono text-[10px] text-brand-accent-blue uppercase tracking-[0.2em] mb-2 font-bold">Follow On</span>
            {/* HOW TO ADD YOUR LINKEDIN: Paste your profile URL inside the href quotes below */}
            <a href="https://www.linkedin.com/in/srushti-pagariya/" target="_blank" rel="noreferrer" className="font-poppins font-black text-white text-2xl md:text-3xl hover:text-brand-accent-blue hover:-translate-x-2 transition-all duration-300 cursor-none uppercase tracking-tight">LinkedIn</a>
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

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes earthSpin {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      {/* --- THE SECRET BIO OVERLAY --- */}
      {isBioOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-xl p-6 md:p-12 overflow-y-auto">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsBioOpen(false)}
            className="absolute top-8 right-8 w-12 h-12 bg-slate-100 hover:bg-brand-accent-blue hover:text-white text-brand-blue rounded-full flex items-center justify-center transition-colors z-50 cursor-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div ref={bioRef} className="max-w-3xl w-full mx-auto my-auto py-20">
            
            {/* Intro */}
            <div className="bio-line mb-16 text-center">
              <span className="inline-block px-4 py-1.5 bg-brand-accent-blue/10 border border-brand-accent-blue/20 text-brand-accent-blue text-[10px] font-mono uppercase tracking-widest font-bold rounded-full mb-6">
                Beyond The Portfolio
              </span>
              <p className="font-poppins text-xl md:text-3xl font-bold text-brand-blue leading-snug">
                I was asked to define myself <br className="hidden md:block" /> without saying my name.
              </p>
              <p className="font-montserrat text-slate-500 mt-4 italic">So I tried this instead.</p>
            </div>

            {/* The Visual Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              {bioPoem.map((item, idx) => (
                <div key={idx} className="bio-line group relative overflow-hidden bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-none">
                  
                  {/* Floating Giant Background Icon */}
                  <div className="absolute -right-8 -bottom-8 text-8xl md:text-[9rem] opacity-[0.07] group-hover:opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 z-0 pointer-events-none select-none">
                    {item.icon}
                  </div>

                  {/* Soft Color Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0`}></div>

                  <div className="relative z-10">
                    {/* Visual Badge */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg shadow-slate-300 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      {item.icon}
                    </div>

                    <p className="font-poppins text-lg md:text-xl text-slate-800 mb-4">
                      <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{item.if}</span>
                      <span className="font-black text-brand-blue text-2xl md:text-3xl">{item.then}</span>
                    </p>
                    
                    <p className="font-montserrat text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Outro */}
            <div className="bio-line text-center pt-10 border-t border-slate-200">
              <p className="font-poppins text-xl font-bold text-brand-blue mb-2">That's my kind of self-introduction.</p>
              <p className="font-montserrat text-brand-accent-blue">What would you be if you had to define yourself without using your name?</p>
            </div>

          </div>
        </div>
      )}

    </main>

  );
};

export default Home;