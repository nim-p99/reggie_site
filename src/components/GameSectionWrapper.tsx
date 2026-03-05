"use client";
import { useState } from 'react';
import Visuals from './canvas/Visuals';

export default function GameSectionWrapper() {
  
  const [isOn, setIsOn] = useState(false);

  const handleTogglePower = () => {
    const toggleState = !isOn 
    setIsOn(toggleState);
    
    const event = new CustomEvent('toggle-power', {detail: toggleState });
    window.dispatchEvent(event);
  };


  return (
    <section className="h-screen w-full relative bg-[#383166]">
      {/* 3D visuals  */}
      <div className="absolute inset-0 z-0">
        <Visuals />
      </div>
      
      {/* computer button */}
      <div className="relative z-10 h-full flex items-end justify-center pb-20 pointer-events-none">
        <button 
          onClick={handleTogglePower}
          className={`pointer-events-auto px-8 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95 text-white
            ${isOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'}`}
        >
          {isOn ? 'power off' : 'power on'}
        </button>
      </div>
    </section>
  );
}
