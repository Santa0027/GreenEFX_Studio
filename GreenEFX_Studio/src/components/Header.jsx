import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef();
  const titleRef = useRef();
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Animate the whole header container
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Animate the title
    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    // Animate each nav link with stagger
    gsap.fromTo(
      navLinksRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.7,
        ease: "bounce",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-gray-800 text-green-200 border shadow-md z-40 w-10/12 absolute rounded-4xl mx-38 mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 ref={titleRef} className="text-xl font-bold">GreenEFX Studio</h1>
        <nav className="space-x-8 flex">
          {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
            <a
              key={text}
              href="#"
              ref={(el) => (navLinksRef.current[index] = el)}
              className="hover:text-green-600 transition px-1 py-2"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
