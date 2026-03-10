import Image from 'next/image';

export default function BeeSection() {
  return (
    <section className="relative w-full py-10 bg-white overflow-visible">
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-4 border-[#258c3d]/10 overflow-visible">
          
          <div className="w-32 sm:w-40 md:w-56 lg:w-64 animate-float pointer-events-none shrink-0">
            <div className="md:hidden">
              <Image src="/assets/bee.png" alt="Bee" width={300} height={300} className="w-full h-auto" />
            </div>
            <div className="hidden md:block">
              <video autoPlay loop muted playsInline className="w-full h-auto">
                <source src="/assets/bee-flying.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-serif text-[#0a2f14] italic">
              Shall we take a sneak peek?
            </h2>
            <div className="h-1.5 w-24 bg-[#258c3d] mx-auto mt-6 rounded-full opacity-30" />
          </div>

          <div className="w-32 sm:w-40 md:w-56 lg:w-64 animate-float pointer-events-none shrink-0 scale-x-[-1]">
            <div className="md:hidden">
              <Image src="/assets/bee.png" alt="Bee" width={300} height={300} className="w-full h-auto" />
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
