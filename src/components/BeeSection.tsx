


import Image from 'next/image';

export default function BeeSection() {
  return (
    <section className="relative w-full py-10 bg-white overflow-visible">
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-12 flex flex-row items-center justify-between md:justify-center gap-2 md:gap-12 border-4 border-[#258c3d]/10 overflow-visible">
          
          <div className="w-20 sm:w-28 md:w-56 lg:w-64 animate-float pointer-events-none shrink-0">
            <div className="md:hidden">
              <Image src="/assets/bee.png" alt="Bee" width={200} height={200} className="w-full h-auto" />
            </div>
            <div className="hidden md:block">
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source src="/assets/bee-flying.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="text-center flex-1">
            <h2 className="text-lg sm:text-2xl md:text-5xl font-serif text-[#0a2f14] italic leading-tight">
              Shall we take <br className="sm:hidden" /> a sneak peek?
            </h2>
            <div className="h-1 w-12 md:h-1.5 md:w-24 bg-[#258c3d] mx-auto mt-2 md:mt-6 rounded-full opacity-30" />
          </div>

          <div className="w-20 sm:w-28 md:w-56 lg:w-64 animate-float pointer-events-none shrink-0 scale-x-[-1]">
            <div className="md:hidden">
              <Image src="/assets/bee.png" alt="Bee" width={200} height={200} className="w-full h-auto" />
            </div>
            <div className="hidden md:block">
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source src="/assets/bee-flying.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
