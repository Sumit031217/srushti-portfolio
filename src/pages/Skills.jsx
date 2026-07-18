import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Capabilities = () => {
  const containerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  // --- MOUSE TRACKING & PREMIUM CURSOR ENGINE ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- GSAP HIGH-PERFORMANCE ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Cinematic Hero Split-Text Reveal
      gsap.fromTo(".char-reveal span", 
        { y: '120%', opacity: 0, rotate: 2 }, 
        { y: '0%', opacity: 1, rotate: 0, stagger: 0.02, duration: 1.2, ease: "expo.out", delay: 0.1 }
      );
      
      gsap.fromTo(".hero-fade",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      // 2. Scroll Fade-Ups for Sections
      gsap.utils.toArray('.scroll-up').forEach((el) => {
        gsap.fromTo(el, 
          { y: 60, opacity: 0, filter: 'blur(5px)' }, 
          { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: "power3.out" }
        );
      });

      // 3. Process Timeline Line Animation
      gsap.fromTo(".process-line-fill",
        { scaleY: 0 },
        { scrollTrigger: { trigger: ".process-container", start: "top 70%", end: "bottom 80%", scrub: 1 }, scaleY: 1, ease: "none", transformOrigin: "top center" }
      );

      // 4. Staggered Process Nodes
      gsap.utils.toArray('.process-node').forEach((node, i) => {
        gsap.fromTo(node,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          { scrollTrigger: { trigger: node, start: "top 80%" }, opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" }
        );
      });

      // 5. Statistics Counters
      gsap.utils.toArray('.stat-counter').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.fromTo(counter, 
          { textContent: 0 }, 
          { scrollTrigger: { trigger: counter, start: "top 90%" }, 
            textContent: target, duration: 2.5, ease: "power2.out", snap: { textContent: 1 },
            onUpdate: function() { counter.innerHTML = Math.ceil(this.targets()[0].textContent) + (counter.getAttribute('data-suffix') || ''); }
          }
        );
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const capabilities = [
    { title: "Brand Identity", desc: "Crafting memorable visual identities that deeply resonate with your audience and communicate core values.", icon: "✧" },
    { title: "UI/UX Design", desc: "Designing intuitive, human-centered interfaces that balance aesthetic elegance with frictionless usability.", icon: "⚲" },
    { title: "Digital Strategy", desc: "Aligning creative execution with business objectives to ensure measurable growth and lasting impact.", icon: "◒" },
    { title: "Interactive Experiences", desc: "Developing immersive, motion-rich web environments that captivate users and elevate brand perception.", icon: "✦" },
    { title: "Product Design", desc: "End-to-end design of digital products, from initial wireframing to high-fidelity, scalable design systems.", icon: "▤" },
    { title: "Creative Direction", desc: "Guiding the holistic visual and narrative vision across all touchpoints for a unified brand ecosystem.", icon: "☀" }
  ];

  const comparisons = [
    { others: "Generic Templates", srushti: "Tailor-made Experiences" },
    { others: "Superficial Aesthetics", srushti: "Research-Driven Design" },
    { others: "Standard Layouts", srushti: "Premium UI & Interactions" },
    { others: "Basic Transitions", srushti: "Meaningful Motion Design" },
    { others: "Isolated Features", srushti: "Holistic Business Strategy" }
  ];

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-screen bg-[#FAFAFA] text-slate-900 relative overflow-hidden font-montserrat selection:bg-brand-accent-blue selection:text-white cursor-none"
      style={{ '--mouse-x': '50vw', '--mouse-y': '50vh' }}
    >
      
      {/* --- PREMIUM CUSTOM CURSOR --- */}
      <div 
        className="pointer-events-none fixed z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center mix-blend-difference"
        style={{
          left: 'var(--mouse-x)', top: 'var(--mouse-y)',
          width: cursorVariant === 'explore' ? '80px' : '24px',
          height: cursorVariant === 'explore' ? '80px' : '24px',
          backgroundColor: cursorVariant === 'explore' ? '#ffffff' : 'transparent',
          border: cursorVariant === 'explore' ? 'none' : '2px solid #ffffff',
          borderRadius: '50%',
        }}
      >
        <span className={`font-mono text-[10px] uppercase tracking-widest text-black font-bold transition-opacity duration-300 ${cursorVariant === 'explore' ? 'opacity-100' : 'opacity-0'}`}>
          {cursorText}
        </span>
      </div>

      {/* --- SUBTLE WHITE/LIGHT BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-accent-blue/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      {/* Navbar Clearance */}
      <div className="h-32 w-full block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* --- SECTION 1: HERO --- */}
        <section className="min-h-[70vh] flex flex-col justify-center pb-20">
          <div className="hero-fade mb-6">
            <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-[10px] font-mono uppercase tracking-[0.25em] font-bold rounded-full shadow-sm">
              Srushti Creative Studio
            </span>
          </div>

          <h1 className="char-reveal font-poppins text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-slate-900 leading-[1.05] mb-8 max-w-5xl">
            <div className="overflow-hidden pb-2"><span className="block origin-bottom-left">Crafting Digital</span></div>
            <div className="overflow-hidden pb-2"><span className="block origin-bottom-left">Experiences <span className="text-brand-accent-blue">That Matter.</span></span></div>
          </h1>

          <p className="hero-fade font-montserrat text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            We transcend traditional design to build premium, immersive ecosystems. From strategic brand positioning to pixel-perfect interface architecture, we turn vision into digital reality.
          </p>
        </section>

        {/* --- SECTION 2: INTERACTIVE SERVICE ECOSYSTEM --- */}
        <section className="py-32 scroll-up relative flex flex-col items-center border-y border-slate-200/50">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold tracking-tight mb-4">The Innovation Ecosystem</h2>
            <p className="text-slate-500 max-w-lg mx-auto">An interconnected approach where research, design, and technology orbit a single core philosophy.</p>
          </div>

          <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex items-center justify-center my-10">
            
            {/* Core Node */}
            <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center justify-center">
              <span className="font-poppins font-black text-xl tracking-tighter text-brand-blue">SRUSHTI</span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-brand-accent-blue mt-1">Core</span>
            </div>

            {/* Orbit 1 */}
            <div className="absolute w-[70%] h-[70%] border border-slate-200 rounded-full animate-[spin_30s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg animate-[spin_30s_linear_infinite_reverse] hover:scale-110 hover:border-brand-accent-blue transition-all">
                <span className="font-mono text-[9px] font-bold">Branding</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg animate-[spin_30s_linear_infinite_reverse] hover:scale-110 hover:border-brand-accent-blue transition-all">
                <span className="font-mono text-[9px] font-bold">UI/UX</span>
              </div>
            </div>

            {/* Orbit 2 */}
            <div className="absolute w-full h-full border border-dashed border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg animate-[spin_40s_linear_infinite] hover:scale-110 hover:border-brand-accent-blue transition-all">
                <span className="font-mono text-[9px] font-bold">Motion</span>
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg animate-[spin_40s_linear_infinite] hover:scale-110 hover:border-brand-accent-blue transition-all">
                <span className="font-mono text-[9px] font-bold">Strategy</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: PREMIUM CAPABILITIES CARDS --- */}
        <section className="py-32">
          <div className="scroll-up mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-brand-accent-blue mb-4">Our Expertise</h3>
              <h2 className="font-poppins text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Capabilities.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div 
                key={i} 
                className="scroll-up group relative bg-white p-10 rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                onMouseEnter={() => { setCursorVariant('explore'); setCursorText('View'); }}
                onMouseLeave={() => { setCursorVariant('default'); setCursorText(''); }}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-brand-accent-blue mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {cap.icon}
                  </div>
                  <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="font-montserrat text-sm text-slate-500 leading-relaxed mb-8 flex-grow">{cap.desc}</p>
                  
                  <div className="mt-auto">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-brand-accent-blue transition-colors flex items-center gap-2">
                      Explore Capability <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: THE PROCESS TIMELINE --- */}
        <section className="py-32 scroll-up bg-white rounded-3xl border border-slate-200 p-8 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.02)] my-20">
          <div className="text-center mb-24">
            <h2 className="font-poppins text-3xl md:text-5xl font-black tracking-tight mb-6">How We Create.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A meticulous, highly collaborative process designed to eliminate guesswork and deliver extraordinary outcomes.</p>
          </div>

          <div className="process-container relative max-w-4xl mx-auto">
            {/* Center Track Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-slate-100"></div>
            {/* Animated Fill Line */}
            <div className="process-line-fill absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-brand-accent-blue"></div>

            {[
              { step: '01', title: 'Discovery & Research', desc: 'Deep diving into your brand, market, and user needs to establish a rock-solid strategic foundation.' },
              { step: '02', title: 'Strategic Blueprinting', desc: 'Mapping user journeys, defining architecture, and establishing the core narrative direction.' },
              { step: '03', title: 'Design & Prototyping', desc: 'Crafting high-fidelity interfaces and interactive prototypes that bring the strategy to visual life.' },
              { step: '04', title: 'Refinement & Delivery', desc: 'Rigorous testing, aesthetic polishing, and seamless handover of a premium digital ecosystem.' }
            ].map((phase, i) => (
              <div key={i} className={`process-node relative flex items-center justify-between w-full mb-20 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                <div className="w-5/12"></div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-slate-100 rounded-full z-10 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-brand-accent-blue rounded-full"></div>
                </div>

                <div className={`w-5/12 flex flex-col ${i % 2 === 0 ? 'items-start text-left' : 'items-end text-right'}`}>
                  <span className="font-mono text-xs font-bold text-brand-accent-blue tracking-widest mb-2">PHASE {phase.step}</span>
                  <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="font-montserrat text-sm text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: WHY CHOOSE SRUSHTI (COMPARISON) --- */}
        <section className="py-32 scroll-up">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-3xl md:text-5xl font-black tracking-tight mb-4">The Srushti Difference.</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 border-b border-slate-100 bg-slate-50/50">
              <div className="p-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-slate-400">The Industry Standard</div>
              <div className="p-6 text-center font-mono text-xs font-bold uppercase tracking-widest text-brand-accent-blue bg-brand-accent-blue/[0.03]">The Srushti Standard</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {comparisons.map((item, i) => (
                <div key={i} className="grid grid-cols-2 group hover:bg-slate-50 transition-colors">
                  <div className="p-6 text-center flex items-center justify-center">
                    <span className="font-montserrat font-medium text-slate-400 line-through decoration-slate-300">{item.others}</span>
                  </div>
                  <div className="p-6 text-center flex items-center justify-center bg-brand-accent-blue/[0.01] group-hover:bg-brand-accent-blue/[0.03] transition-colors">
                    <span className="font-poppins font-bold text-slate-900">{item.srushti}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 6: ELEGANT STATISTICS --- */}
        <section className="py-20 scroll-up border-y border-slate-200/50 my-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-slate-200/50">
            {[
              { label: 'Projects Delivered', target: '45', suffix: '+' },
              { label: 'Client Satisfaction', target: '100', suffix: '%' },
              { label: 'Design Systems', target: '12', suffix: '' },
              { label: 'Years of Craft', target: '4', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <span className="stat-counter font-poppins text-5xl md:text-6xl font-black text-slate-900 mb-4" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 7: POWERFUL CTA --- */}
        <section className="py-40 scroll-up flex flex-col items-center text-center">
          <h2 className="font-poppins text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-10 max-w-4xl leading-[1.1]">
            Let's Build Something <span className="text-brand-accent-blue">Extraordinary</span> Together.
          </h2>
          
          <Link 
            to="/contact" 
            className="relative overflow-hidden group bg-slate-900 text-white font-poppins font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:bg-brand-accent-blue transition-all duration-500 flex items-center gap-4 hover:scale-105"
            onMouseEnter={() => { setCursorVariant('explore'); setCursorText(''); }}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="relative z-10">Start a Project</span>
            <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </section>

      </div>
    </div>
  );
};

export default Capabilities;