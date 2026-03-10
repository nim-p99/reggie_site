import Image from 'next/image';

export default function BeeWithReview({ review, flipped }: { review: string; flipped?: boolean }) {
  return (
    <section className="w-full flex justify-center px-4 py-12 md:py-20 overflow-hidden">
      <div className={`flex flex-col ${flipped ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full max-w-6xl gap-6 md:gap-16`}>
        
        {/* THE GIANT BEE CONTAINER */}
        <div className={`w-64 sm:w-72 md:w-96 lg:w-[450px] shrink-0 ${flipped ? 'md:scale-x-[-1]' : ''}`}>
          {/* Mobile: PNG Bee */}
          <div className="md:hidden animate-float">
            <Image 
              src="/assets/bee.png" 
              alt="Bee" 
              width={400} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
          {/* Desktop: MP4 Bee */}
          <div className="hidden md:block animate-float">
            <video autoPlay loop muted playsInline className="w-full h-auto">
              <source src="/assets/bee-flying.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* THE SPEECH BUBBLE */}
        <div className="relative w-full max-w-xl">
          <div className="relative bg-white text-[#0a2f14] p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-[#258c3d]/5">
            {/* The Bubble Tail - Hidden on mobile because it stacks vertically */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ${flipped ? 'right-[-20px] border-l-[25px] border-l-white' : 'left-[-20px] border-r-[25px] border-r-white'}`} />
            
            <p className="text-lg md:text-3xl italic leading-relaxed font-serif font-bold text-gray-800">
              "{review}"
            </p>
            
            <div className="flex items-center gap-2 mt-4 md:mt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
