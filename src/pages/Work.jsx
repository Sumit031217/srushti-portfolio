import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure these match your actual file extensions (.png or .jpg) in the assets folder!
import inforensCover from '../assets/inforens-cover.png'; 
import widowsCover from '../assets/widows-cover.png';
import sweetLiesCover from '../assets/sweet-lies-cover.png';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".header-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" });
      gsap.utils.toArray('.project-card').forEach((element) => {
        gsap.fromTo(element, 
          { y: 50, opacity: 0 }, 
          { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // REORDERED: Inforens is now at the top
  const projects = [
    {
      id: "inforens",
      tag: "UX Strategy / Service Design / Internship Project",
      title: "Inforens",
      headline: "Helping a student platform feel as trustworthy as the service behind it.",
      body: "A UX and service design internship project focused on making mentors, tools, community, and support more visible and believable to international students.",
      inside: [
        "A first-time-user audit of trust, clarity, and visibility gaps.",
        "Website and service recommendations across key student journey stages.",
        "A rewards system built around real student value, not generic discounts."
      ],
      image: inforensCover,
      placeholder: "[ Project 3 Visual ]"
    },
    {
      id: "scottish-widows",
      tag: "Service Design / Financial Wellbeing / Live Client Project",
      title: "Scottish Widows x GSA",
      headline: "Designing income protection for people whose lives do not fit a fixed salary.",
      body: "A service design project exploring how income protection can feel more relevant, human, and understandable for young adults working freelance, self-employed, or gig-based jobs.",
      inside: [
        "Research with 18–30 year olds living with income uncertainty.",
        "Insight synthesis and opportunity framing for a live financial wellbeing brief.",
        "A more human direction for communicating protection and security."
      ],
      image: widowsCover,
      placeholder: "[ Project 1 Visual ]"
    },
    {
      id: "sweet-lies",
      tag: "Inclusive Education / Editorial Design / Learning Experience",
      title: "Sweet Lies and Bitter Truth",
      headline: "Using one biscuit to open up a much bigger story about empire, labour, and identity.",
      body: "An eight-page educational newspaper designed for 13–16 year olds, turning difficult colonial histories into a learning experience that is honest, structured, and respectful.",
      inside: [
        "A story-led editorial format for classroom learning.",
        "A process shaped by accessibility, stakeholder insight, and hard design decisions.",
        "A final outcome that values clarity over spectacle."
      ],
      image: sweetLiesCover,
      placeholder: "[ Project 2 Visual ]"
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
          <div key={project.id} className="project-card group flex flex-col md:flex-row gap-12 cursor-none">
            
            {/* Image Section - Now actually uses your imported images! */}
            <div className={`w-full md:w-5/12 aspect-[4/5] relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-accent-blue/20 transition-all duration-500 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-slate-50 opacity-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-sm tracking-widest bg-white/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                    {project.placeholder}
                  </div>
                </>
              )}
            </div>

            {/* Text Section */}
            <div className="w-full md:w-7/12 flex flex-col justify-center py-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-mono text-brand-accent-blue bg-brand-accent-blue/10 px-3 py-1 rounded-sm uppercase tracking-widest font-bold">
                  {project.tag}
                </span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-blue mb-3 group-hover:text-brand-accent-blue transition-colors">
                {project.title}
              </h2>
              <h3 className="font-montserrat text-xl text-brand-blue font-medium mb-6 leading-snug">
                {project.headline}
              </h3>
              <p className="font-montserrat text-slate-700 font-light mb-8 leading-relaxed text-lg">
                {project.body}
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Inside</p>
                <ul className="space-y-3 font-montserrat text-slate-600 text-sm">
                  {project.inside.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand-accent-blue mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to={`/case-study/${project.id}`} className="font-mono text-xs font-bold uppercase tracking-wider text-brand-blue border-b-2 border-brand-accent-blue pb-1 w-max group-hover:pr-4 transition-all duration-300 cursor-none">
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