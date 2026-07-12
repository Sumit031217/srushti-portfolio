import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="min-h-[85vh] flex flex-col justify-center px-6 md:px-24 max-w-6xl mx-auto pt-20">
      <div className="space-y-4">
        <span className="fade-in inline-block px-3 py-1 bg-green-100 text-brand-green text-xs font-mono rounded-full uppercase tracking-widest font-medium">
          Available for Opportunities // London & Glasgow
        </span>
        <h1 className="fade-in font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue leading-none">
          Srushti Pagariya
        </h1>
        <h2 className="fade-in font-poppins text-xl md:text-3xl text-gray-500 font-light mt-2">
          Service Designer &bull; UX Researcher &bull; Creative Strategist
        </h2>
      </div>

      <div className="fade-in mt-12 max-w-3xl border-l-4 border-brand-accent-blue pl-6 md:pl-8 py-2">
        <p className="font-montserrat text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          Human-centred service designer trained to listen carefully, surface what matters, and design services that genuinely work for people. Currently completing an MDes at <span className="font-medium text-brand-blue">Glasgow School of Art</span>, leading live system transformations for Lloyds Banking Group and the National Trust for Scotland.
        </p>
      </div>

      {/* Anchor Tag Details */}
      <div className="fade-in flex flex-wrap gap-6 mt-10 font-mono text-xs uppercase tracking-wider text-slate-500">
        <a href="mailto:srushtisachinpagariya@gmail.com" className="hover:text-brand-accent-blue transition-colors">&rarr; srushtisachinpagariya@gmail.com</a>
        <a href="#" className="hover:text-brand-accent-blue transition-colors">&rarr; LinkedIn</a>
        <a href="#" className="hover:text-brand-accent-blue transition-colors">&rarr; View Works</a>
      </div>
    </section>
  );
};

export default Hero;