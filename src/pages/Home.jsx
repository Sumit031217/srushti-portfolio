import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 1. Register the Scroll plugin to fix the invisible element bug
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 2. Hero elements load instantly using fromTo (bypasses React Strict Mode bugs)
      gsap.fromTo(".hero-anim", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" }
      );

      // 3. Grid cards now animate ONLY when you scroll down to them
      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%", // Triggers when the top of the card hits the bottom 15% of the screen
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }
        );
      });

    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16">
        <div className="hero-anim mb-6">
          <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-mono uppercase tracking-widest rounded-sm">
            Service Designer & Researcher
          </span>
        </div>
        
        <h1 className="hero-anim font-poppins text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-blue leading-tight mb-12 max-w-5xl">
          Designing stories, services, and experiences people can truly connect with.
        </h1>
        
        <div className="hero-anim grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Text */}
          <div className="space-y-6 font-montserrat font-light text-slate-600 text-lg">
            <p>
              I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design can bring to life. From journalism and media to service design and strategy, my work has grown around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
            </p>
            <p>
              Now, as an MDes Design Innovation and Service Design student at Glasgow School of Art, I work across research, service thinking, storytelling, and experience design.
            </p>
          </div>
          
          {/* Right Action Box */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
            <p className="font-montserrat text-brand-blue font-medium mb-8 leading-relaxed">
              My work often sits between systems and stories. I map journeys, uncover insights, shape service concepts, and turn complexity into something more intuitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs uppercase tracking-wider font-bold">
              <a href="#work" className="px-6 py-4 bg-brand-blue text-white hover:bg-brand-accent-blue transition-colors text-center rounded-sm">
                Explore Work
              </a>
              <Link to="/about" className="px-6 py-4 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors text-center rounded-sm">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK (BENTO GRID) */}
      <section id="work" className="py-20 border-t border-slate-200">
        <div className="hero-anim mb-12">
          <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-green mb-3">
            Selected Work
          </h3>
          <p className="font-montserrat text-xl text-brand-blue font-medium max-w-2xl">
            A few projects that show how I work across service design, strategy, storytelling, and experience design.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: Full Width Row */}
          <div className="scroll-anim md:col-span-2 bg-white rounded-xl border border-slate-200 hover:border-brand-accent-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[300px] md:h-auto bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs border-b md:border-b-0 md:border-r border-slate-200">
                [ Project 1 Image Placeholder ]
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-mono text-brand-green uppercase tracking-widest font-bold mb-2">Financial Wellbeing</span>
                <h4 className="font-poppins text-3xl font-bold text-brand-blue mb-4">Scottish Widows x GSA</h4>
                <p className="font-montserrat text-slate-600 font-light mb-8">
                  Exploring how income protection can be understood, communicated, and experienced in a more human and meaningful way through research, synthesis, and service thinking.
                </p>
                <Link to="/case-study/scottish-widows" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue group-hover:translate-x-2 transition-transform w-max">
                  View case study &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2: Half Width */}
          <div className="scroll-anim bg-white rounded-xl border border-slate-200 hover:border-brand-accent-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
            <div className="h-[250px] bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs border-b border-slate-200">
              [ Project 2 Image Placeholder ]
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-mono text-brand-accent-blue uppercase tracking-widest font-bold mb-2">Inclusive Education</span>
              <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Sweet Lies and Bitter Truth</h4>
              <p className="font-montserrat text-slate-600 font-light mb-8 flex-grow">
                An educational newspaper designed for secondary learners that uses the Empire Biscuit to explore colonial history, food heritage, labour, and identity with honesty and care.
              </p>
              <Link to="/case-study/sweet-lies" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue group-hover:translate-x-2 transition-transform w-max mt-auto">
                View case study &rarr;
              </Link>
            </div>
          </div>

          {/* Project 3: Half Width */}
          <div className="scroll-anim bg-white rounded-xl border border-slate-200 hover:border-brand-accent-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
            <div className="h-[250px] bg-slate-100 flex items-center justify-center text-slate-400 font-mono text-xs border-b border-slate-200">
              [ Project 3 Image Placeholder ]
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold mb-2">UX Strategy</span>
              <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Inforens</h4>
              <p className="font-montserrat text-slate-600 font-light mb-8 flex-grow">
                A set of connected UX and service design projects focused on making a student platform feel clearer, more trustworthy, and more human across website, rewards, and journey design.
              </p>
              <Link to="/case-study/inforens" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue group-hover:translate-x-2 transition-transform w-max mt-auto">
                View case study &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* PREVIEW CARDS */}
      <section className="py-20 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* About Card */}
        <div className="scroll-anim bg-white p-8 rounded-xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
          <h3 className="font-poppins text-xl font-bold text-brand-blue mb-4">A little about me</h3>
          <p className="font-montserrat text-slate-600 font-light text-sm leading-relaxed mb-8 flex-grow">
            My practice sits at the intersection of systems and stories. I am especially interested in inclusive services, education, cultural experiences, and making touchpoints feel thoughtful, accessible, and alive.
          </p>
          <Link to="/about" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue">Read more &rarr;</Link>
        </div>

        {/* Skills Card */}
        <div className="scroll-anim bg-white p-8 rounded-xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
          <h3 className="font-poppins text-xl font-bold text-brand-blue mb-4">What I bring</h3>
          <p className="font-montserrat text-slate-600 font-light text-sm leading-relaxed mb-6">
            Research, storytelling, systems thinking, and strategy, brought together to design experiences that feel human and useful.
          </p>
          <ul className="font-mono text-xs text-slate-500 uppercase tracking-wider space-y-2 mb-8 flex-grow">
            <li>&bull; Service Design</li>
            <li>&bull; Research and Insight</li>
            <li>&bull; Strategy and Storytelling</li>
          </ul>
          <Link to="/skills" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue">See full skills &rarr;</Link>
        </div>

        {/* Contact Card (Dark Theme to stand out) */}
        <div className="scroll-anim bg-brand-blue p-8 rounded-xl border border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent-blue/20 transition-all duration-300 flex flex-col text-white">
          <h3 className="font-poppins text-xl font-bold mb-4">Let's connect</h3>
          <p className="font-montserrat text-slate-300 font-light text-sm leading-relaxed mb-8 flex-grow">
            I'm always happy to connect over design, storytelling, research, strategy, or meaningful collaborations.
          </p>
          <div className="flex flex-col gap-4 font-mono text-xs font-bold uppercase tracking-wider">
            <a href="mailto:srushtisachinpagariya@gmail.com" className="text-[#ccff00] hover:text-white transition-colors">Email me &rarr;</a>
            <a href="#" className="text-[#ccff00] hover:text-white transition-colors">LinkedIn &rarr;</a>
            <a href="/resume.pdf" target="_blank" className="text-[#ccff00] hover:text-white transition-colors">View CV &rarr;</a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Home;