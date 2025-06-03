import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

// ✅ Model component with GSAP animations
function Model() {
  const modelRef = useRef();
  const gltf = useGLTF("model/model.glb");

  useEffect(() => {
    const tl = gsap.timeline();

    // 👉 Animate entrance: lift up
    tl.to(modelRef.current.position, {
      y: 1,
      duration: 2,
      ease: "power1.out",
    });

    // 👉 Rotate around Y-axis
    tl.to(modelRef.current.rotation, {
      y: Math.PI * 2,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.to(modelRef.current.position, {
      y: -1.2,
      x:3.5,
      duration: 2,
    });
    // 👉 Start infinite bounce after timeline finishes
    tl.call(() => {
      gsap.to(modelRef.current.position, {
        y: "+=0.30",
        duration: 3,
        ease: "sine.inOut", // Smooth up-down
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return <primitive ref={modelRef} object={gltf.scene} scale={1.2} />;
}

// ✅ Main Viewer Component
export default function ModelViewer() {
  return (
    <div className="h-lvh w-full absolute">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 50, 30]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
  enableZoom={false}
  enablePan={false}
  minAzimuthAngle={0}
  maxAzimuthAngle={0} // Lock Y-axis (horizontal rotation)
  minPolarAngle={Math.PI / 4}
  maxPolarAngle={(3 * Math.PI) / 4} // Allow some X-axis (vertical) rotation
  target={[0, 0, 0]}
/>

      </Canvas>
    </div>
  );
}
