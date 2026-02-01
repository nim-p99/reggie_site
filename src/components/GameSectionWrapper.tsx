"use client";

import Visuals from './canvas/Visuals';

export default function GameSectionWrapper() {
  const handlePowerOn = () => {
    window.dispatchEvent(new Event('power-on'));
  };

  return (
    <section className="h-screen w-full relative bg-sky-600">
      {/* 3D visuals  */}
      <div className="absolute inset-0 z-0">
        <Visuals />
      </div>
      
      {/* computer button */}
      <div className="relative z-10 h-full flex items-end justify-center pb-20 pointer-events-none">
        <button 
          onClick={handlePowerOn}
          className="pointer-events-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-transform active:scale-95"
        >
          power on 
        </button>
      </div>
    </section>
  );
}
