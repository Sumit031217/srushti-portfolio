import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      role: "Service Design & Community Experience Intern",
      company: "Inforens",
      date: "Apr 2026 – Present",
      location: "London, UK (Remote)",
      description: "Improving user experience across web and app, contributing to service design, content strategy, events and brand partnerships for a platform supporting international students[cite: 2]. Mentoring prospective students relocating to Scotland through webinars and one-on-one support on academics, student life, and adapting to the UK[cite: 2]."
    },
    {
      role: "Creative Strategist",
      company: "Realatte",
      date: "Jul 2024 – Oct 2024",
      location: "Mumbai, India",
      description: "Developed and executed multi-channel creative strategies, aligning brand messaging with user needs and business objectives across digital touchpoints[cite: 2]. Translated market research and user insights into compelling campaign narratives, measurably improving brand clarity[cite: 2]."
    },
    {
      role: "Creative Intern",
      company: "World of Fian",
      date: "Jul 2023 – Dec 2023",
      location: "Mumbai, India",
      description: "Contributed to end-to-end creative production workflows, supporting brand content development and visual communication for digital campaigns[cite: 2]. Conducted audience research and concept development, helping establish tone of voice and messaging frameworks[cite: 2]."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-24 max-w-6xl mx-auto border-t border-slate-200">
      <div className="mb-16">
        <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-green mb-2">// Career Trajectory</h3>
        <h4 className="font-poppins text-3xl md:text-5xl font-bold text-brand-blue">Experience</h4>
      </div>

      <div className="space-y-12 border-l border-slate-200 pl-6 md:pl-10 ml-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-item relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-3 h-3 bg-brand-bg border-2 border-brand-accent-blue rounded-full"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h5 className="font-poppins text-xl font-bold text-brand-blue">{exp.role}</h5>
                <h6 className="font-poppins text-sm font-semibold text-brand-green uppercase tracking-wide mt-1">{exp.company}</h6>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right font-mono text-xs text-slate-500 uppercase tracking-wider">
                <p>{exp.date}</p>
                <p className="mt-1">{exp.location}</p>
              </div>
            </div>
            <p className="font-montserrat text-sm text-slate-600 leading-relaxed font-light mt-4 max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;