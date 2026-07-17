import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORT YOUR 9 MEMORY PHOTOS
import mem1 from '../assets/mem-1.jpg';
import mem2 from '../assets/mem-2.jpg';
import mem3 from '../assets/mem-3.jpg';
import mem4 from '../assets/mem-4.jpg';
import mem5 from '../assets/mem-5.jpg';
import mem6 from '../assets/mem-6.jpg';
import mem7 from '../assets/mem-7.jpg';
import mem8 from '../assets/mem-8.jpg';
import mem9 from '../assets/mem-9.jpg';

// IMPORT PROFILE PHOTO FOR THE FOOTER
import profilePhoto from '../assets/srushti.png'; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade up animations
      gsap.from(".animate-up", {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out"
      });

      // Parallax effect for the scattered memory wall images
      gsap.utils.toArray('.parallax-item').forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed')) || 1;
        gsap.to(item, {
          y: -80 * speed, // Moves images up at different speeds as you scroll
          ease: "none",
          scrollTrigger: {
            trigger: ".memory-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative bg-[#F8F9FA] min-h-screen overflow-hidden selection:bg-brand-accent-blue selection:text-white">
      
      {/* 1. TOPOGRAPHIC SVG BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] fixed">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topography" width="400" height="400" patternUnits="userSpaceOnUse">
              <path d="M-100 200c50-50 100 0 150-50s100-50 150 0 100 100 150 50M-100 300c70-40 120 10 170-40s90-60 140-10 110 90 160 40M-100 100c60-60 110-10 160-60s100-40 150 10 120 80 170 30" fill="none" stroke="#000000" strokeWidth="1" />
              <path d="M-50 250c50-50 100 0 150-50s100-50 150 0 100 100 150 50" fill="none" stroke="#000000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topography)" />
        </svg>
      </div>

      {/* 2. ON TRACK / OFF TRACK SPLIT SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 min-h-[70vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          
          {/* ON TRACK */}
          <div className="animate-up flex flex-col items-start">
            <div className="relative mb-6">
              <span className="bg-brand-accent-blue text-white font-poppins text-5xl md:text-7xl font-black uppercase leading-none px-2 absolute -top-8 -left-4 z-10 shadow-lg">
                ON
              </span>
              <h2 className="text-brand-blue font-poppins text-6xl md:text-8xl font-black uppercase leading-none tracking-tight relative z-0">
                TRACK
              </h2>
            </div>
            <div className="bg-brand-accent-blue/10 border-l-4 border-brand-accent-blue p-4 mb-6">
              <p className="font-montserrat text-brand-blue font-medium text-sm md:text-base max-w-sm">
                [ Insert professional copy here. Talk about design, strategy, your process, and career highlights. ]
              </p>
            </div>
            <button className="w-12 h-12 bg-brand-accent-blue text-white flex items-center justify-center rounded-sm hover:scale-105 transition-transform shadow-md cursor-none">
              <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
          </div>

          {/* OFF TRACK */}
          <div className="animate-up flex flex-col items-start md:mt-24">
            <div className="relative mb-6">
              <span className="bg-brand-accent-blue text-white font-poppins text-5xl md:text-7xl font-black uppercase leading-none px-2 absolute -top-8 -left-4 z-10 shadow-lg">
                OFF
              </span>
              <h2 className="text-brand-blue font-poppins text-6xl md:text-8xl font-black uppercase leading-none tracking-tight relative z-0">
                TRACK
              </h2>
            </div>
            <div className="bg-brand-accent-blue/10 border-l-4 border-brand-accent-blue p-4 mb-6">
              <p className="font-montserrat text-brand-blue font-medium text-sm md:text-base max-w-sm">
                [ Insert personal copy here. Talk about food, travels, photography, and the things that inspire you. ]
              </p>
            </div>
            <button className="w-12 h-12 bg-brand-accent-blue text-white flex items-center justify-center rounded-sm hover:scale-105 transition-transform shadow-md cursor-none">
              <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
          </div>

        </div>
      </section>

      {/* 3. SCATTERED 12-COLUMN GRID MEMORY WALL (FIXED LAYOUT) */}
      <section className="memory-section relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* On mobile it's a stacked column with gaps, on desktop it's a 12-column grid */}
        <div className="flex flex-col gap-16 md:grid md:grid-cols-12 md:gap-x-8 md:gap-y-24 items-start">
          
          {/* IMAGE 1 (Top Left) */}
          <div className="parallax-item w-full md:col-span-5 md:col-start-1 relative" data-speed="0.8">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem1} alt="Memory 1" className="w-full h-auto object-cover shadow-xl border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 2 (Top Right - Pushed down slightly) */}
          <div className="parallax-item w-full md:col-span-4 md:col-start-8 md:mt-32 relative" data-speed="1.2">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem2} alt="Memory 2" className="w-full h-auto object-cover shadow-xl border border-slate-200 bg-white p-1" />
          </div>

          {/* THE QUOTE BLOCK (Center spanning) */}
          <div className="parallax-item w-full md:col-span-8 md:col-start-3 my-12 md:my-24 relative z-20" data-speed="1">
            <div className="bg-brand-accent-blue text-white p-8 md:p-16 shadow-2xl rounded-sm">
              <p className="font-poppins font-bold text-2xl md:text-4xl leading-tight">
                "Insert a larger quote or memory caption here. Write something deeply meaningful that represents how you see the world."
              </p>
            </div>
          </div>

          {/* IMAGE 3 (Mid Left) */}
          <div className="parallax-item w-full md:col-span-4 md:col-start-2 relative" data-speed="0.9">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem3} alt="Memory 3" className="w-full h-auto object-cover shadow-lg border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 4 (Mid Right) */}
          <div className="parallax-item w-full md:col-span-5 md:col-start-7 md:-mt-16 relative" data-speed="1.3">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem4} alt="Memory 4" className="w-full h-auto object-cover shadow-xl border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 5 (Center Large) */}
          <div className="parallax-item w-full md:col-span-8 md:col-start-3 md:mt-24 relative" data-speed="1.1">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem5} alt="Memory 5" className="w-full h-auto object-cover shadow-2xl border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 6 (Lower Left) */}
          <div className="parallax-item w-full md:col-span-4 md:col-start-1 md:mt-32 relative" data-speed="0.8">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem6} alt="Memory 6" className="w-full h-auto object-cover shadow-md border border-slate-200 bg-white p-1 grayscale-[30%] hover:grayscale-0 transition-all" />
          </div>

          {/* IMAGE 7 (Lower Mid-Right) */}
          <div className="parallax-item w-full md:col-span-3 md:col-start-6 md:mt-12 relative" data-speed="1.4">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem7} alt="Memory 7" className="w-full h-auto object-cover shadow-lg border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 8 (Lower Right) */}
          <div className="parallax-item w-full md:col-span-4 md:col-start-9 md:-mt-24 relative" data-speed="0.9">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem8} alt="Memory 8" className="w-full h-auto object-cover shadow-xl border border-slate-200 bg-white p-1" />
          </div>

          {/* IMAGE 9 (Bottom Center-Left) */}
          <div className="parallax-item w-full md:col-span-6 md:col-start-4 md:mt-32 relative" data-speed="1.2">
            <span className="absolute -top-3 left-0 bg-brand-accent-blue text-white font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-1 z-10 shadow-sm">
              [ LOCATION, YEAR ]
            </span>
            <img src={mem9} alt="Memory 9" className="w-full h-auto object-cover shadow-2xl border border-slate-200 bg-white p-1" />
          </div>

        </div>
      </section>

      {/* 4. MASSIVE CONNECT FOOTER (Replaces Connect Page) */}
      <footer className="relative bg-brand-blue w-full pt-32 pb-12 mt-24 overflow-hidden flex flex-col items-center">
        
        {/* Background Footer Topography */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footertopo" width="300" height="300" patternUnits="userSpaceOnUse">
                <path d="M-100 200c50-50 100 0 150-50s100-50 150 0" fill="none" stroke="#ffffff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footertopo)" />
          </svg>
        </div>

        {/* Massive Typography Background */}
        <div className="relative z-10 w-full text-center px-6 mb-24">
          <h2 className="font-poppins font-black text-5xl md:text-[8rem] leading-[0.9] md:leading-[0.8] text-white uppercase tracking-tighter">
            ALWAYS <br/>
            <span className="text-brand-accent-blue">BRINGING</span> <br/>
            THE VALUE.
          </h2>
        </div>

        {/* Central Overlay Profile Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[250px] md:w-[450px] pointer-events-none opacity-80 mix-blend-lighten">
           <img src={profilePhoto} alt="Srushti" className="w-full h-auto object-cover drop-shadow-2xl grayscale" />
        </div>

        {/* Links Grid */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          
          {/* Left - Pages */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-2">Pages</span>
            <a href="/" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">Home</a>
            <a href="/#/work" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">Work</a>
            <a href="/#/skills" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">Skills</a>
          </div>

          {/* Center - Button */}
          <div className="flex justify-center items-end pb-8">
            <a href="mailto:your-email@example.com" className="bg-brand-accent-blue text-white font-poppins font-bold uppercase tracking-wider px-6 md:px-8 py-3 md:py-4 rounded-sm shadow-2xl hover:scale-105 hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center gap-3 cursor-none">
              Business Enquiries
              <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* Right - Socials */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-2">Follow On</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">Instagram</a>
            <a href="https://readcv.com" target="_blank" rel="noreferrer" className="font-poppins font-bold text-white text-xl md:text-2xl hover:text-brand-accent-blue transition-colors cursor-none uppercase">Read.CV</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-30 w-full bg-brand-accent-blue py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-brand-blue font-poppins text-xs font-bold uppercase tracking-widest gap-4 md:gap-0 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} Srushti Pagariya. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-none hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-none hover:text-white transition-colors">Terms</span>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default About;