import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Updated to the new file name
import profilePhoto from '../assets/srushti.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const pageRef = useRef(null);
  const photoRef = useRef(null);

  const projects = [
    {
      id: "scottish-widows", tag: "Financial Wellbeing", title: "Scottish Widows x GSA",
      desc: "Designing income protection for people whose lives do not fit a fixed salary.", image: "/scottish-widows.jpg"
    },
    {
      id: "sweet-lies", tag: "Inclusive Education", title: "Sweet Lies & Bitter Truth",
      desc: "Using one biscuit to open up a much bigger story about empire, labour, and identity.", image: "/sweet-lies.jpg"
    },
    {
      id: "inforens", tag: "UX Strategy", title: "Inforens",
      desc: "Helping a student platform feel as trustworthy as the service behind it.", image: "/inforens.jpg"
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" });
      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element, { y: 50, opacity: 0 }, { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
      });
      // Floating animation for the cutout photo
      gsap.to(photoRef.current, { y: -15, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 pb-24 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-24">
        {/* Changed items-center to items-start to pull the photo up to the top of the text */}
        <div className="hero-anim grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-7 z-10 relative">
            <div className="mb-6">
              <span className="px-3 py-1 bg-brand-accent-blue text-white text-[10px] font-mono uppercase tracking-widest rounded-sm shadow-sm">
                Service Designer
              </span>
            </div>
            
            {/* Heading size reduced from 5xl/6xl down to 4xl/5xl */}
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue leading-[1.15] mb-6">
              Designing stories, services, and experiences people can truly connect with.
            </h1>
            
            <p className="font-montserrat font-light text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl">
              I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design can bring to life. From journalism and media to service design and strategy, my work has grown around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
            </p>

            {/* CREATIVE SEARCH BAR UI */}
            <div className="mt-8 relative z-20">
              <div className="bg-white rounded-full shadow-lg border border-slate-200 p-2 flex items-center justify-between max-w-xl group hover:border-brand-accent-blue/40 transition-colors">
                <div className="flex items-center gap-3 pl-4 text-slate-400 group-hover:text-brand-accent-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="font-montserrat text-sm font-medium text-slate-500">Skills, tools & case studies?</span>
                </div>
                <div className="flex gap-2 pr-1">
                  <div className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-none transition-colors">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E55039] flex items-center justify-center cursor-none hover:scale-105 transition-transform shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm12-3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pl-2">
                <Link to="/work" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-slate-700 hover:border-[#E55039] hover:text-[#E55039] transition-all flex items-center gap-2 bg-white shadow-sm cursor-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Watch my best work
                </Link>
                <Link to="/skills" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-slate-700 hover:border-brand-accent-blue hover:text-brand-accent-blue transition-all flex items-center gap-2 bg-white shadow-sm cursor-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  Skills & tools
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column: Photo removed bottom margins and set to align nicely with text */}
          <div className="hero-anim lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group cursor-none">
              
              {/* Glowing Visualization Aura */}
              <div className="absolute inset-0 bg-brand-accent-blue/15 blur-[60px] rounded-full scale-75 group-hover:scale-110 group-hover:bg-brand-accent-blue/30 transition-all duration-700 ease-out z-0"></div>
              
              {/* Floating Cutout */}
              <img 
                ref={photoRef} 
                src={profilePhoto} 
                alt="Srushti Pagariya" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_30px_30px_rgba(124,58,237,0.3)] transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALL PROJECTS - CREATIVE GRID */}
      <section className="py-24 border-t border-slate-200 relative">
        <div className="absolute inset-0 z-[-1] opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="scroll-anim mb-16 text-center max-w-2xl mx-auto">
          <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-accent-blue mb-4">Case Studies</h3>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link to={`/case-study/${project.id}`} key={idx} className="scroll-anim group flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-accent-blue/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-none">
              
              <div className="h-48 md:h-56 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-200 opacity-50" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-accent-blue text-[9px] font-mono uppercase tracking-widest font-bold rounded-sm shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-8 -mt-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-brand-accent-blue group-hover:text-white text-brand-accent-blue transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
                
                <h4 className="font-poppins text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent-blue transition-colors">{project.title}</h4>
                <p className="font-montserrat text-sm text-slate-600 font-light leading-relaxed mb-4 flex-grow">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;