export default function BeeWithReview({ review, flipped }: { review: string; flipped?: boolean }) {
  return (
    <section className="w-full flex justify-center px-6 py-20 overflow-visible">
      <div className={`flex items-center w-full max-w-6xl gap-8 md:gap-16 ${flipped ? 'flex-row-reverse' : 'flex-row'}`}>
        
        <div className={`w-48 sm:w-72 md:w-96 lg:w-[450px] animate-float pointer-events-none shrink-0 ${flipped ? 'scale-x-[-1]' : ''}`}>
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/assets/bee-flying.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative flex-1 max-w-xl">
          <div className="relative bg-white text-[#0a2f14] p-8 md:p-12 rounded-[2.5rem] shadow-2xl animate-float-delayed border-4 border-[#258c3d]/5">
            
            <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ${flipped ? 'right-[-20px] border-l-[25px] border-l-white' : 'left-[-20px] border-r-[25px] border-r-white'}`} />
            
            <p className="text-xl md:text-3xl italic leading-relaxed font-serif text-gray-800">
              "{review}"
            </p>
            
            <div className="flex items-center gap-2 mt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <span className="text-sm font-sans font-bold uppercase tracking-widest text-gray-400 ml-3">Happy Customer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
