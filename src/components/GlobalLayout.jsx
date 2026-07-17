import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

export const GlobalLayout = ({ children }) => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. LENIS SMOOTH SCROLLING (60 FPS Inertia)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // 2. MAGNETIC GSAP CURSOR
  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      // Primary dot follows instantly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      // Trailing circle has a slight elastic delay
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power4.out"
      });
    };
    const handleHover = () => {
        gsap.to(followerRef.current, {
          scale: 1.8, // A tight, precise lens size
          backgroundColor: "#ffffff", // Pure white...
          mixBlendMode: "difference", // ...forces a perfect, sharp inversion of whatever is behind it
          borderColor: "transparent", // Removes the ring for a clean dot
          duration: 0.3,
          ease: "power3.out"
        });
        // Shrink the inner dot away cleanly
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2 }); 
      };
  
      const handleHoverOut = () => {
        gsap.to(followerRef.current, {
          scale: 1,
          backgroundColor: "transparent",
          mixBlendMode: "normal",
          borderColor: "rgba(124, 58, 237, 0.5)", // Brings back your purple outline
          duration: 0.3,
          ease: "power3.out"
        });
        // Bring the inner dot back
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2 }); 
      };
    window.addEventListener('mousemove', moveCursor);

    // Attach hover effects to all interactive elements
    const interactives = document.querySelectorAll('a, button, input, .cursor-pointer, .hover-target');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, [isLoading]); // Re-bind when loading finishes

  // 3. CINEMATIC PRELOADER SEQUENCE
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false)
    });

    // Animate the text in
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    })
    // Hold it for a moment of suspense
    .to({}, { duration: 0.8 })
    // Slice the preloader up and away
    .to(preloaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
    });
  }, []);

  return (
    <>
      {/* GLOBAL NOISE GRAIN (Premium Texture) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      {/* CUSTOM CURSOR */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-accent-blue rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-brand-accent-blue/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
      />

      {/* CINEMATIC PRELOADER */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 bg-brand-blue z-[9998] flex items-center justify-center flex-col"
      >
        <div className="overflow-hidden">
          <h1 
            ref={textRef} 
            className="text-white font-poppins font-black text-4xl md:text-6xl tracking-[0.2em] uppercase translate-y-full opacity-0"
          >
            Srushti <span className="text-brand-accent-blue">Pagariya</span>
          </h1>
        </div>
        <div className="absolute bottom-12 overflow-hidden">
          <p className="text-slate-400 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">
            Experience Loading
          </p>
        </div>
      </div>

      {/* MAIN APP CONTENT */}
      <main className="relative w-full min-h-screen">
        {children}
      </main>
    </>
  );
};