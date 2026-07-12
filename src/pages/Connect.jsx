import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Connect = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate-up", {
        y: 30, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out"
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-4xl mx-auto px-6 md:px-24 py-16 min-h-[60vh] flex flex-col justify-center">
      <h1 className="animate-up font-poppins text-5xl md:text-7xl font-bold tracking-tight text-brand-blue leading-tight mb-8">
        Connect With Me[cite: 3]
      </h1>

      <div className="animate-up space-y-6 font-montserrat text-slate-600 font-light text-lg leading-relaxed mb-12">
        <p>
          I am always happy to connect over service design, storytelling, research, strategy, and meaningful collaborations[cite: 3]. Whether it is a project, an opportunity, or simply a thoughtful conversation, I would love to hear from you[cite: 3].
        </p>
        <p>
          The work I care most about usually begins with a question, a challenge, or a moment of uncertainty[cite: 3]. If you are building something and want to bring more clarity, more humanity, or a stronger sense of meaning into it, I would be glad to connect[cite: 3].
        </p>
        <p>
          I am especially interested in conversations around inclusive services, education, cultural experiences, financial wellbeing, and human-centred systems[cite: 3]. I am also always open to meeting people who care deeply about design, storytelling, and the kinds of experiences that stay with people long after they have moved through them[cite: 3].
        </p>
      </div>

      <div className="animate-up p-8 bg-slate-100 rounded-sm border-l-4 border-brand-accent-blue">
        <ul className="space-y-4 font-mono text-sm text-brand-blue font-semibold tracking-wide">
          <li>Srushti Pagariya[cite: 3]</li>
          <li className="text-slate-500 font-normal">Glasgow, United Kingdom[cite: 3]</li>
          <li><a href="mailto:srushtisachinpagariya@gmail.com" className="hover:text-brand-accent-blue transition-colors">srushtisachinpagariya@gmail.com[cite: 3]</a></li>
          <li><a href="tel:+447344274538" className="hover:text-brand-accent-blue transition-colors">+44 7344274538[cite: 3]</a></li>
          <li className="pt-4 flex gap-6 uppercase text-xs tracking-widest">
            <a href="#" className="text-brand-accent-blue hover:text-brand-blue transition-colors">LinkedIn &rarr;[cite: 3]</a>
            <a href="/resume.pdf" target="_blank" className="text-brand-accent-blue hover:text-brand-blue transition-colors">View CV &rarr;[cite: 3]</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Connect;