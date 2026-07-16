import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORTS FOR MEMORY WALL
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
  const pageRef = useRef(null);
  
  // MASONRY DATA ENGINE: Mixing real photos with interactive Data Visualizations
  const col1 = [
    { type: 'image', src: mem1, id: 'DAT-01' },
    { type: 'viz', variant: 'sparkline' },
    { type: 'image', src: mem2, id: 'DAT-02' },
    { type: 'image', src: mem3, id: 'DAT-03' }
  ];
  
  const col2 = [
    { type: 'image', src: mem4, id: 'DAT-04' },
    { type: 'image', src: mem5, id: 'DAT-05' },
    { type: 'viz', variant: 'donut' },
    { type: 'image', src: mem6, id: 'DAT-06' }
  ];
  
  const col3 = [
    { type: 'viz', variant: 'radar' },
    { type: 'image', src: mem7, id: 'DAT-07' },
    { type: 'image', src: mem8, id: 'DAT-08' },
    { type: 'image', src: mem9, id: 'DAT-09' }
  ];

  const allColumns = [col1, col2, col3];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate-up", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out"
      });
      
      // Desktop Parallax for the masonry columns
      if (window.innerWidth > 768) {
        gsap.utils.toArray('.parallax-col').forEach((col, i) => {
          const isMiddle = i === 1;
          gsap.fromTo(col,
            { y: isMiddle ? 100 : -50 },
            {
              y: isMiddle ? -100 : 50,
              ease: "none",
              scrollTrigger: {
                trigger: ".memory-ecosystem",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
              }
            }
          );
        });
      }
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // RENDER ENGINE FOR THE NODES
  const renderNode = (item, idx) => {
    if (item.type === 'image') {
      return (
        <div key={idx} className="relative bg-white p-3 md:p-4 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-accent-blue/40 group hover-scan">
          {/* Tech Spec Header */}
          <div className="flex justify-between items-center mb-3 px-2">
            <span className="font-mono text-[10px] text-slate-400 group-hover:text-brand-accent-blue transition-colors uppercase tracking-widest">{item.id} // ARTIFACT</span>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#E55039] transition-colors duration-500 delay-75"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-accent-blue transition-colors duration-500"></span>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg bg-slate-50">
            {/* h-auto GUARANTEES ZERO CROPPING REGARDLESS OF DIMENSIONS */}
            <img src={item.src} className="w-full h-auto object-contain" alt={item.id} />
            
            {/* Animated Laser Scan Line Overlay */}
            <div className="scan-line absolute left-0 w-full h-[2px] bg-brand-accent-blue shadow-[0_0_15px_3px_#7c3aed] z-10 pointer-events-none opacity-0"></div>
            
            {/* UI Corner Targeting Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-white transition-colors z-10 drop-shadow-md"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-white transition-colors z-10 drop-shadow-md"></div>
          </div>
        </div>
      );
    }

    if (item.variant === 'sparkline') {
      return (
        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner flex flex-col justify-between h-56 relative overflow-hidden group cursor-none">
          <div className="absolute top-0 right-0 w-20 h-20 bg-brand-accent-blue/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150"></div>
          <div className="flex justify-between items-center w-full relative z-10">
            <span className="font-mono text-[10px] text-brand-accent-blue font-bold tracking-widest">VIZ-01</span>
            <svg className="w-4 h-4 text-brand-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
          </div>
          <div className="w-full flex-grow flex items-end pb-4 relative z-10">
            <svg viewBox="0 0 100 40" className="w-full h-16 stroke-brand-accent-blue fill-none overflow-visible" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,35 Q10,10 25,25 T50,15 T75,25 T100,5" className="drop-shadow-[0_4px_6px_rgba(124,58,237,0.3)] stroke-dasharray-[200] stroke-dashoffset-[200] group-hover:animate-draw" />
            </svg>
          </div>
          <div className="relative z-10">
            <h4 className="font-poppins text-sm font-bold text-brand-blue">Creative Resonance</h4>
            <p className="font-montserrat text-[10px] text-slate-500 mt-1">Mapping moments of high inspiration.</p>
          </div>
        </div>
      );
    }

    if (item.variant === 'donut') {
      return (
        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner flex flex-col justify-between h-64 relative overflow-hidden group cursor-none">
          <div className="flex justify-between items-center w-full mb-2">
            <span className="font-mono text-[10px] text-brand-accent-blue font-bold tracking-widest">VIZ-02</span>
            <span className="text-[9px] font-mono text-slate-400 bg-white px-2 py-1 border border-slate-200 rounded">ENERGY</span>
          </div>
          <div className="w-full flex-grow flex items-center justify-center relative">
            <svg viewBox="0 0 100 100" className="w-28 h-28 transform -rotate-90 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#e2e8f0" strokeWidth="12" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#7c3aed" strokeWidth="12" strokeDasharray="220" strokeDashoffset="120" className="opacity-90 transition-all duration-1000 group-hover:stroke-dashoffset-[80]" />
              <circle cx="50" cy="50" r="35" fill="transparent" stroke="#cbd5e1" strokeWidth="12" strokeDasharray="220" strokeDashoffset="180" className="transition-all duration-1000 group-hover:stroke-dashoffset-[150]" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-poppins text-xs font-bold text-brand-blue">100%</div>
          </div>
          <div className="text-center mt-2">
            <h4 className="font-poppins text-sm font-bold text-brand-blue">Energy Input</h4>
          </div>
        </div>
      );
    }

    if (item.variant === 'radar') {
      return (
        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner flex flex-col justify-between h-72 relative overflow-hidden group cursor-none">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="font-mono text-[10px] text-brand-accent-blue font-bold tracking-widest">VIZ-03</span>
          </div>
          <div className="w-full flex-grow flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cbd5e1_1px,transparent_1px)] bg-[size:12px_12px] opacity-30"></div>
            <svg viewBox="0 0 100 100" className="w-36 h-36 fill-brand-accent-blue/10 stroke-brand-accent-blue/40 group-hover:stroke-brand-accent-blue transition-colors duration-700 relative z-10">
              <polygon points="50,10 90,40 75,90 25,90 10,40" strokeWidth="1" />
              <polygon points="50,25 75,45 65,75 35,75 25,45" strokeWidth="2" fill="currentColor" className="text-brand-accent-blue/30 group-hover:text-brand-accent-blue/60 group-hover:scale-105 origin-center transition-all duration-700" />
              <line x1="50" y1="50" x2="50" y2="10" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="50" y1="50" x2="90" y2="40" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="50" y1="50" x2="75" y2="90" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="50" y1="50" x2="25" y2="90" strokeWidth="1" strokeDasharray="2,2"/>
              <line x1="50" y1="50" x2="10" y2="40" strokeWidth="1" strokeDasharray="2,2"/>
            </svg>
          </div>
          <div className="text-center mt-4 relative z-10">
            <h4 className="font-poppins text-sm font-bold text-brand-blue">Skill Ecosystem</h4>
            <p className="font-montserrat text-[10px] text-slate-500 mt-1">Balancing intuition with logic.</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      
      {/* INJECTED CSS FOR VISUALIZATION ANIMATIONS */}
      <style>{`
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .group:hover .group-hover\\:animate-draw {
          animation: drawLine 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes scanline {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .hover-scan:hover .scan-line {
          animation: scanline 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <h1 className="animate-up font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue leading-tight mb-16 border-b border-slate-200 pb-8">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        
        <div className="md:col-span-8 space-y-8 font-montserrat text-slate-700 font-light text-lg leading-relaxed animate-up">
          <p>
            I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design can bring to life. That curiosity has shaped my journey from media, communication, and strategy into service design, where I found a way to connect research, storytelling, and human-centred thinking. I am currently completing my MDes in Design Innovation and Service Design at Glasgow School of Art, with a practice rooted in making complex experiences feel clearer, kinder, and more meaningful.
          </p>
          <p>
            What draws me most to design is the space between people and the systems they move through. I enjoy listening closely, noticing what is often left unsaid, and shaping journeys that feel more intuitive, thoughtful, and trustworthy. My background in creative strategy and communication still shapes how I work, so I am always thinking not only about function, but also about feeling, clarity, and connection.
          </p>
          <p>
            Outside of design, I find joy in the little things that make life feel full. I love being fed and feeding others, so cooking has always been one of my favourite ways to care. I love taking photographs of people, beautiful things, and nature, and I love travelling with a dream of grocery shopping across the world with the same wide smile I carry everywhere. When I feel overwhelmed or emotional, I sometimes write Hindi poems, plant new trees, and quietly watch them grow.
          </p>

          <h2 className="font-poppins text-2xl font-bold text-brand-blue pt-4 border-t border-slate-100">
            Leadership
          </h2>
          
          <p>
            Leadership has always been one of the ways I participate in the spaces I care about. I represented Glasgow School of Art’s Service Design at a Winter School for Environmental and Sustainable Design with students from nine different countries, and I currently serve as both a Student Representative Council member and Class Representative for my master’s programme, helping voice peer concerns and support change. Earlier, during my bachelor’s, I co-led the PR team for one of the biggest intercollegiate mass media festivals, communicating with over 500 students while helping manage events, coordination, and the experience as a whole.
          </p>
        </div>

        <div className="md:col-span-4 animate-up">
          <div className="sticky top-32 p-8 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-accent-blue/10 hover:border-brand-accent-blue/30 transition-all duration-500 rounded-2xl">
            <h3 className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-brand-accent-blue mb-6">
              Quick Facts
            </h3>
            <ul className="space-y-4 font-montserrat text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </span>
                Based in Glasgow, UK
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6.5"></path></svg>
                </span>
                MDes Design Innovation & Service Design, GSA
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                </span>
                Background in Mass Comm & Advertising
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </span>
                Student Representative Council & Class Rep
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- ELITE EXPERIENCE ECOSYSTEM (VISUALIZATION + MASONRY) --- */}
      <div className="memory-ecosystem relative mt-40 pt-16 border-t border-slate-200">
        
        {/* Background Neural Pathway SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-start justify-center overflow-hidden">
           <svg className="w-[120%] h-full min-h-[1000px]" preserveAspectRatio="none" viewBox="0 0 1000 1000">
              <path d="M 100,0 C 300,200 800,300 500,500 C 200,700 700,800 900,1000" fill="none" stroke="#7c3aed" strokeWidth="3" strokeDasharray="12 12" />
              <path d="M 900,0 C 700,200 200,300 500,500 C 800,700 300,800 100,1000" fill="none" stroke="#E55039" strokeWidth="2" strokeDasharray="6 6" className="opacity-50" />
           </svg>
        </div>

        <div className="relative z-10 mb-20 flex flex-col items-center text-center">
          <span className="px-3 py-1 bg-brand-accent-blue/10 text-brand-accent-blue text-[10px] font-mono uppercase tracking-widest font-bold rounded-sm mb-4">
            Data Set: Artefacts
          </span>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-brand-blue mb-4">
            The Experience Ecosystem
          </h2>
          <p className="font-montserrat text-slate-500 max-w-2xl text-base md:text-lg font-light">
            Memories aren't just photos. They are data points of human experience, observation, and growth.
          </p>
        </div>

        {/* FLEX MASONRY LAYOUT - NATURALLY PRESERVES ASPECT RATIOS WITHOUT CROPPING */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 lg:gap-10 pb-24">
          
          {/* Column 1 */}
          <div className="parallax-col flex-1 flex flex-col gap-6 lg:gap-10">
            {col1.map((item, idx) => renderNode(item, idx))}
          </div>

          {/* Column 2 */}
          <div className="parallax-col flex-1 flex flex-col gap-6 lg:gap-10 mt-0 md:mt-20">
            {col2.map((item, idx) => renderNode(item, idx))}
          </div>

          {/* Column 3 */}
          <div className="parallax-col flex-1 flex flex-col gap-6 lg:gap-10 mt-0 md:mt-10">
            {col3.map((item, idx) => renderNode(item, idx))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;