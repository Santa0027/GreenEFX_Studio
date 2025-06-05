import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const frameRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".frame-top",
        { width: "0%" },
        {
          width: "90%",
          duration: 0.6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.12,
        }
      );
      gsap.fromTo(
        ".frame-right",
        { height: "0%" },
        {
          height: "80%",
          duration: 0.12,
          delay: 0.15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.6,
        }
      );
      gsap.fromTo(
        ".frame-bottom",
        { width: "0%" },
        {
          width: "90%",
          duration: 0.18,
          delay: 0.3,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.6,
        }
      );
      gsap.fromTo(
        ".frame-left",
        { height: "0%" },
        {
          height: "80%",
          duration: 0.24,
          delay: 0.15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.6,
        }
      );
    }, frameRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={frameRef}
      className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Frame */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <span className="frame-top absolute left-25 top-25 h-1 w-1 bg-green-700 shadow-green-400/80 shadow-lg rounded transition-all" />
        <span className="frame-right absolute right-25 top-25 w-1 h-0 bg-green-700 shadow-green-400/80 shadow-lg rounded transition-all" />
        <span className="frame-bottom absolute right-25 bottom-25 h-1 w-0 bg-green-700 shadow-green-400/80 shadow-lg rounded transition-all" />
        <span className="frame-left absolute left-25 bottom-25 w-1 h-0 bg-green-700 shadow-green-400/80 shadow-lg rounded transition-all" />
      </div>

      {/* /* Parallax Background */}
      {/* <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-40"
        style={{
          backgroundImage: "url('/images/parallax-bg.jpg')",
        }}
        aria-hidden="true"
      /> */}
      {/* {/* Foreground Content  */}
      {/* {/* <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 rounded-xl bg-black bg-opacity-80 shadow-2xl animate-fadeIn">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-40"
        style={{
          backgroundImage: "url('/images/parallax-bg.jpg')",
        }}
        aria-hidden="true"
      />  */}
      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 rounded-xl bg-black bg-opacity-80 shadow-2xl animate-fadeIn">
        <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
          About <span className="text-green-400">GreeneFX Studio</span>
        </h2>
        <p className="text-lg text-gray-100 mb-8 leading-relaxed">
          With over <span className="text-green-400 font-semibold">20 years</span> of experience, GreeneFX Studio is a creative powerhouse in VFX and 3D Animation. Our passionate team transforms ideas into visually stunning realities, partnering with clients to deliver unforgettable digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl p-8 card-animate">
            <h3 className="text-2xl text-green-400 font-bold mb-4">What We Do</h3>
            <ul className="space-y-2 text-white">
              {/* ...list items... */}
            </ul>
          </div>
          <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl p-8 card-animate">
            <h3 className="text-2xl text-green-400 font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-2 text-white">
              {/* ...list items... */}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="bg-green-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition-transform transform hover:scale-105"
          >
            Let’s Create Something Extraordinary
          </a>
        </div>
      </div>
     
    </section>
  );
}



// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const frameRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate each border side sequentially
//       gsap.to(".frame-top", {
//         width: "100%",
//         duration: 0.6,
//         ease: "power1.inOut",
//         repeat: -1,
//         repeatDelay: 0.1,
//         yoyo: true,
//         stagger: 0.3,
//       });
//       gsap.to(".frame-right", {
//         height: "100%",
//         duration: 0.6,
//         delay: 0.15,
//         ease: "power1.inOut",
//         repeat: -1,
//         repeatDelay: 0.1,
//         yoyo: true,
//         stagger: 0.3,
//       });
//       gsap.to(".frame-bottom", {
//         width: "100%",
//         duration: 0.6,
//         delay: 0.3,
//         ease: "power1.inOut",
//         repeat: -1,
//         repeatDelay: 0.1,
//         yoyo: true,
//         stagger: 0.3,
//       });
//       gsap.to(".frame-left", {
//         height: "100%",
//         duration: 0.6,
//         delay: 0.45,
//         ease: "power1.inOut",
//         repeat: -1,
//         repeatDelay: 0.1,
//         yoyo: true,
//         stagger: 0.3,
//       });
//     }, frameRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={frameRef}
//       className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Animated Frame */}
//       <div className="pointer-events-none absolute inset-0 z-20">
//         <span className="frame-top absolute left-0 top-0 h-1 w-0 bg-green-400 shadow-green-400/80 shadow-lg rounded transition-all" />
//         <span className="frame-right absolute right-0 top-0 w-1 h-0 bg-green-400 shadow-green-400/80 shadow-lg rounded transition-all" />
//         <span className="frame-bottom absolute right-0 bottom-0 h-1 w-0 bg-green-400 shadow-green-400/80 shadow-lg rounded transition-all" />
//         <span className="frame-left absolute left-0 bottom-0 w-1 h-0 bg-green-400 shadow-green-400/80 shadow-lg rounded transition-all" />
//       </div>

//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 bg-fixed bg-center bg-cover opacity-40"
//         style={{
//           backgroundImage: "url('/images/parallax-bg.jpg')",
//         }}
//         aria-hidden="true"
//       />
//       {/* Foreground Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 rounded-xl bg-black bg-opacity-80 shadow-2xl animate-fadeIn">
//         <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
//           About <span className="text-green-400">GreeneFX Studio</span>
//         </h2>
//         <p className="text-lg text-gray-100 mb-8 leading-relaxed">
//           With over <span className="text-green-400 font-semibold">20 years</span> of experience, GreeneFX Studio is a creative powerhouse in VFX and 3D Animation. Our passionate team transforms ideas into visually stunning realities, partnering with clients to deliver unforgettable digital experiences.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl p-8 card-animate">
//             <h3 className="text-2xl text-green-400 font-bold mb-4">What We Do</h3>
//             <ul className="space-y-2 text-white">
//               {/* ...list items... */}
//             </ul>
//           </div>
//           <div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-xl p-8 card-animate">
//             <h3 className="text-2xl text-green-400 font-bold mb-4">Why Choose Us?</h3>
//             <ul className="space-y-2 text-white">
//               {/* ...list items... */}
//             </ul>
//           </div>
//         </div>
//         <div className="mt-10 flex justify-center">
//           <a
//             href="/contact"
//             className="bg-green-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition-transform transform hover:scale-105"
//           >
//             Let’s Create Something Extraordinary
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
