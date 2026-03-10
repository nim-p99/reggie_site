'use client'; 
import { useState, useEffect } from 'react';

export default function FloatingBuyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-1000 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-20 scale-90 pointer-events-none'
      }`}
    >
      <a
        href="https://www.amazon.co.uk/Reggie-Veggie-Jatin-Sharma/dp/B0DL4CV4GK"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-[#FF9900] hover:bg-[#fbac33] text-black px-6 py-4 rounded-full text-lg shadow-2xl transition-all border-2 border-white/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#FF9900] animate-pulse-slow opacity-30 pointer-events-none"></span>
        
        <span className="relative flex items-center gap-2">
          <span className="hidden sm:inline">Order on Amazon</span>
          <span className="sm:hidden">Buy Now</span>
        </span>
      </a>
    </div>
  );
}
