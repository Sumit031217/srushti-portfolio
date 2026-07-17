import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const pageRef = useRef(null);

  // YOUR EXACT ORIGINAL DATA RESTORED
  const skillCategories = [
    { 
      id: "MOD-01",
      title: "Service Design", 
      spec: "SPEC: JOURNEYS & ECOSYSTEMS",
      description: "Mapping complex systems and uncovering opportunities to shape end-to-end service experiences that feel intuitive, accessible, and deeply human-centred.",
      items: ["Journey Mapping", "Service Blueprinting", "Co-design", "Systems Thinking", "Rapid Prototyping"] 
    },
    { 
      id: "MOD-02",
      title: "Research & Insight", 
      spec: "SPEC: DISCOVERY & SYNTHESIS",
      description: "Uncovering hidden needs through mixed-methods research, careful listening, and translating complex qualitative data into clear, actionable design directions.",
      items: ["Mixed-Methods", "Qualitative Interviews", "Surveys", "Insight Synthesis", "Problem Framing"] 
    },
    { 
      id: "MOD-03",
      title: "Strategy & Storytelling", 
      spec: "SPEC: NARRATIVE & POSITIONING",
      description: "Translating insights into compelling narratives that align business goals with user trust, ensuring every touchpoint communicates clear value and purpose.",
      items: ["Narrative Design", "Content Strategy", "Brand Thinking", "Workshop Facilitation"] 
    },
    { 
      id: "MOD-04",
      title: "Design & Visuals", 
      spec: "SPEC: PROTOTYPING & PRODUCTION",
      description: "Bringing concepts to life through rapid prototyping, high-fidelity visual design, and editorial layouts that prioritize clarity and user engagement.",
      items: ["Figma", "Miro", "Editorial Layout", "Visual Storytelling", "Adobe Creative Suite"] 
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Smoother, staggered entrance for the header
      gsap.fromTo(".header-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" });
      
      // Premium floating reveal for the cards
      gsap.utils.toArray('.skill-card').forEach((element) => {
        gsap.fromTo(element, 
          { y: 60, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 90%" }, y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-full min-h-screen relative overflow-hidden bg-white selection:bg-brand-accent-blue selection:text-white">
      
      {/* 1. THE BULLETPROOF SPACER - Forces content safely below the floating navbar */}
      <div className="w-full block pointer-events-none" style={{ height: '160px', minHeight: '160px' }} aria-hidden="true"></div>
      
      {/* Subtle schematic dot background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#7c3aed 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 relative z-10">
        
        <div className="header-anim mb-20 border-b border-slate-200 pb-12 max-w-3xl">
          <h1 className="font-poppins text-4xl md:text-5xl font-black tracking-tighter text-brand-blue mb-6">
            Capabilities
          </h1>
          <p className="font-montserrat text-lg text-slate-500 font-light leading-relaxed">
            Research, storytelling, systems thinking, and strategy, brought together to design experiences that feel human and useful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card relative bg-white/80 backdrop-blur-md p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-none h-full overflow-hidden rounded-sm">
              
              {/* Premium Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

              {/* Your original Tech UI Corner Brackets - Enhanced with transitions */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300 group-hover:border-brand-accent-blue transition-colors duration-500 z-10"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300 group-hover:border-brand-accent-blue transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-300 group-hover:border-brand-accent-blue transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300 group-hover:border-brand-accent-blue transition-colors duration-500 z-10"></div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Your original Top Bar: Module ID & Status Dots */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent-blue font-bold">
                    {category.id}
                  </span>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E55039] animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue opacity-50 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </div>
                </div>
                
                {/* Your original Title & Spec Subtitle */}
                <h3 className="font-poppins text-3xl font-black text-brand-blue uppercase tracking-tight mb-2 group-hover:text-brand-accent-blue transition-colors duration-300">
                  {category.title}
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200/60 pb-4 mb-6 block">
                  {category.spec}
                </span>
                
                {/* Your original Description Body */}
                <p className="font-montserrat text-slate-600 font-medium leading-relaxed mb-12 flex-grow">
                  {category.description}
                </p>
                
                {/* Your original Bottom Row Tags (Terminal Style) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-500 uppercase tracking-widest group-hover:border-brand-accent-blue/40 group-hover:text-brand-blue group-hover:bg-brand-accent-blue/5 transition-all duration-300 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;