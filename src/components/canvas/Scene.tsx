"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { useGLTF, Center, Html, Environment } from "@react-three/drei";


function Computer() {
  // load model 
  const { scene } = useGLTF("/models/retro_pc.glb");
  const [poweredOn, setPoweredOn] = useState(false);

  useEffect(() => {
    const togglePower = (e: any) => setPoweredOn(e.detail);
    window.addEventListener('toggle-power', togglePower);
    return () => window.removeEventListener('toggle-power', togglePower);
  }, []);
  
  // rotation. y: 1.5 is a 90degree turn
  return (
    <group position={[0, -3, 0]}>
      {/* 3d computer model */}
      <primitive object={scene} scale={0.7} rotation={[0.3, 1.55, 0]} position={[0,1.2,0]}/>


      {/* the screen - only when poweredOn = true */}
      {poweredOn && (
        <Html 
          transform
          occlude
          position={[0, 4.16, 1]}   // adjust to fit screen 
          scale={0.15}
          pointerEvents="auto"
          style={{ 
            width: '640px',
            height: '535px', 
            background: 'black',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
            filter: 'contrast(1.1) brightness(1.1)',
            cursor:'pointer',
            transition: 'opacity 0.2s ease-in-out',
            borderRadius: '40px',
          }}
        >
          <iframe
            src="/game/reggie_v01.html"
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
          />

          {/* glass screen */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: `
              radial-gradient(circle, rgba(255,255,255,0.15) 0% rgba(0,0,0,0.3) 60% rgba(0,0,0,0.7) 100%
            `,
            boxShadow: 'inset 0 0 50px rgba(0,0,0,1), inset 20px 20px 40px rgba(255,255,255,0.2)',
          }} />



          {/* fuzzy filter overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            background: `
              linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
            `,
            backgroundSize: '100% 4px, 3px 100%',
            opacity: 0.5,
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',  // dark corners
            filter: 'contrast(1.2) brightness(1.1) blur(0.5px)', // fuzziness
          }} />
        </Html>
      )}
    </group>
  );
}


function Desk() {
  const { scene } = useGLTF("/models/desk.glb");

  return (
    <group position={[0, -4.5, 0]}>
      <primitive object={scene} scale={6} rotation={[0.5, 0, 0.]} position={[0,0,-2]} />
    </group>
  )
}


function Carrot() {
  const { scene } = useGLTF("/models/carrot.glb");

  return (
    <group position={[-2, -1,3]}>
      <primitive object={scene} scale={0.003} rotation={[0,-1.7,-0.2]} position={[0,0,0]} />
    </group>
  );
}



export default function Scene() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10], fov:35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        

        {/* suspense shows nothing until model is ready */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Computer />
          <Carrot />
          <Desk />
        </Suspense>
      </Canvas>
    </>
  );
}
