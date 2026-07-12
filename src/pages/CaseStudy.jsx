import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import gsap from 'gsap';

const CaseStudy = () => {
  const { id } = useParams();
  const pageRef = useRef(null);

  // Scroll to top when changing case studies
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const caseStudiesData = {
    "scottish-widows": {
      title: "Scottish Widows x GSA",
      headline: "Making income protection make sense to people who do not know exactly what next month's income will look like.",
      intro: "For many young adults, financial life no longer follows a steady pattern. Income arrives in freelance payments, part-time shifts, gig work, and short-term contracts, often without the safety of a fixed monthly salary. In this live client project with Lloyds Banking Group, I explored how income protection could feel more human, more relevant, and more understandable for 18-30 year olds building their lives around uncertainty rather than predictability.",
      heroCaption: "Exploring how protection can feel relevant to people living with irregular income, not just those in traditional employment.",
      overview: { Type: "Live client service design project.", Partner: "Lloyds Banking Group / Scottish Widows.", Duration: "12 weeks.", Role: "Research, synthesis, and opportunity framing.", Focus: "Income protection and financial wellbeing for young workers." },
      challenge: "Income protection is usually communicated through the logic of stable employment. But for younger adults working across freelance, self-employed, and gig-based models, that language can feel distant, overly formal, or simply not meant for them. The challenge was not just to make the product clearer, but to understand why so many people in unstable work patterns struggle to see themselves in it at all. This became a question of both business and empathy. How could a major financial service better speak to a growing audience whose relationship with work, risk, and security looks very different from older employment models?",
      audience: "The target audience was 18-30 year olds who are freelancers, self-employed workers, or part of the gig economy. Many of them do not receive a predictable monthly income, which means they often experience financial uncertainty more directly while also finding traditional protection products harder to relate to.",
      audienceCaption: "Young workers without fixed salaries need services that start from uncertainty, not assume stability.",
      process: "The project began with listening. Through interviews, digital surveys, and desk research, I looked at how young adults currently understand income protection, what they assume it is for, and what stops them from engaging with it. The strongest insight was that awareness was only one part of the problem. Relevance was the deeper issue. Many participants did not actively reject protection. Instead, they felt it belonged to someone else's life, someone with a 'proper job,' a regular payslip, and a clearer sense of financial structure. That emotional distance mattered as much as practical confusion. I then synthesised both qualitative and quantitative findings into clearer themes around uncertainty, mistrust, low personal relevance, and unclear fit for irregular earners. These insights helped shift the conversation from 'how do we explain the product better?' to 'how do we frame protection in a way that people living this reality can actually recognise themselves in?' From there, I helped shape opportunity areas for a more human service direction. These focused on clearer communication, scenario-based framing, and ways of connecting the idea of protection to the lived experience of unstable modern work.",
      processCaptions: ["Research surfaced not just knowledge gaps, but emotional distance from the product.", "Synthesising responses into themes helped turn uncertainty into actionable design direction.", "Opportunity areas reframed protection around lived experience instead of generic product language."],
      outcomeText: "The final outcome was a set of research-led opportunity areas and service recommendations that made income protection feel more human, contextual, and relevant to younger adults. The work gave stakeholders a clearer view of where current communication fails and where future service design could better reflect the realities of irregular work.",
      outcomeBullets: ["clearer audience definition", "stronger problem framing", "insight-backed opportunity areas", "a more human direction for future communication and service design"],
      outcomeCaption: "The final direction focused on making protection feel understandable, relevant, and emotionally believable.",
      reflection: "This project changed how I think about the word security. It reminded me that security is not just about having financial products available; it is about whether people feel seen by the systems that claim to support them. In twelve weeks, we were able to surface patterns, challenge assumptions, and frame meaningful opportunities. But if I were to continue this work, I would want to take those directions back to the people they are meant for and test them properly. I would want to know what language really lands, what still feels too corporate, and what genuinely helps freelancers, gig workers, and self-employed young adults feel that protection is for them too."
    },
    "sweet-lies": {
      title: "Sweet Lies and Bitter Truth",
      headline: "Designing a learning experience that begins with a biscuit and opens into empire, labour, and difficult truth.",
      intro: "What looked like a simple brief about Scottish afternoon tea quickly became one of the most layered and emotionally complex projects I have worked on. Behind the Empire Biscuit sat histories of colonial trade, slavery, labour, and naming, all hidden inside something familiar and seemingly harmless. This project asked how a learning experience could hold that complexity honestly for 13-16 year olds, without turning it into a spectacle or reducing it to something easy.",
      heroCaption: "An editorial learning experience designed to hold difficult history with honesty, structure, and care.",
      overview: { Type: "Educational experience / editorial design.", Context: "Glasgow School of Art with Mackintosh at the Willow and National Trust for Scotland.", Duration: "5 weeks.", Role: "Co-design, concept refinement, narrative structure, and editorial thinking.", Output: "8-page educational newspaper." },
      challenge: "The project brief asked for a learning resource around Scottish tea culture and historical power for secondary school students. But very quickly, the real challenge became clear: how do you teach histories of colonialism, exploitation, and identity to young people in a way that is accessible, serious, and emotionally responsible? This meant balancing several tensions at once. The resource needed to work within ordinary classroom conditions, support different learner needs, remain visually engaging without becoming distracting, and make space for reflection without centring shame.",
      audience: "The target audience was 13-16 year old secondary school students. That included students with very different levels of historical knowledge, different motivations, and different support needs, including ASN learners who benefit from visual clarity, strong structure, and predictable pacing. The design needed to respect them as intelligent readers, not simplify the content into something childish.",
      audienceCaption: "The resource had to support different learner needs without flattening the complexity of the history.",
      process: "The project began with expansion rather than certainty. We explored workshops, roleplay, games, timelines, and sensory learning concepts because they initially felt engaging. But the more we tested them against real classroom constraints, the more they revealed their weaknesses. Some ideas were too resource-heavy. Some would only work in ideal settings. Others risked making the experience memorable for the wrong reasons, with interactivity overpowering the history instead of helping students sit with it. That process taught us something important: just because an idea looks exciting does not mean it is the right vessel for truth. Stakeholder conversations shaped the project deeply. Teachers highlighted time and budget limits, accessibility experts pushed for structure from the first sketch, and heritage and education voices reminded us that this might be some students' only meaningful encounter with colonial history. Those insights shifted our direction from trying to create the most interactive solution to trying to create the most honest and teachable one. That is what led us to the newspaper format. It was calm, familiar, serious, and flexible. It allowed the content to unfold in layers, with each page focusing on one clear idea, from ingredient journeys and trade routes to naming politics, labour histories, and reflective prompts. It let us build understanding page by page rather than overwhelming readers all at once.",
      processCaptions: ["Early concepts helped reveal which formats would distract from the content rather than support it.", "Stakeholder insight grounded the project in accessibility, realism, and care.", "The newspaper format created a slower, more thoughtful way into difficult history.", "Each spread was designed as a clear step deeper into the story."],
      outcomeText: "The final output was an eight-page educational newspaper that used the Empire Biscuit as a lens to explore empire, trade, labour, and identity. It was designed to work in ordinary classrooms without special tools or setup, while still creating space for reflection, discussion, and critical thought.",
      outcomeBullets: ["8-page printed learning resource", "clear page-by-page narrative flow", "layered visual and textual storytelling", "accessible, realistic, and respectful classroom use"],
      outcomeCaption: "The final newspaper turned a familiar object into a structured journey through hidden histories.",
      reflection: "This project changed my relationship with clarity. It taught me that clarity does not mean making something smaller. It means carrying complexity carefully enough that more people can truly enter it. The biggest thing I still carry from this project is the absence of direct student voices. Because of ethical and practical constraints, we were not able to sit with the 13-16 year olds we were designing for and hear their responses firsthand. If I continued this work, that is exactly where I would begin. I would want to watch how they move through the paper, what surprises them, what confuses them, and what stays with them emotionally after the reading ends. This project taught me to trust seriousness, trust structure, and trust the audience more. It reminded me that some of the most powerful design choices are the quietest ones."
    },
    "inforens": {
      title: "Inforens",
      headline: "Making a student platform feel as trustworthy, visible, and human as the support behind it.",
      intro: "Inforens already offered real value to students, from peer mentors and practical relocation help to digital tools, structured programmes, and community support. But much of that value was hidden, fragmented, or difficult to trust from a first-time-user perspective. In this internship, I focused on making the platform's strongest strengths visible earlier, clearer, and in ways that felt believable to students making high-stakes decisions about their futures.",
      heroCaption: "Strengthening trust by making the platform's real value visible across the student journey.",
      overview: { Type: "UX strategy and service design internship project.", Context: "Platform supporting international students.", Role: "Experience audit, service communication, reward logic, and journey clarity.", Scope: "Website, plans, tools, trust signals, and rewards system." },
      challenge: "Students arriving on the platform were being asked to trust it with major life decisions, but the public experience did not do enough to earn that trust quickly. Valuable services existed, yet they were buried. Human support existed, yet it was barely visible. Pricing and value communication were inconsistent, making the platform feel more uncertain than the service itself actually was. The challenge was to close that gap. How could the experience better communicate clarity, proof, and care to people who are often making emotional, expensive, and high-risk decisions?",
      audience: "The primary audience was international students navigating study-abroad decisions, especially those in the early and middle stages of the journey. These are students comparing options, managing uncertainty, asking questions they may feel embarrassed to ask, and trying to figure out who they can trust. They are not just looking for information. They are looking for reassurance, visibility, and signals that someone genuinely understands what they are about to go through.",
      audienceCaption: "The platform needed to support students across an emotional and practical journey, not just a transaction.",
      process: "I began by looking at the platform through the eyes of a first-time user. What does someone see in the first few seconds? What builds confidence? What creates hesitation? Where does trust quietly leak away? That lens made one thing obvious: the service behind the platform was stronger than what the website communicated. Peer mentors, post-arrival support, structured programmes, proprietary tools, and community all existed, but most of them were buried in navigation, under-explained, or absent from the places where new users most needed reassurance. From there, I mapped key trust gaps across the experience. These included weak hero messaging, hidden pricing, invisible mentors, scattered value communication, and limited public proof of community and outcomes. Instead of seeing these as isolated UX issues, I treated them as part of one larger service-storytelling problem: the platform was not showing enough of what made it credible. I then developed a set of recommendations that restructured how value appeared across the journey. This included stronger above-the-fold messaging, more visible mentor previews, clearer plans, surfaced tools like SOP and CV builders, and better use of community, events, and response-time proof to create trust earlier. Alongside this, I worked on a mystery reward system linked to gift card use. Rather than building a reward mechanic around generic discounts, I designed it around real platform services such as mentor sessions, CV reviews, SOP reviews, scholarship tools, and stage-based support. The intention was to make rewards feel meaningful, useful, and connected to the wider student journey rather than separate from it.",
      processCaptions: ["The experience audit showed where strong services were being weakened by weak visibility.", "Reframing the homepage helped surface value before users had to go searching for it.", "Clearer journey logic connected separate tools and services into one coherent student path.", "The reward system was built around real help, not just promotional value."],
      outcomeText: "The result was a structured website experience report, a clearer set of UX and service recommendations, and a reward framework tied to services students would genuinely find useful. Together, the work created a more strategic picture of how trust is built, where it breaks, and how the platform could better communicate the value it already had.",
      outcomeBullets: ["clearer trust and visibility recommendations", "improved communication of tools, plans, and support", "stronger journey logic across stages", "reward design connected to meaningful services"],
      outcomeCaption: "The final direction focused on helping students see, trust, and use the support that already existed.",
      reflection: "This project stayed with me because it made trust feel incredibly tangible. Trust is not only created by a brand promise or a polished visual system. It is created when people can see faces, understand timelines, recognise value, and believe that support will really be there when they need it. What I could do within the internship was diagnose, structure, and propose. What I would want to do next is put those changes in front of students and watch how they respond. I would want to learn what makes them pause less, what gives them confidence faster, and what still feels too vague or too risky in such an emotionally charged category. More than anything, this project reinforced something I care deeply about: good service design does not just organise information. It helps people feel safer moving through uncertainty."
    }
  };

  const project = caseStudiesData[id];

  useLayoutEffect(() => {
    if (project) {
      let ctx = gsap.context(() => {
        gsap.from(".animate-up", { y: 30, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out" });
      }, pageRef);
      return () => ctx.revert();
    }
  }, [project, id]);

  // If URL parameter doesn't match an existing project, send user back to home
  if (!project) return <Navigate to="/" />;

  return (
    <div ref={pageRef} className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      {/* Back Button */}
      <div className="animate-up mb-12">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-brand-accent-blue transition-colors">
          &larr; Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <h1 className="animate-up font-poppins text-4xl md:text-6xl font-bold tracking-tight text-brand-blue leading-tight mb-6">
        {project.title}
      </h1>
      <h2 className="animate-up font-poppins text-xl md:text-3xl font-semibold text-brand-green mb-8">
        {project.headline}
      </h2>
      <p className="animate-up font-montserrat text-lg text-slate-600 font-light leading-relaxed mb-12">
        {project.intro}
      </p>

      {/* Hero Image */}
      <div className="animate-up mb-16">
        <div className="w-full h-[400px] bg-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm rounded-sm mb-4">
          [ {project.title} Hero Visual ]
        </div>
        <p className="font-mono text-xs text-slate-500 uppercase tracking-wider border-l-2 border-brand-accent-blue pl-3">
          {project.heroCaption}
        </p>
      </div>

      {/* Overview Grid */}
      <div className="animate-up grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-sm mb-20 border border-slate-100">
        {Object.entries(project.overview).map(([key, value]) => (
          <div key={key}>
            <span className="block font-poppins font-bold text-xs uppercase tracking-widest text-brand-blue mb-1">{key}</span>
            <span className="font-montserrat text-sm text-slate-600 font-light">{value}</span>
          </div>
        ))}
      </div>

      {/* Content Blocks */}
      <div className="space-y-20 animate-up">
        {/* Challenge */}
        <div>
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Challenge</h3>
          <p className="font-montserrat text-slate-600 font-light leading-relaxed">{project.challenge}</p>
        </div>

        {/* Audience */}
        <div>
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Audience</h3>
          <p className="font-montserrat text-slate-600 font-light leading-relaxed mb-8">{project.audience}</p>
          <div className="w-full h-[300px] bg-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm rounded-sm mb-4">
            [ Audience Snapshot / Persona Strip ]
          </div>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider border-l-2 border-brand-accent-blue pl-3">
            {project.audienceCaption}
          </p>
        </div>

        {/* Process */}
        <div>
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Process</h3>
          <p className="font-montserrat text-slate-600 font-light leading-relaxed mb-8">{project.process}</p>
          <div className="w-full h-[400px] bg-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm rounded-sm mb-4">
            [ Process / Insight Boards ]
          </div>
          <ul className="space-y-2 mb-8">
            {project.processCaptions.map((caption, idx) => (
              <li key={idx} className="font-mono text-xs text-slate-500 uppercase tracking-wider flex items-start">
                <span className="text-brand-accent-blue mr-2">&bull;</span>
                {caption}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="font-poppins text-2xl font-bold text-brand-blue mb-4">Outcome</h3>
          <p className="font-montserrat text-slate-600 font-light leading-relaxed mb-6">{project.outcomeText}</p>
          <ul className="space-y-3 mb-8 ml-4">
            {project.outcomeBullets.map((bullet, idx) => (
              <li key={idx} className="font-montserrat text-slate-600 font-light flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-3 shrink-0"></span>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="w-full h-[350px] bg-slate-200 flex items-center justify-center text-slate-400 font-mono text-sm rounded-sm mb-4">
            [ Final Recommendations / Outcome Visual ]
          </div>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider border-l-2 border-brand-accent-blue pl-3">
            {project.outcomeCaption}
          </p>
        </div>

        {/* Reflection */}
        <div className="bg-brand-blue text-white p-8 md:p-12 rounded-sm shadow-xl">
          <h3 className="font-poppins text-2xl font-bold mb-4 text-[#ccff00]">Reflection</h3>
          <p className="font-montserrat font-light leading-relaxed text-slate-300">{project.reflection}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;