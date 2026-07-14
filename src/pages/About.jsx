import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate-up", {
        y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out"
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      
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

          {/* NEW LEADERSHIP HEADING */}
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
    </div>
  );
};

export default About;