export default function BeeSection() {
  return (
    <section className="relative w-full px-4 py-16 bg-white flex flex-col items-center">
      <div className="flex items-center justify-center w-full max-w-6xl gap-4 md:gap-8">
        
        {/* LEFT BEE */}
        <div className="w-16 sm:w-24 md:w-32 lg:w-120 animate-float pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/assets/bee-flying.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CENTER TEXT */}
        <div className="flex-1 text-center max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif leading-tight text-[#0a2f14]">
            Shall we take a sneak peek .... ?          
          </h2>
        </div>

        {/* RIGHT BEE (Flipped) */}
        <div className="w-16 sm:w-24 md:w-32 lg:w-120 animate-float pointer-events-none scale-x-[-1]">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/assets/bee-flying.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
