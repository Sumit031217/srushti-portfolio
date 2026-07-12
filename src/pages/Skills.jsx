import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
  const pageRef = useRef(null);

  const skillCategories = [
    {
      title: "Service Design",
      description: "I design journeys, systems, and touchpoints that work better for both people and organisations. I am especially interested in services that need to feel clearer, more inclusive, and more trustworthy in moments of uncertainty.",
      items: ["Journey Mapping", "Service Blueprinting", "Stakeholder Mapping", "Participatory Co-design", "Systems Thinking", "Opportunity Framing", "Rapid Prototyping", "Usability Thinking"]
    },
    {
      title: "Research and Insight",
      description: "Research is where most of my work begins. I use it to understand behaviour, surface tension, identify patterns, and build stronger design direction from what people actually experience rather than what we assume they need.",
      items: ["Mixed-Methods Research", "Qualitative Interviews", "Surveys", "Desk Research", "Insight Synthesis", "Problem Framing", "Testing with Participants"]
    },
    {
      title: "Strategy and Storytelling",
      description: "I care deeply about how ideas are framed, communicated, and carried through an experience. My background in communication and creative strategy helps me shape narratives that are not only clear, but emotionally resonant and purposeful.",
      items: ["Narrative Design", "Content Strategy", "Brand Thinking", "Copywriting", "Workshop Facilitation", "Presentation Storytelling", "Concept Development"]
    },
    {
      title: "Design and Visual Communication",
      description: "I use visual thinking to make ideas easier to understand, navigate, and remember. Whether through layouts, decks, diagrams, or digital interfaces, I aim to create outputs that feel both thoughtful and legible.",
      items: ["Figma", "Miro", "Canva", "Adobe Illustrator", "Adobe Photoshop", "Editorial Layout Thinking", "Video Production and Editing", "Visual Storytelling"]
    },
    {
      title: "Communication and Creative Strengths",
      description: "My earlier work in media, strategy, and communication still shapes how I approach design. It taught me how to read audiences, build clarity, shape messages, and work across different kinds of teams and formats.",
      items: ["Audience Awareness", "Brand Communication", "Campaign Thinking", "Storytelling", "Content Development", "Interviewing", "Editorial Judgment", "Creative Direction Support", "Cross-functional Collaboration"]
    },
    {
      title: "How I Work",
      description: "The way I work matters as much as the methods I use. I try to bring thoughtfulness, openness, and emotional awareness into every project, especially when the work is complex or sensitive.",
      items: ["Curiosity", "Empathy", "Collaboration", "Adaptability", "Mentoring", "Active Listening", "Communication", "Initiative", "Willingness to Learn"]
    }
  ];

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
      <div className="animate-up mb-16 max-w-3xl">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold tracking-tight text-brand-blue leading-tight mb-6">
          Skills
        </h1>
        <p className="font-montserrat text-xl text-slate-600 font-light leading-relaxed">
          My work brings together service design, insight, communication, and strategy. I move between research and structure, between detail and direction, and between what a service does and how it feels to the people inside it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="animate-up">
            <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4 border-b border-slate-200 pb-4">
              {category.title}
            </h3>
            <p className="font-montserrat text-sm text-slate-600 font-light leading-relaxed mb-6">
              {category.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-slate-500 uppercase tracking-wider">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-accent-blue mr-2">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;