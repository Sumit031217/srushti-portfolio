import React, { useLayoutEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- FULL PROJECT DATA ENGINE ---
const projectData = {
  "scottish-widows": {
    title: "Scottish Widows x GSA",
    tag: "Service Design / Financial Wellbeing / Live Client Project",
    heroSubtitle: "Exploring how income protection can be understood, communicated, and experienced in a more human and meaningful way.",
    heroCopy: "In this live client project at Glasgow School of Art, we worked with Lloyds Banking Group to explore how protection services could feel more understandable, relevant, and human. After looking at the wider protection landscape, we narrowed our focus to income protection because it felt especially connected to uncertainty, changing work patterns, and the kinds of futures many people are trying to navigate today. Working collaboratively across research, interviews, synthesis, and prototyping, we wanted to understand not only what people knew about income protection, but why it so often felt distant, unclear, or difficult to act on.",
    quickFacts: [
      "Project type: Live client academic project",
      "Client: Lloyds Banking Group / Scottish Widows",
      "Duration: Academic term project",
      "Team: Group project",
      "Role: Collaborative work across research, interviews, synthesis, opportunity framing, and prototype development, with a particularly strong contribution in idea generation and creative thinking",
      "Focus: Income protection service journey",
      "Core methods: Public interviews, surveys, desk research, journey mapping, stakeholder mapping, service blueprinting, prototyping"
    ],
    image1: { text: "[ Polished project cover image with refined title layout, subtle financial interface crop, and one simple journey line or flow graphic. ]", caption: "A service design project focused on making income protection feel clearer, more relevant, and easier to trust." },
    brief: "The project began with a broad question around protection, but it quickly became clear that income protection carried a particular kind of tension. For many people, it sat somewhere between something important and something they had never fully seen themselves needing. The challenge was to understand what created that distance, what emotional and practical barriers shaped people’s responses, and how the experience could feel more supportive from the very beginning.",
    image2: { text: "[ Decision visual showing all protection categories explored first, then the narrowing into income protection, with reasons for choosing it. ]", microcopy: ["Starting point: Wider protection landscape", "Focus area: Income protection", "Why this area mattered most"], caption: "We began broadly, then narrowed our focus to the area that felt most relevant, emotionally loaded, and in need of clearer communication." },
    approach: "This was a fully collaborative group project, so the work moved across the whole process together rather than through fixed individual roles. We used exploratory design methods to understand the space first, then gradually built a clearer direction through research, mapping, synthesis, and prototyping. My role was especially strong in the idea generation stage, where I helped shape how insights could turn into more thoughtful and engaging service directions.",
    approachBullets: [
      "Explored the wider protection landscape before narrowing the focus.",
      "Conducted public interviews, desk research, and digital surveys.",
      "Built user flows, journey maps, stakeholder maps, and service blueprints.",
      "Synthesised findings into patterns, themes, and opportunity areas.",
      "Translated insights into a redesigned website journey prototype."
    ],
    image3: { text: "[ Process collage with interview notes, survey snapshots, stakeholder map, and journey map or blueprint. ]", microcopy: ["Interviews", "Survey patterns", "Stakeholder landscape", "Service journey"], caption: "The research helped us move from a broad financial topic to a much more human understanding of hesitation, relevance, and trust." },
    insights: [
      "Many people did not reject income protection. They simply did not see themselves in it.",
      "Trust was shaped as much by tone and framing as by information.",
      "In financial conversations, pauses and discomfort often revealed as much as direct answers."
    ],
    image4: { text: "[ One clean journey map or service blueprint with highlighted friction points. ]", caption: "Journey mapping and blueprinting helped us see where confusion, hesitation, and trust gaps were shaping the experience." },
    output: "The final output moved beyond insight gathering into a clearer service direction and a more human-facing prototype. Rather than simply explaining income protection better, the work aimed to make the experience feel easier to recognise, easier to trust, and easier to move through.",
    outputBullets: [
      "Research synthesis",
      "Rationale for choosing income protection as the focus",
      "Opportunity areas",
      "User flow and service journey thinking",
      "Service blueprint and journey framework",
      "Redesigned website journey prototype"
    ],
    image5: { text: "[ High-quality still from the website journey prototype showing a clearer onboarding, explanation, or decision-support moment. ]", microcopy: ["Prototype still", "Redesigned journey", "Clarity before commitment"], caption: "The prototype translated research into a clearer website journey that focused on relevance, support, and trust at key decision points." },
    outcome: "The project reframed income protection as more than a communication problem. It showed that the experience depends on whether people can recognise their own lives in the service, feel emotionally understood, and trust what they are being asked to consider. It also showed how financial wellbeing can be designed with more care when clarity and empathy are treated as part of the service itself.",
    outcomeBullets: [
      "Individual: Made the service feel easier to understand, relate to, and act on.",
      "Organisation: Highlighted where communication and experience design could better build trust.",
      "Wider impact: Opened a more accessible way of thinking about financial protection and vulnerability."
    ],
    image6: { text: "[ 3-column impact graphic with Individual, Organisation, and Wider impact. ]", caption: "The project was considered through the value it could create for people, organisations, and the wider social context." },
    challenges: "This project came with two major constraints. The first was time. Because it was a live group project, we could not speak to as many users as we would have liked, which meant each conversation needed to be approached with care and used thoughtfully. The second was the sensitivity of the topic itself. Conversations around income, instability, and protection required a more careful and trauma-aware way of listening, so it became important to notice not only what people said, but how they said it, where they paused, and what felt difficult to name directly.",
    image7: { text: "[ Clean split visual or two small cards showing time limitation and sensitive-topic interviewing. ]", microcopy: ["Limited access, deeper listening", "Sensitive topic, careful framing"], caption: "The constraints shaped not only the pace of the project, but also the care needed in how the research was carried out." },
    reflections: "This project taught me that interviews are not only about collecting answers. They are about learning how to listen properly. Often, what matters most sits in a pause, a hesitation, or a moment of discomfort. It also deepened my understanding of how important the right question is. Better questions create better insights, and peer reviews helped us keep widening our perspective rather than becoming too attached to one reading of the problem.",
    reflectionCards: [
      "How someone speaks can reveal as much as what they say.",
      "The quality of a question shapes the quality of an insight.",
      "A service becomes stronger when it is viewed from multiple perspectives."
    ]
  },
  "sweet-lies": {
    title: "Sweet Lies and Bitter Truth",
    tag: "Inclusive Education / Editorial Design / Learning Experience",
    heroSubtitle: "An educational newspaper designed to help young learners engage with colonial history through honesty, structure, and care.",
    heroCopy: "In this live group project at Glasgow School of Art, we worked with Mackintosh at the Willow and the National Trust for Scotland to design an educational learning resource for secondary school students. Using the Empire Biscuit as a starting point, we explored colonial history, labour, food heritage, and identity through an eight-page newspaper created to make a sensitive subject feel accessible, thoughtful, and honest. As a group, we worked across the full process together, and I contributed especially strongly through content writing, language refinement, and shaping how the story unfolded across the experience.",
    quickFacts: [
      "Project type: Live academic group project",
      "Partners: Mackintosh at the Willow / National Trust for Scotland",
      "Duration: Five-week project",
      "Audience: Learners aged 13 to 16",
      "Role: Collaborative work across research, concepting, writing, editing, and prototyping, with a particularly strong role in content and storytelling",
      "Deliverable: Eight-page educational newspaper prototype",
      "Core methods: Stakeholder listening, concept testing, editorial structuring, content writing, prototyping"
    ],
    image1: { text: "[ Newspaper cover or strongest opening spread. ]", caption: "An editorial learning experience designed to hold difficult history with honesty, structure, and care." },
    brief: "The brief was to create a learning resource around Scottish afternoon tea for young learners, with a focus on historical power and empire. What sounded simple at first quickly opened into something much larger. The challenge was to communicate a deeply sensitive history in a way that respected young audiences, worked in real classrooms, and remained accessible to different learner needs without reducing the depth of the subject.",
    image2: { text: "[ Visual showing the biscuit and the wider systems behind it, including countries, routes, labour, trade, and identity. ]", microcopy: ["One biscuit", "Six countries", "Centuries of exploitation"], caption: "What first looked like a simple object quickly opened into a much wider story of labour, trade, empire, and identity." },
    approach: "This project was shaped through stakeholder listening, concept testing, editorial decision-making, and repeated simplification. Because we could not speak directly with the end users due to ethical constraints, we relied on expert input, student reactions to existing learning formats, and careful judgment throughout the process. My communication background became especially useful here, as I helped shape how the language could stay clear, age-appropriate, and emotionally careful without losing honesty.",
    approachBullets: [
      "Conducted site visits and listened to stakeholder presentations.",
      "Gathered input on accessibility, curriculum, hospitality, and food heritage.",
      "Reviewed student reactions to existing learning formats.",
      "Explored concepts including workshops, games, roleplay, timelines, and sensory ideas.",
      "Rejected ideas that distracted from the history or created access barriers.",
      "Chose a newspaper format because it felt clearer, more realistic, and more respectful to the content."
    ],
    image3: { text: "[ Stakeholder table, feedback board, or site-visit collage. ]", microcopy: ["Teachers have limited time", "Accessibility starts early", "Content must stay honest"], caption: "Stakeholder insight helped define what the resource needed to do in real classrooms, not just what sounded engaging in theory." },
    insights: [
      "Teenagers did not need to be over-entertained. They needed to be respected with real content.",
      "Format should support learning, not overpower it.",
      "Accessibility had to shape the resource from the beginning, not the final polish."
    ],
    image4: { text: "[ Concept rejection board showing workshop, roleplay, game, timeline, and sensory interaction. ]", caption: "Some of the strongest decisions in the project came from the ideas we chose not to pursue." },
    output: "The final output was an eight-page educational newspaper where every element was deliberately structured, edited, and reviewed several times. The wording, pacing, and sequencing were shaped carefully so the experience could stay clear, sensitive, and educational without losing depth. More than a format choice, the newspaper became a way of holding complexity in a form that felt grounded and usable.",
    outputBullets: [
      "Eight-page newspaper prototype",
      "Narrative structure across the full reading journey",
      "Carefully written and edited content",
      "Reflection prompts and learning cues",
      "A format designed for real classroom use"
    ],
    image5: { text: "[ Full spread showing 2 inside pages, ideally one with maps and one with text hierarchy. ]", microcopy: ["Chunked learning", "Editorial pacing", "One clear idea per page"], caption: "The newspaper format allowed the content to unfold gradually, helping learners move through a difficult subject with more clarity and confidence." },
    image6: { text: "[ Detail crop showing content writing, pull quotes, reflection prompts, or a section with strong editorial writing. ]", caption: "The language was shaped with care so the content could stay clear, age-appropriate, and emotionally sensitive without becoming diluted." },
    outcome: "The project showed that difficult histories can be taught more effectively when the format is simple, content-led, and designed with real access conditions in mind. It also demonstrated how editorial design, storytelling, and accessibility can work together to create a more meaningful learning experience. Rather than making the subject easier by softening it, the project made it more approachable by structuring it with care.",
    outcomeBullets: [
      "A format that could work within one class period.",
      "A resource that did not rely on expensive tools or complex setup.",
      "A more respectful and accessible way of engaging with colonial history."
    ],
    image7: { text: "[ Simple visual block showing Accessible, Printable, Classroom-ready, and Content-led. ]", caption: "The final format worked because it respected both the sensitivity of the topic and the realities of classroom use." },
    challenges: "This project had several important constraints. We could not speak directly to the end users because of ethical concerns and the sensitivity of the subject, so we had to build the work through stakeholder insight, secondary feedback, and careful interpretation. Time and budget shaped every decision too. The resource needed to work in real classrooms, often within a single lesson and without relying on technology-heavy formats. Another challenge was letting go of ideas that looked exciting on paper but were not actually helping students engage with the history in the way the brief required.",
    image8: { text: "[ Three-card constraint visual showing ethical limits, tight timeline, and zero-budget classroom reality. ]", caption: "The strongest solution came from designing within the real limits of access, ethics, and classroom use." },
    reflections: "This project taught me that simplicity does not mean losing depth. Sometimes the most respectful design choice is the one that removes spectacle and lets the content do the work. It also made me more aware of how budget, ethics, time, and accessibility shape what good design really looks like in practice. Peer reviews and group discussions kept widening our perspective, helping us understand how the same topic can carry different emotional, educational, and cultural meanings depending on who is reading it.",
    reflectionCards: [
      "Content-led experiences can be more powerful than highly interactive ones.",
      "Budget and access shape design just as much as creativity does.",
      "Simplicity can hold serious complexity when it is designed carefully."
    ]
  },
  "inforens": {
    title: "Inforens",
    tag: "UX Strategy / Service Design / Internship Project",
    heroSubtitle: "Making a student platform feel clearer, more trustworthy, and more human across website, rewards, and journey design.",
    heroCopy: "At Inforens, I worked across a live team environment with designers, founders, and developers to improve how the platform communicated value and supported international students across different stages of their journey. My work spanned website experience, service clarity, content recommendations, and a mystery reward system, all focused on making the platform feel more trustworthy, visible, and useful to first-time users. What shaped this work most was the realisation that the platform already had strong value. The challenge was helping people actually see it.",
    quickFacts: [
      "Project type: Internship project",
      "Organisation: Inforens",
      "Duration: Ongoing internship project",
      "Team: Designers, founders, and developers",
      "Role: UX thinking, service design, content strategy, structural recommendations, reward logic",
      "Scope: Website experience, service visibility, and reward system design",
      "Core methods: Experience audit, service analysis, content strategy, information architecture thinking, reward logic design"
    ],
    image1: { text: "[ Polished dark mockup of the Inforens site or one clean screen from the report with a strong title overlay. ]", caption: "A service and UX project focused on turning hidden value into a clearer student-facing experience." },
    brief: "Inforens already offered strong student value through peer mentorship, post-arrival support, proprietary tools, and structured service bundles, but much of that value was buried or weakly communicated for first-time visitors. The challenge was to make those strengths more visible and shape a clearer experience of trust, progression, and usefulness across the platform. This was not about inventing value from scratch. It was about making what already existed impossible to miss.",
    image2: { text: "[ Comparison visual showing what Inforens actually offers versus what the website currently communicates. ]", microcopy: ["Strong product", "Weak communication", "Hidden value"], caption: "The gap was not in the service itself, but in how little of its value was visible to a first-time user." },
    approach: "The work was approached through a first-time-user and service design lens. Rather than treating the platform as a set of isolated screens, I looked at how visibility, structure, trust, and progression worked across the whole experience. This meant focusing not only on pages and content, but on the feeling the service created as someone tried to understand what it offered and whether it was for them.",
    approachBullets: [
      "Audited the website experience from a first-time user perspective.",
      "Identified trust, clarity, and navigation gaps.",
      "Developed recommendations for homepage messaging, pricing visibility, mentor visibility, and service communication.",
      "Proposed journey improvements across plans, tools, and post-arrival support.",
      "Built a reward logic system based on actual Inforens services rather than generic discounts."
    ],
    image3: { text: "[ Report spread or diagram showing the main website experience findings. ]", caption: "The audit focused on the places where strong service value already existed, but was not visible enough to first-time users." },
    insights: [
      "The product was stronger than the website communication.",
      "Trust was being weakened by hidden pricing, buried tools, and low visibility of human proof.",
      "Students need to feel the outcome before they fully understand the service."
    ],
    image4: { text: "[ Homepage recommendation visual showing stronger service promise, visible human proof, clearer post-arrival support, and clearer plan flow. ]", caption: "The recommendations focused on making trust signals and service value visible earlier in the journey." },
    output: "The work resulted in a set of connected strategic and UX deliverables designed to improve clarity, visibility, and conversion without losing the student-first quality of the service. Each recommendation aimed to make the platform feel less hidden, less fragmented, and more trustworthy from the first interaction onward.",
    outputBullets: [
      "Website experience report",
      "Homepage and purchase journey recommendations",
      "Content and service visibility recommendations",
      "Structural improvements across plans and tools",
      "Four-tier mystery reward system tied to real Inforens services"
    ],
    image5: { text: "[ Strong report page showing homepage recommendations, pricing flow, post-arrival support, or plans page redesign. ]", microcopy: ["Clear promise", "Visible pricing", "Human proof"], caption: "The recommendations focused on making the service easier to understand before asking users to commit." },
    image6: { text: "[ Clean reward-system visual showing the four reward tiers or reward logic. ]", caption: "The reward system was designed around real platform services, turning engagement into meaningful value instead of generic offers." },
    outcome: "The project helped turn hidden platform strengths into clearer user-facing opportunities. It also created a stronger framework for thinking about trust, progression, pricing visibility, and rewards as connected parts of one service experience rather than separate features. More than anything, it showed how much stronger a service can feel when the experience proves its value instead of simply claiming it.",
    outcomeBullets: [
      "clearer communication of student value",
      "stronger visibility of human proof",
      "better trust-building before commitment",
      "more meaningful reward design tied to real services"
    ],
    image7: { text: "[ Simple impact grid showing visibility, trust, progression, and value. ]", caption: "The work focused on making the platform’s strongest qualities easier to see, understand, and act on." },
    challenges: "One challenge was that the issues were spread across multiple touchpoints rather than sitting inside one isolated feature. That meant the work had to stay strategic and systemic, not only visual. Another challenge was balancing business value with user trust. The recommendations needed to support growth and conversion while still feeling transparent, student-first, and credible.",
    image8: { text: "[ Simple 2-column visual showing Business needs and User trust, or Surface issue and System issue. ]", caption: "The challenge was not only fixing screens, but aligning business goals with a clearer and more trustworthy student journey." },
    reflections: "This project taught me that trust is rarely built by one feature alone. It usually comes from the consistency of signals across pricing, structure, language, proof, and visibility. It also reinforced that discovery is increasingly mobile-first for younger audiences, even if later decisions happen elsewhere. People may complete decisions later, but first impressions are often formed quickly through experiences that feel clear, human, and easy to move through.",
    reflectionCards: [
      "Trust is cumulative.",
      "Visual memory often works faster than long explanations.",
      "Discovery is mobile-first, even when purchase is not."
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectData[id];
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".animate-up", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" });
      gsap.utils.toArray('.scroll-fade').forEach((element) => {
        gsap.fromTo(element, { y: 40, opacity: 0 }, { scrollTrigger: { trigger: element, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
      });
    }, pageRef);
    return () => ctx.revert();
  }, [id]);

  if (!project) return <div className="p-20 text-center font-mono">Case study not found.</div>;

  // Helper component for UI Note: "Keep captions close to visuals, not detached"
  const ImageBlock = ({ image }) => {
    if (!image) return null;
    return (
      <div className="scroll-fade my-12 group">
        <div className="w-full aspect-video bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-400 font-mono text-xs overflow-hidden relative mb-3">
          <div className="p-6 text-center">{image.text}</div>
          
          {/* Helper for UI Note: "Use arrows, sequencing, or small labels" */}
          {image.microcopy && (
            <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
              {image.microcopy.map((label, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur text-brand-blue text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="font-montserrat text-sm text-slate-500 font-medium pl-2 border-l-2 border-brand-accent-blue/30">{image.caption}</p>
      </div>
    );
  };

  return (
    <div ref={pageRef} className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      
      {/* HEADER */}
      <div className="animate-up mb-16">
        <span className="inline-block px-3 py-1 bg-brand-accent-blue/10 text-brand-accent-blue text-xs font-mono uppercase tracking-widest font-bold rounded-sm mb-6">
          {project.tag}
        </span>
        <h1 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-brand-blue mb-6">
          {project.title}
        </h1>
        <h2 className="font-montserrat text-2xl text-slate-700 font-medium leading-snug mb-8">
          {project.heroSubtitle}
        </h2>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed mb-12">
          {project.heroCopy}
        </p>

        {/* QUICK FACTS CARD */}
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-12">
          <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-brand-accent-blue mb-6">Quick Facts</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat text-sm text-slate-700 font-medium">
            {project.quickFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ImageBlock image={project.image1} />

      {/* BRIEF */}
      <section className="scroll-fade py-12 border-t border-slate-200">
        <h3 className="font-poppins text-3xl font-bold text-brand-blue mb-6">Brief</h3>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed">{project.brief}</p>
      </section>

      <ImageBlock image={project.image2} />

      {/* APPROACH */}
      <section className="scroll-fade py-12 border-t border-slate-200">
        <h3 className="font-poppins text-3xl font-bold text-brand-blue mb-6">Approach</h3>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed mb-8">{project.approach}</p>
        <ul className="space-y-4 font-montserrat text-slate-600">
          {project.approachBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-accent-blue/10 text-brand-accent-blue flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <ImageBlock image={project.image3} />

      {/* INSIGHT CARDS */}
      <section className="scroll-fade py-12">
        <h3 className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-brand-accent-blue mb-6">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.insights.map((insight, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-brand-accent-blue/50 transition-all">
              <span className="text-4xl font-poppins font-bold text-slate-100 block mb-4">0{idx + 1}</span>
              <p className="font-montserrat text-sm font-medium text-brand-blue">{insight}</p>
            </div>
          ))}
        </div>
      </section>

      <ImageBlock image={project.image4} />

      {/* OUTPUT */}
      <section className="scroll-fade py-12 border-t border-slate-200">
        <h3 className="font-poppins text-3xl font-bold text-brand-blue mb-6">Output</h3>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed mb-8">{project.output}</p>
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat text-sm text-slate-700 font-medium">
            {project.outputBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-brand-accent-blue mt-1">→</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImageBlock image={project.image5} />
      {project.image6 && project.image7 && <ImageBlock image={project.image6} />} {/* For Sweet Lies / Inforens extra images */}

      {/* OUTCOME */}
      <section className="scroll-fade py-12 border-t border-slate-200">
        <h3 className="font-poppins text-3xl font-bold text-brand-blue mb-6">Outcome</h3>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed mb-8">{project.outcome}</p>
        <ul className="space-y-4 font-montserrat text-slate-600">
          {project.outcomeBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue shrink-0 mt-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      {project.image7 && !project.image8 ? <ImageBlock image={project.image7} /> : null} 
      {project.image6 && !project.image7 ? <ImageBlock image={project.image6} /> : null}

      {/* CHALLENGES */}
      <section className="scroll-fade py-12 border-t border-slate-200">
        <h3 className="font-poppins text-3xl font-bold text-brand-blue mb-6">Challenges</h3>
        <p className="font-montserrat text-lg font-light text-slate-600 leading-relaxed">{project.challenges}</p>
      </section>

      {project.image8 ? <ImageBlock image={project.image8} /> : (project.image7 && project.image8 ? <ImageBlock image={project.image7} /> : null)}

      {/* REFLECTIONS */}
      <section className="scroll-fade py-12 border-t border-slate-200 bg-brand-blue text-white p-8 md:p-12 rounded-2xl mt-12">
        <h3 className="font-poppins text-3xl font-bold text-white mb-6">Reflections</h3>
        <p className="font-montserrat text-lg font-light text-slate-300 leading-relaxed mb-10">{project.reflections}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.reflectionCards.map((card, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
              <span className="text-xs font-mono text-brand-accent-blue block mb-3 font-bold uppercase tracking-widest">Takeaway 0{idx + 1}</span>
              <p className="font-montserrat text-sm font-medium text-slate-200">{card}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INNER NAVIGATION (Next Project) */}
      <div className="scroll-fade mt-24 pt-12 border-t border-slate-200 flex justify-between items-center">
        <Link to="/work" className="font-mono text-xs uppercase font-bold tracking-wider text-slate-500 hover:text-brand-accent-blue transition-colors cursor-none">
          &larr; All Work
        </Link>
        {id === 'scottish-widows' && (
          <Link to="/case-study/sweet-lies" className="font-mono text-xs uppercase font-bold tracking-wider text-brand-accent-blue hover:text-brand-blue transition-colors text-right cursor-none">
            Next: Sweet Lies &rarr;
          </Link>
        )}
        {id === 'sweet-lies' && (
          <Link to="/case-study/inforens" className="font-mono text-xs uppercase font-bold tracking-wider text-brand-accent-blue hover:text-brand-blue transition-colors text-right cursor-none">
            Next: Inforens &rarr;
          </Link>
        )}
        {id === 'inforens' && (
          <Link to="/case-study/scottish-widows" className="font-mono text-xs uppercase font-bold tracking-wider text-brand-accent-blue hover:text-brand-blue transition-colors text-right cursor-none">
            Next: Scottish Widows &rarr;
          </Link>
        )}
      </div>

    </div>
  );
};

export default CaseStudy;