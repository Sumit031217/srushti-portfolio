import React from 'react';

const Skills = () => {
  // Srushti's toolkit extracted from her CV
  const toolsets = [
    {
      category: "Service Design",
      items: ["Service Blueprinting", "Journey Mapping", "Stakeholder Mapping", "Participatory Co-design", "Rapid Prototyping"]
    },
    {
      category: "Research Methods",
      items: ["Mixed-Methods Research", "Qualitative Interviews", "Insight Synthesis", "Opportunity Framing", "Usability Testing"]
    },
    {
      category: "Strategy Tools",
      items: ["Figma", "Canva", "Adobe Illustrator", "Workshop Facilitation", "Narrative Design"]
    }
  ];

  return (
    <section className="py-24 bg-slate-100 border-y border-slate-200 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-brand-green mb-2">// Toolkit Alignment</h3>
          <h4 className="font-poppins text-3xl md:text-5xl font-bold text-brand-blue">Capabilities & Methods</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {toolsets.map((set, idx) => (
            <div key={idx} className="space-y-4">
              <h5 className="font-poppins text-lg font-bold text-brand-blue border-b-2 border-slate-300 pb-2">
                {set.category}
              </h5>
              <ul className="space-y-2">
                {set.items.map((item, iIdx) => (
                  <li key={iIdx} className="font-montserrat text-sm text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-accent-blue rounded-full mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;