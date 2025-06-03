import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ModelViewer from "./components/ModelViewer";
import { gsap } from "gsap";

export default function MasterTimeline() {
  // Refs for components that you want to animate
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate header fade and slide down
    tl.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate hero fade and slide from left
    tl.from(heroRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.5"); // overlap with header animation end

    // Animate 3D model scale up and fade in
    tl.from(modelRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    }, "-=0.7"); // overlap with hero animation end
  }, []);

  return (
    <>
      {/* Pass refs down or assign ref wrappers */}
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={modelRef} style={{ position: "relative", zIndex: 10 }}>
        <ModelViewer />
      </div>
    </>
  );
}
