import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-accent-blue rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out mix-blend-difference"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      />
      {/* Outer visualization ring */}
      <div 
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-brand-accent-blue transition-all duration-300 ease-out ${isHovering ? 'w-16 h-16 bg-brand-accent-blue/20' : 'w-8 h-8 bg-transparent'}`}
        style={{ transform: `translate(${position.x - (isHovering ? 32 : 16)}px, ${position.y - (isHovering ? 32 : 16)}px)` }}
      />
    </>
  );
};

export default CustomCursor;