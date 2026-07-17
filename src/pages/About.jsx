import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORT YOUR PROFILE AND MEMORY PHOTOS
import profilePhoto from '../assets/srushti.png';
import mem1 from '../assets/mem-1.jpg';
import mem2 from '../assets/mem-2.jpg';
import mem3 from '../assets/mem-3.jpg';
import mem4 from '../assets/mem-4.jpg';
import mem5 from '../assets/mem-5.jpg';
import mem6 from '../assets/mem-6.jpg';
import mem7 from '../assets/mem-7.jpg';
import mem8 from '../assets/mem-8.jpg';
import mem9 from '../assets/mem-9.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const horizontalRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const terminalEndRef = useRef(null);

  // --- MOUSE TRACKING SPOTLIGHT & 3D TILT ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Spotlight coordinates
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);

      // 3D Tilt calculation (subtle)
      const tiltX = ((clientY / innerHeight) - 0.5) * 15;
      const tiltY = ((clientX / innerWidth) - 0.5) * -15;
      containerRef.current.style.setProperty('--tilt-x', `${tiltX}deg`);
      containerRef.current.style.setProperty('--tilt-y', `${tiltY}deg`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- EASTER EGG: KONAMI CODE ---
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setTheme(prev => prev === 'dark' ? 'light' : 'dark');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- MINI TERMINAL LOGIC (Service Design Focused) ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Srushti.OS v2.0.0 loaded.' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      switch(cmd) {
        case 'help': output = 'Commands: about, skills, process, projects, clear'; break;
        case 'about': output = 'Service Designer & Strategist. I design stories, services, and experiences people truly connect with.'; break;
        case 'skills': output = 'Journey Mapping, Systems Thinking, Qualitative Research, Storytelling, Prototyping.'; break;
        case 'process': output = '1. Discover (Listen)\n2. Define (Synthesize)\n3. Develop (Co-design)\n4. Deliver (Prototype)'; break;
        case 'projects': output = 'Inforens (UX Strategy), Scottish Widows (Financial Wellbeing), Sweet Lies (Inclusive Education).'; break;
        case 'clear': setHistory([]); setInput(''); return;
        default: output = `Command not found: ${cmd}`;
      }
      
      setHistory(prev => [...prev, { type: 'input', text: cmd }, { type: 'output', text: output }]);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Cinematic Opening
      gsap.fromTo(".char-reveal", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, stagger: 0.05, duration: 1, ease: "power4.out", delay: 0.2 }
      );
      
      gsap.fromTo(".grow-line",
        { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "expo.inOut", delay: 0.8 }
      );

      // 2. Timeline Scroll Animation
      const timelineNodes = gsap.utils.toArray('.timeline-node');
      timelineNodes.forEach((node, i) => {
        gsap.fromTo(node,
          { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
          { scrollTrigger: { trigger: node, start: "top 85%" }, opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        );
      });

      // 3. Animated Statistics Counters
      const counters = gsap.utils.toArray('.stat-counter');
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.fromTo(counter, 
          { textContent: 0 }, 
          { scrollTrigger: { trigger: counter, start: "top 90%" }, 
            textContent: target, duration: 2, ease: "power2.out", snap: { textContent: 1 },
            onUpdate: function() { counter.innerHTML = Math.ceil(this.targets()[0].textContent) + (counter.getAttribute('data-suffix') || ''); }
          }
        );
      });

      // 4. Floating Elements (Icons & Images)
      gsap.to(".float-slow", { y: -15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".float-fast", { y: -8, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

      // 5. THE HORIZONTAL SCROLL MEMORY WALL (Your original effect!)
      const wrapper = scrollWrapperRef.current;
      if (wrapper) {
        const totalScroll = wrapper.scrollWidth - window.innerWidth;
        gsap.to(wrapper, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const bgStyle = theme === 'light' ? 'bg-[#F8F9FA] text-brand-blue' : 'bg-[#050505] text-slate-200';
  const glassStyle = theme === 'light' ? 'bg-white/40 border-slate-200/50' : 'bg-white/5 border-white/10';

  return (
    <div 
      ref={containerRef} 
      className={`relative min-h-screen w-full overflow-hidden ${bgStyle} font-montserrat transition-colors duration-1000 selection:bg-brand-accent-blue selection:text-white cursor-none pb-0`}
      style={{ '--mouse-x': '50vw', '--mouse-y': '50vh', '--tilt-x': '0deg', '--tilt-y': '0deg' }}
    >
      
      {/* --- BULLETPROOF SPACER --- */}
      <div className="h-32 w-full block pointer-events-none"></div>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 opacity-40 mix-blend-${theme === 'light' ? 'multiply' : 'screen'}`} style={{ background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(124,58,237,0.12), transparent 40%)` }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${theme === 'light' ? '#00000005' : '#ffffff05'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'light' ? '#00000005' : '#ffffff05'}_1px,transparent_1px)] bg-[size:4rem_4rem]`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* --- SECTION 1: WHO AM I (Glass Card Intro) --- */}
        <section className="min-h-[80vh] flex flex-col justify-center mb-32 relative pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Glass Card Intro */}
            <div className="lg:col-span-7 transform-gpu" style={{ transform: 'rotateX(var(--tilt-x)) rotateY(var(--tilt-y))', transformStyle: 'preserve-3d' }}>
              
              <h1 className={`font-poppins text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 flex flex-wrap ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>
                {'Designing'.split('').map((char, i) => <span key={i} className="char-reveal block">{char}</span>)}
                <span className="w-4"></span>
                {'The'.split('').map((char, i) => <span key={i} className="char-reveal block">{char}</span>)}
                <span className="w-4"></span>
                {'Future.'.split('').map((char, i) => <span key={i} className="char-reveal block text-brand-accent-blue">{char}</span>)}
              </h1>
              
              <div className="grow-line h-[2px] w-full bg-gradient-to-r from-brand-accent-blue to-transparent mb-8 origin-left"></div>

              <div className={`backdrop-blur-xl ${glassStyle} p-8 rounded-2xl shadow-2xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <p className={`text-lg md:text-xl font-light leading-relaxed relative z-10 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                  I have always been drawn to stories—the ones people tell, the ones systems hide, and the ones design can bring to life. From journalism and media to <span className={`font-semibold ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>service design and strategy</span>, my work has grown around one core belief: when you understand people deeply, you can create experiences that feel clearer, kinder, and more meaningful.
                </p>
                
                {/* Animated Keywords */}
                <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                  {['Service Designer', 'UX Strategist', 'Storyteller', 'Systems Thinker'].map((word, i) => (
                    <span key={i} className={`px-4 py-2 text-xs font-mono uppercase tracking-widest ${glassStyle} rounded-full hover:bg-brand-accent-blue hover:text-white transition-all duration-300 hover:scale-105 cursor-none hover:border-brand-accent-blue`}>
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive 3D Profile Image */}
            <div className="lg:col-span-5 flex justify-center float-slow relative group">
              <div className="absolute inset-0 bg-brand-accent-blue/20 blur-[60px] rounded-full group-hover:bg-brand-accent-blue/40 group-hover:scale-125 transition-all duration-700 -z-10"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-brand-accent-blue to-transparent transform-gpu group-hover:rotate-6 transition-transform duration-700 cursor-none">
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-blue relative">
                  <img src={profilePhoto} alt="Srushti" className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent-blue/50 blur-sm -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 2: INTERACTIVE SKILL GALAXY (UX Focused) --- */}
        <section className="py-24 relative flex flex-col items-center justify-center min-h-[70vh]">
          <h2 className={`font-poppins text-3xl font-bold uppercase tracking-widest mb-24 text-center ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>
            Skill <span className="text-brand-accent-blue">Universe</span>
          </h2>

          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center float-fast">
            
            {/* Center Node */}
            <div className={`absolute w-28 h-28 backdrop-blur-md border border-brand-accent-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] z-20 cursor-none hover:scale-110 transition-transform ${glassStyle}`}>
              <span className={`font-mono text-xs font-bold tracking-widest text-center ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>SERVICE<br/>DESIGN</span>
            </div>

            {/* Orbit 1: Strategy */}
            <div className={`absolute w-full h-full border rounded-full animate-[spin_25s_linear_infinite] ${theme === 'light' ? 'border-slate-300' : 'border-white/10'}`}>
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 backdrop-blur-sm border rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite_reverse] hover:bg-brand-accent-blue hover:text-white hover:scale-125 transition-all cursor-none group ${glassStyle}`}>
                <span className="font-mono text-[10px] text-center font-bold">Journey<br/>Mapping</span>
                <div className="absolute top-full mt-2 w-max px-3 py-1 bg-brand-blue text-white text-[9px] rounded opacity-0 group-hover:opacity-100 transition-opacity">Ecosystem Analysis</div>
              </div>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 backdrop-blur-sm border rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite_reverse] hover:bg-brand-accent-blue hover:text-white hover:scale-125 transition-all cursor-none group ${glassStyle}`}>
                <span className="font-mono text-[10px] text-center font-bold">Insight<br/>Synthesis</span>
              </div>
            </div>

            {/* Orbit 2: Execution (Counter-rotating) */}
            <div className={`absolute w-[65%] h-[65%] border rounded-full animate-[spin_18s_linear_infinite_reverse] ${theme === 'light' ? 'border-slate-300' : 'border-white/10'}`}>
              <div className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 backdrop-blur-sm border rounded-full flex items-center justify-center animate-[spin_18s_linear_infinite] hover:bg-brand-accent-blue hover:text-white hover:scale-125 transition-all cursor-none group ${glassStyle}`}>
                <span className="font-mono text-[10px] text-center font-bold">UX<br/>Strategy</span>
              </div>
              <div className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 backdrop-blur-sm border rounded-full flex items-center justify-center animate-[spin_18s_linear_infinite] hover:bg-brand-accent-blue hover:text-white hover:scale-125 transition-all cursor-none group ${glassStyle}`}>
                <span className="font-mono text-[10px] text-center font-bold">Co-Design</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- SECTION 3: THE JOURNEY ROADMAP --- */}
        <section className="py-24 relative">
          <h2 className={`font-poppins text-3xl font-bold uppercase tracking-widest mb-16 text-center ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>
            The <span className="text-brand-accent-blue">Roadmap</span>
          </h2>

          <div className="relative border-l-2 border-brand-accent-blue/30 ml-6 md:ml-12" ref={timelineRef}>
            <div className="absolute top-0 left-[-2px] w-1 h-full bg-gradient-to-b from-brand-accent-blue via-transparent to-transparent origin-top scale-y-0 scroll-line"></div>

            {[
              { year: 'PRESENT', title: 'Inforens', desc: 'UX Strategy & Service Design Internship. Helping a student platform feel as trustworthy as the service behind it.' },
              { year: 'RECENT', title: 'Scottish Widows x GSA', desc: 'Designing income protection for people whose lives do not fit a fixed salary through deep qualitative research.' },
              { year: 'PAST', title: 'Sweet Lies & Bitter Truth', desc: 'Inclusive Education & Editorial Design. Using one biscuit to open up a much bigger story about empire, labour, and identity.' },
              { year: 'ORIGIN', title: 'The Foundation', desc: 'Transitioned from journalism and media to uncovering human-centric insights and building strategic service systems.' }
            ].map((node, i) => (
              <div key={i} className="timeline-node relative pl-12 md:pl-20 py-8 group">
                <div className="absolute top-10 left-[-9px] w-4 h-4 rounded-full bg-white border-2 border-brand-accent-blue group-hover:bg-brand-accent-blue group-hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all duration-300"></div>
                
                <span className="font-mono text-xs font-bold text-brand-accent-blue tracking-widest block mb-2">{node.year}</span>
                <div className={`backdrop-blur-md ${glassStyle} p-6 rounded-xl hover:border-brand-accent-blue transition-colors duration-300 cursor-none shadow-lg group-hover:-translate-y-1 transform`}>
                  <h3 className={`font-poppins text-xl font-bold mb-2 ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>{node.title}</h3>
                  <p className={`font-montserrat text-sm leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: MINI TERMINAL, STATS & RECRUITER HIGHLIGHTS --- */}
        <section className="py-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Built', target: '12', suffix: '+' },
                { label: 'Interviews Conducted', target: '40', suffix: '+' },
                { label: 'Coffees Consumed', target: '999', suffix: '+' },
                { label: 'Design Tools', target: '8', suffix: '' }
              ].map((stat, i) => (
                <div key={i} className={`backdrop-blur-md ${glassStyle} p-6 rounded-xl flex flex-col justify-center items-center text-center group hover:border-brand-accent-blue transition-colors duration-300 cursor-none float-slow shadow-lg`} style={{ animationDelay: `${i * 0.2}s` }}>
                  <span className="stat-counter font-poppins text-4xl md:text-5xl font-black text-brand-accent-blue mb-2" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                  <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${theme === 'light' ? 'text-slate-500 group-hover:text-brand-blue' : 'text-slate-400 group-hover:text-white'}`}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Interactive Terminal */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[350px]">
              <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 font-mono text-[10px] text-slate-500 tracking-widest">guest@srushti-design:~</span>
              </div>
              
              <div className="p-6 font-mono text-xs leading-relaxed text-slate-300 flex-grow overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col gap-2">
                {history.map((cmd, i) => (
                  <div key={i} className={cmd.type === 'input' ? 'text-brand-accent-blue font-bold' : 'text-slate-400'}>
                    {cmd.type === 'input' ? '> ' : ''}{cmd.text.split('\n').map((line, j) => <div key={j}>{line}</div>)}
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-2" ref={terminalEndRef}>
                  <span className="text-brand-accent-blue font-bold">{'>'}</span>
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none flex-grow text-white font-mono placeholder-slate-700"
                    placeholder="Type 'help'..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Things I Love & Why Work With Me */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`backdrop-blur-md ${glassStyle} p-8 rounded-xl shadow-lg`}>
              <h3 className={`font-poppins text-xl font-bold uppercase tracking-widest mb-6 ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>Things I <span className="text-brand-accent-blue">Love</span></h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: '📚', text: 'Storytelling' },
                  { icon: '☕', text: 'Coffee' },
                  { icon: '🎨', text: 'Design Systems' },
                  { icon: '🌍', text: 'Human Behavior' },
                  { icon: '📸', text: 'Photography' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === 'light' ? 'border-slate-200 bg-white' : 'border-white/10 bg-white/5'} hover:scale-110 hover:border-brand-accent-blue transition-all duration-300 cursor-none group float-fast`} style={{ animationDelay: `${i * 0.15}s` }}>
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className={`font-mono text-xs font-bold tracking-widest ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`backdrop-blur-md ${glassStyle} p-8 rounded-xl shadow-lg`}>
              <h3 className={`font-poppins text-xl font-bold uppercase tracking-widest mb-6 ${theme === 'light' ? 'text-brand-blue' : 'text-white'}`}>Why Work With <span className="text-brand-accent-blue">Me?</span></h3>
              <div className="flex flex-wrap gap-3">
                {['Empathetic Listener', 'Systems Thinker', 'Fast Learner', 'Adaptable', 'Creative Problem Solver'].map((strength, i) => (
                  <div key={i} className="timeline-node px-4 py-2 bg-brand-accent-blue/10 border border-brand-accent-blue/30 rounded-md font-mono text-xs uppercase tracking-widest text-brand-accent-blue hover:bg-brand-accent-blue hover:text-white transition-all duration-300 hover:scale-105 cursor-none">
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>

      {/* --- SECTION 5: CINEMATIC HORIZONTAL SCROLL WALL (Your original content perfectly integrated) --- */}
      <section ref={horizontalRef} className="relative w-full h-screen overflow-hidden flex items-center bg-brand-blue z-20 border-t border-white/10 mt-24">
        
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div ref={scrollWrapperRef} className="flex items-center gap-16 md:gap-24 px-[15vw] h-full w-max">
          
          <div className="relative w-64 md:w-80 -mt-20 transform -rotate-3 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <span className="absolute -top-3 -left-3 bg-white text-brand-blue font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 z-10 shadow-lg">[ MUMBAI, 2024 ]</span>
            <img src={mem1} alt="Memory 1" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-56 md:w-[22rem] mt-48 transform rotate-2 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <span className="absolute -top-3 -left-3 bg-white text-brand-blue font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 z-10 shadow-lg">[ LOCATION, YEAR ]</span>
            <img src={mem2} alt="Memory 2" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2 grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>

          <div className="relative w-80 md:w-[600px] z-20 mx-12">
            <h3 className="font-poppins font-black text-4xl md:text-6xl text-white leading-[1.1] uppercase tracking-tighter mix-blend-difference">
              "We don't remember days, <br/><span className="text-brand-accent-blue">we remember moments.</span>"
            </h3>
          </div>

          <div className="relative w-48 md:w-64 -mt-64 transform rotate-6 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem3} alt="Memory 3" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-72 md:w-96 transform -rotate-1 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem4} alt="Memory 4" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-64 md:w-80 mt-32 transform rotate-3 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem5} alt="Memory 5" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-56 md:w-72 -mt-24 transform -rotate-4 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem6} alt="Memory 6" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2 grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>

          <div className="relative w-64 md:w-80 mt-12 transform rotate-1 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem7} alt="Memory 7" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-48 md:w-64 mt-64 transform -rotate-3 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group">
            <img src={mem8} alt="Memory 8" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

          <div className="relative w-72 md:w-[28rem] -mt-32 transform rotate-2 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-500 ease-out cursor-none group mr-[15vw]">
            <span className="absolute -top-3 -left-3 bg-white text-brand-blue font-mono text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 z-10 shadow-lg">[ LOCATION, YEAR ]</span>
            <img src={mem9} alt="Memory 9" className="w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-2" />
          </div>

        </div>
      </section>

      {/* Internal CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(400px); opacity: 0; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default About;