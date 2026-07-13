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
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-16">
        <div className="hero-anim grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text & Search UI */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="px-3 py-1 bg-brand-accent-blue text-white text-[10px] font-mono uppercase tracking-widest rounded-sm">
                Service Designer & Researcher
              </span>
            </div>
            
            {/* Headline reduced in size */}
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue leading-tight mb-6">
              Designing stories, services, and experiences people can truly connect with.
            </h1>
            
            <p className="font-montserrat font-light text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl">
              I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design can bring to life. From journalism and media to service design and strategy, my work has grown around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
            </p>

            {/* CREATIVE SEARCH BAR UI */}
            <div className="mt-8">
              {/* Search Input Bar */}
              <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200 p-2 flex items-center justify-between max-w-xl group hover:border-brand-accent-blue/30 transition-colors">
                <div className="flex items-center gap-3 pl-4 text-slate-400 group-hover:text-brand-accent-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="font-montserrat text-sm font-medium text-slate-500">Skills, tools & case studies?</span>
                </div>
                <div className="flex gap-2 pr-1">
                  <div className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-none transition-colors">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E55039] flex items-center justify-center cursor-none hover:opacity-90 transition-opacity shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm12-3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Action Pills */}
              <div className="flex flex-wrap gap-3 mt-6 pl-2">
                <Link to="/work" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-slate-700 hover:border-[#E55039] hover:text-[#E55039] transition-all flex items-center gap-2 bg-white shadow-sm cursor-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Watch my best work
                </Link>
                <Link to="/skills" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-slate-700 hover:border-brand-accent-blue hover:text-brand-accent-blue transition-all flex items-center gap-2 bg-white shadow-sm cursor-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  Skills & tools
                </Link>
                <Link to="/about" className="px-5 py-2.5 rounded-full border border-slate-200 text-sm font-montserrat font-medium text-slate-700 hover:border-brand-green hover:text-brand-green transition-all flex items-center gap-2 bg-white shadow-sm cursor-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  Get to know me
                </Link>
              </div>
            </div>

          </div>
          
          {/* Right Column: Profile Photo - Now Background White & Higher Up */}
          <div className="hero-anim lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-slate-200 shadow-xl bg-white relative group hover:border-brand-accent-blue/50 transition-colors duration-500">
              <img src={profilePhoto} alt="Srushti Pagariya" className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 border-t border-slate-200 mt-12">
        <div className="scroll-anim mb-12 flex justify-between items-end">
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-accent-blue mb-3">Featured Project</h3>
            <h2 className="font-montserrat text-2xl text-brand-blue font-medium">Income Protection Service Innovation</h2>
          </div>
          <Link to="/work" className="hidden md:block font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-accent-blue transition-colors cursor-none">View All Work &rarr;</Link>
        </div>

        <div className="scroll-anim bg-white rounded-xl border border-slate-200 hover:border-brand-accent-blue/50 hover:shadow-xl hover:shadow-brand-accent-blue/10 transition-all duration-300 overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[300px] md:h-auto bg-slate-50 flex items-center justify-center text-slate-400 font-mono text-xs border-b md:border-b-0 md:border-r border-slate-200">
              <img src="/scottish-widows.jpg" alt="Scottish Widows x GSA" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative z-10">
              <span className="text-xs font-mono text-brand-accent-blue uppercase tracking-widest font-bold mb-2">Scottish Widows x GSA</span>
              <h4 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Financial Wellbeing</h4>
              <p className="font-montserrat text-slate-600 font-light mb-8">
                Exploring how income protection can be understood, communicated, and experienced in a more human and meaningful way through research, synthesis, and service thinking.
              </p>
              <Link to="/case-study/scottish-widows" className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent-blue group-hover:translate-x-2 transition-transform w-max cursor-none">Read full case study &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;