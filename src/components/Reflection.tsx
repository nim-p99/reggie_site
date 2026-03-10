

import Image from 'next/image';

export default function Reflection() {
  return (
    <section 
      className="relative w-full min-h-[600px] md:min-h-[800px] flex items-center bg-cover bg-center md:bg-[center_top]" 
      style={{ backgroundImage: "url('/assets/reflection.PNG')" }}
    >
      {/* 1. TEXT OVERLAY CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 md:py-0">
        <div className="md:ml-[8%] max-w-[90%] md:max-w-[45%] space-y-8 md:space-y-12">
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a2f14] leading-tight tracking-tight drop-shadow-md">
            Thank you for visiting <br className="hidden md:block" /> Reggie's website!
          </h2>

          <div className="flex flex-col space-y-8">
            {/* AUTHOR (Jatin) */}
            <div className="flex items-center gap-4 group">
              <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden aspect-square">
                {/* We use Image here for the avatars since they are small */}
                <Image src="/assets/jat.webp" alt="Jatin" width={100} height={100} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-base md:text-xl text-[#0a2f14] font-medium">Jatin (Author)</p>
                <a href="mailto:jatin@example.com" className="inline-block text-[#0a2f14] hover:text-[#258c3d] mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
                </a>
              </div>
            </div>

            {/* ILLUSTRATOR (Nimesh) */}
            <div className="flex items-center gap-4 group">
              <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden aspect-square">
                <Image src="/assets/nim.webp" alt="Nimesh" width={100} height={100} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-base md:text-xl text-[#0a2f14] font-medium">Nimesh (Illustrator)</p>
                <a href="mailto:nimeshpatel99@hotmail.com" className="inline-block text-[#0a2f14] hover:text-[#258c3d] mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
