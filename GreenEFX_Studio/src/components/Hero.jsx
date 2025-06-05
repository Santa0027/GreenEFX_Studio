import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 6.5 }); // <-- whole animation delayed by 1 second

//       tl.from(titleRef.current, {
//         x: -80,
//         opacity: 0,
//         duration: 1.2,
//         ease: 'power3.out',
//       })
//       .from(subtitleRef.current, {
//         x: -60,
//         opacity: 0,
//         duration: 1.2,
//         ease: 'power3.out',
//       }, "-=0.9")  // overlap start a bit before previous ends
//     gsap.from(buttonRef.current, {
//   y: -50,       // GSAP interprets this as transform translateZ(-100px)
//   opacity: 0,
//   duration: 1.2,
//   ease: 'power3.out',
// }, "-=0.8");

  //   }, heroRef);

  //   return () => ctx.revert(); // Cleanup on unmount
  // }, []);

  return (
    <div
      ref={heroRef}
      className="h-screen w-full relative z-0 bg-gradient-to-b from-black via-gray-900 to-black flex flex-col justify-center items-start px-12 text-left"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-fuchsia-500 to-blue-500 leading-snug"
      >
        Bringing Imagination to Life <br /> in Every Frame
      </h1>

      <h4
        ref={subtitleRef}
        className="text-green-100 font-medium mt-6 max-w-xl"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, alias?
      </h4>

      <a
        ref={buttonRef}
        href="#"
        className="inline-block px-8 py-3 mt-8 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-fuchsia-500 to-blue-500"
      >
        Explore
      </a>
    </div>
  );
}

export default Hero;
