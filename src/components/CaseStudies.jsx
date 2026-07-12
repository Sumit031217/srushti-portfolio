import React from 'react';

const CaseStudies = () => {
  const projects = [
    {
      client: "Lloyds Banking Group",
      title: "Income Protection Service Innovation",
      timeline: "2025 – 2026",
      tag: "Financial Wellbeing",
      description: "Led mixed-methods user research to uncover human attitudes toward income insurance, generating synthesis insights that directly shaped strategic service blueprints to challenge deep system assumptions[cite: 2]."
    },
    {
      client: "National Trust for Scotland",
      title: "Tea Heritage Educational Narrative Design",
      timeline: "2025 – 2026",
      tag: "Inclusive Education",
      description: "Co-designed an educational print framework for secondary school students tracing global tea trade origins[cite: 2]. Prioritized physical formats to prompt critical reflections on cultural identity and accessibility[cite: 2]."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-24 max-w-6xl mx-auto border-t border-slate-200">
      <div className="mb-16">
        <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-accent-blue mb-2">// Selected Deliverables</h3>
        <h4 className="font-poppins text-3xl md:text-5xl font-bold text-brand-blue">System Case Studies</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono uppercase bg-slate-100 text-slate-600 px-3 py-1 rounded">
                  {project.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">{project.timeline}</span>
              </div>
              <h5 className="font-poppins text-sm text-brand-green uppercase font-semibold tracking-wider mb-1">
                {project.client}
              </h5>
              <h6 className="font-poppins text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-accent-blue transition-colors">
                {project.title}
              </h6>
              <p className="font-montserrat text-slate-600 font-light text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-mono font-semibold text-brand-blue group-hover:translate-x-2 transition-transform duration-300">
              EXPLORE BLUEPRINTS &rarr;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// This is the line that was missing!
export default CaseStudies;