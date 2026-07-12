import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const pageRef = useRef(null);

  const skillCategories = [
    { title: "Service Design", items: ["Journey Mapping", "Service Blueprinting", "Stakeholder Mapping", "Participatory Co-design", "Systems Thinking", "Opportunity Framing", "Rapid Prototyping", "Usability Thinking"] },
    { title: "Research and Insight", items: ["Mixed-Methods Research", "Qualitative Interviews", "Surveys", "Desk Research", "Insight Synthesis", "Problem Framing", "Testing with Participants"] },
    { title: "Strategy and Storytelling", items: ["Narrative Design", "Content Strategy", "Brand Thinking", "Copywriting", "Workshop Facilitation", "Presentation Storytelling", "Concept Development"] },
    { title: "Design and Visuals", items: ["Figma", "Miro", "Canva", "Adobe Illustrator", "Adobe Photoshop", "Editorial Layout", "Video Production", "Visual Storytelling"] }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header anim
      gsap.fromTo(".header-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" });
      
      // Cards scroll anim
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
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="header-anim mb-20 max-w-3xl border-b border-slate-200 pb-12">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue mb-6">Capabilities</h1>
        <p className="font-montserrat text-lg text-slate-700 font-light leading-relaxed">
          Research, storytelling, systems thinking, and strategy, brought together to design experiences that feel human and useful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-card bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-accent-blue/50 hover:shadow-2xl hover:shadow-brand-accent-blue/10 transition-all duration-500 flex flex-col">
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-8 relative inline-block w-max">
              {category.title}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-accent-blue rounded-full"></span>
            </h3>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {category.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-800 hover:-translate-y-1 hover:bg-brand-accent-blue hover:text-white hover:border-brand-accent-blue hover:shadow-[0_4px_15px_rgba(124,58,237,0.4)] transition-all duration-300 cursor-none"
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