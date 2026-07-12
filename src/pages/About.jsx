import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
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
    <div ref={pageRef} className="max-w-6xl mx-auto px-6 md:px-24 py-16">
      <h1 className="animate-up font-poppins text-5xl md:text-7xl font-bold tracking-tight text-brand-blue leading-tight mb-16">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Main Narrative */}
        <div className="md:col-span-8 space-y-6 font-montserrat text-slate-600 font-light text-lg leading-relaxed animate-up">
          <p>
            I have always been drawn to stories - the ones people tell, the ones systems hide, and the ones design has the power to bring into the light. Over time, that curiosity has grown into a practice shaped by service design, research, storytelling, and strategy, all grounded in one belief: when you understand people deeply, you can create experiences that feel more human, more useful, and more meaningful[cite: 3].
          </p>
          <p>
            I am currently completing an MDes in Design Innovation and Service Design at Glasgow School of Art, where I work across research, systems thinking, participatory design, and experience design[cite: 3]. My work often begins with listening: listening to what people say, what they hesitate to say, and what structures reveal once you start paying closer attention[cite: 3].
          </p>
          <p>
            Before service design, my background in media, communication, and creative strategy taught me how to think about audience, narrative, and the emotional clarity of an idea[cite: 3]. That background still shapes how I work today[cite: 3]. I care not only about whether something functions well, but whether it feels understandable, trustworthy, and alive to the people moving through it[cite: 3].
          </p>
          <p>
            A lot of my practice sits between systems and stories[cite: 3]. I enjoy taking something layered, abstract, or messy and making it easier to follow without flattening what makes it meaningful[cite: 3]. Whether I am working on financial wellbeing, educational experiences, or student journeys, I am always trying to create something that meets people with more care and more clarity[cite: 3].
          </p>
          <p>
            I am especially interested in inclusive services, education, cultural experiences, financial wellbeing, and ethical design[cite: 3]. These are the areas where design can do more than make things look better or move faster; it can help people feel less lost, less excluded, and more supported[cite: 3].
          </p>
          <p>
            Outside the work itself, I bring warmth and curiosity into the way I design[cite: 3]. I am observant, bubbly, and deeply interested in people, which means I often notice details that reveal how an experience actually feels from the inside[cite: 3]. That emotional attentiveness is not separate from my practice it is part of it[cite: 3].
          </p>
        </div>

        {/* Side Details */}
        <div className="md:col-span-4 animate-up">
          <div className="sticky top-32 p-8 bg-slate-100 rounded-sm">
            <h3 className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">Details[cite: 3]</h3>
            <ul className="space-y-4 font-montserrat text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-brand-accent-blue mr-3">&bull;</span>
                Based in Glasgow, United Kingdom[cite: 3].
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent-blue mr-3">&bull;</span>
                MDes Design Innovation and Service Design, Glasgow School of Art[cite: 3].
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent-blue mr-3">&bull;</span>
                Background in Mass Communication and Advertising[cite: 3].
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent-blue mr-3">&bull;</span>
                Interests include inclusive services, education design, cultural experiences, financial wellbeing, and ethical technology[cite: 3].
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;