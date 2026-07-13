import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const pageRef = useRef(null);

  // Restructured data to match the technical "spec" UI from the image
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
      gsap.fromTo(".header-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" });
      
      gsap.utils.toArray('.skill-card').forEach((element) => {
        gsap.fromTo(element, 
          { y: 40, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 90%" }, y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative">
      
      {/* Subtle schematic dot background for the technical feel */}
      <div className="absolute inset-0 z-[-1] opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="header-anim mb-20 border-b border-slate-200 pb-12 max-w-3xl">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue mb-4">
          Capabilities
        </h1>
        <p className="font-montserrat text-lg text-slate-700 font-light leading-relaxed">
          Research, storytelling, systems thinking, and strategy, brought together to design experiences that feel human and useful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card relative bg-white p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-brand-accent-blue/10 transition-all duration-500 flex flex-col group cursor-none h-full">
            
            {/* Tech UI Corner Brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-200 group-hover:border-brand-accent-blue transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-200 group-hover:border-brand-accent-blue transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-200 group-hover:border-brand-accent-blue transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-200 group-hover:border-brand-accent-blue transition-colors duration-300"></div>

            {/* Top Bar: Module ID & Status Dots */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-accent-blue font-bold">
                {category.id}
              </span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E55039] animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue"></span>
              </div>
            </div>
            
            {/* Title & Spec Subtitle */}
            <h3 className="font-poppins text-2xl font-bold text-brand-blue uppercase tracking-wide mb-2 group-hover:text-brand-accent-blue transition-colors">
              {category.title}
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-4 mb-6 block">
              {category.spec}
            </span>
            
            {/* Description Body */}
            <p className="font-montserrat text-sm text-slate-600 font-light leading-relaxed mb-10 flex-grow">
              {category.description}
            </p>
            
            {/* Bottom Row Tags (Terminal Style) */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600 uppercase tracking-wider group-hover:border-brand-accent-blue/40 group-hover:text-brand-blue transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;