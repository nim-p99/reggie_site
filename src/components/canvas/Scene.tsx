"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { useGLTF, Center, Html } from "@react-three/drei";


function Computer() {
  // load model 
  const { scene } = useGLTF("/models/retro_pc.glb");
  const [poweredOn, setPoweredOn] = useState(false);

  useEffect(() => {
    const handlePower = () => setPoweredOn(true);
    window.addEventListener('power-on', handlePower);
    return () => window.removeEventListener('power-on', handlePower);
  }, []);
  
  // rotation. y: 1.5 is a 90degree turn
  return (
    <group position={[0, -3, 0]}>
      <primitive object={scene} scale={0.7} rotation={[0.3, 1.55, 0]} position={[0,1.2,0]}/>;
      // the screen - only when poweredOn = true
      {poweredOn && (
        <Html 
          transform
          occlude
          position={[0, 4, 1]}   // adjust to fit screen 
          scale={0.15}
          pointerEvents="auto"
          style={{ 
            width: '640px',
            height: '535px', 
            background: 'black',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
            filter: 'contrast(1.1) brightness(1.1)',
            cursor:'pointer'
          }}
        >
          <iframe
            src="/game/reggie_v01.html"
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
          />
        </Html>
      )}
    </group>
  );
}




export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov:35 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      

      {/* suspense shows nothing until model is ready */}
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
    </Canvas>
  );
}
