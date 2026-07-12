import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".header-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" });
      
      // Card scroll animation
      gsap.utils.toArray('.project-card').forEach((element) => {
        gsap.fromTo(element, 
          { y: 50, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: "scottish-widows",
      tag: "Financial Wellbeing",
      title: "Scottish Widows x GSA",
      description: "Exploring how income protection can be understood, communicated, and experienced in a more human and meaningful way through research, synthesis, and service thinking.",
      placeholder: "[ Project 1 Visual ]"
    },
    {
      id: "sweet-lies",
      tag: "Inclusive Education",
      title: "Sweet Lies and Bitter Truth",
      description: "An educational newspaper designed for secondary learners that uses the Empire Biscuit to explore colonial history, food heritage, labour, and identity with honesty and care.",
      placeholder: "[ Project 2 Visual ]"
    },
    {
      id: "inforens",
      tag: "UX Strategy",
      title: "Inforens",
      description: "A set of connected UX and service design projects focused on making a student platform feel clearer, more trustworthy, and more human across website, rewards, and journey design.",
      placeholder: "[ Project 3 Visual ]"
    }
  ];

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="header-anim mb-20 border-b border-slate-200 pb-12">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue leading-tight mb-4">
          Selected Work
        </h1>
        <p className="font-montserrat text-lg text-slate-700 font-light max-w-2xl">
          A few projects that show how I work across service design, strategy, storytelling, and experience design.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card group flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Section - Alternates left/right based on even/odd index */}
            <div className={`w-full md:w-1/2 aspect-video relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-accent-blue/20 transition-all duration-500 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              {/* High-tech placeholder background */}
              <div className="absolute inset-0 bg-slate-50 opacity-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm tracking-widest bg-white/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                {project.placeholder}
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-brand-accent-blue"></span>
                <span className="text-xs font-mono text-brand-accent-blue uppercase tracking-widest font-bold">{project.tag}</span>
              </div>
              <h4 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue mb-6 group-hover:text-brand-accent-blue transition-colors">
                {project.title}
              </h4>
              <p className="font-montserrat text-slate-700 font-light mb-8 leading-relaxed text-lg">
                {project.description}
              </p>
              <Link to={`/case-study/${project.id}`} className="font-mono text-xs font-bold uppercase tracking-wider text-brand-blue border-b-2 border-brand-accent-blue pb-1 w-max group-hover:pr-4 transition-all duration-300">
                View case study &rarr;
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;