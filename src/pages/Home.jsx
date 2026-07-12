import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePhoto from '../assets/srushti.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" });
      gsap.utils.toArray('.scroll-anim').forEach((element) => {
        gsap.fromTo(element, { y: 50, opacity: 0 }, { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <section className="pt-20 pb-16">
        <div className="hero-anim mb-6">
          <span className="px-3 py-1 bg-brand-accent-blue text-white text-[10px] font-mono uppercase tracking-widest rounded-sm">
            Service Designer & Researcher
          </span>
        </div>
        
        {/* Headings Reduced */}
        <h1 className="hero-anim font-poppins text-3xl md:text-5xl font-bold tracking-tight text-brand-blue leading-tight mb-12 max-w-4xl">
          Designing stories, services, and experiences people can truly connect with.
        </h1>
        
        <div className="hero-anim grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 font-montserrat font-light text-slate-600 text-lg">
            <p>
              I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design can bring to life. From journalism and media to service design and strategy, my work has grown around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
            </p>
            <div className="flex gap-4 pt-4 font-mono text-xs uppercase tracking-wider font-bold">
              <Link to="/work" className="px-6 py-4 bg-brand-blue text-white hover:bg-brand-accent-blue hover:shadow-lg hover:shadow-brand-accent-blue/30 transition-all rounded-sm">View My Work</Link>
              <a href="/resume.pdf" target="_blank" className="px-6 py-4 border-2 border-slate-200 text-brand-blue hover:border-brand-accent-blue hover:text-brand-accent-blue transition-colors rounded-sm">View CV</a>
            </div>
          </div>
          
          {/* Profile Photo - Framed to embrace the black background */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-100 shadow-2xl bg-black relative group hover:border-brand-accent-blue transition-colors duration-500">
            <img src={profilePhoto} alt="Srushti Pagariya" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 border-t border-slate-200">
        <div className="scroll-anim mb-12 flex justify-between items-end">
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-accent-blue mb-3">Featured Project</h3>
            <h2 className="font-montserrat text-2xl text-brand-blue font-medium">Income Protection Service Innovation</h2>
          </div>
          <Link to="/work" className="hidden md:block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-accent-blue transition-colors">View All Work &rarr;</Link>
        </div>

        <div className="scroll-anim bg-white rounded-xl border border-slate-200 hover:border-brand-accent-blue/50 hover:shadow-xl hover:shadow-brand-accent-blue/10 transition-all duration-300 overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[300px] md:h-auto bg-slate-50 flex items-center justify-center text-slate-400 font-mono text-xs border-b md:border-b-0 md:border-r border-slate-200">
              [ Project Visual ]
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-mono text-brand-accent-blue uppercase tracking-widest font-bold mb-2">Scottish Widows x GSA</span>
              <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Financial Wellbeing</h4>
              <p className="font-montserrat text-slate-600 font-light mb-8">
                Exploring how income protection can be understood, communicated, and experienced in a more human and meaningful way through research, synthesis, and service thinking.
              </p>
              <Link to="/case-study/scottish-widows" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue group-hover:translate-x-2 transition-transform w-max">Read full case study &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;