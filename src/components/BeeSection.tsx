export default function BeeSection() {
  return (
    <section className="relative w-full py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex items-center justify-center gap-6 border-4 border-[#258c3d]/10">
          
          <div className="w-16 md:w-112 animate-float pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              webkit-playsinline="true"
              preload="auto"
              className="w-full h-auto bg-transparent outline-none border-none"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              <source src="/assets/bee-flying.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-[#0a2f14] italic">
              Shall we take a sneak peek?
            </h2>
            <div className="h-1 w-20 bg-[#258c3d] mx-auto mt-4 rounded-full opacity-30" />
          </div>

          <div className="w-16 md:w-112 animate-float pointer-events-none scale-x-[-1]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              webkit-playsinline="true"
              preload="auto"
              className="w-full h-auto bg-transparent outline-none border-none"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              <source src="/assets/bee-flying.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
