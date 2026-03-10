import Image from 'next/image';

export default function ReflectionFooter() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {/* Reggie reflection image  */}
        <Image 
          src="/assets/reflection.PNG"
          alt="Reggie Reflection"
          width={2500}
          height={1400}
          priority 
          className="w-full h-auto block"
        />

        {/* Footer */}
        <div className="absolute top-[15%] md:top-[35%] left-[5%] md:left-[8%] max-w-[85%] md:max-w-[40%] z-20">
          <div className="space-y-8 md:space-y-12">
            
            <h2 className="text-3xl md:text-5xl font-serif text-[#0a2f14] leading-tight tracking-tight drop-shadow-sm">
              Thank you for visiting <br /> Reggie's website!
            </h2>

            <div className="flex flex-col space-y-8">
              
              {/* authon - jat */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden aspect-square">
                  <Image 
                    src="/assets/jat.webp"
                    alt="Jatin"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-xl text-[#0a2f14]/90 mb-1 font-medium">
                    Jatin (Author)
                  </p>
                  <a 
                    href="mailto:jatin@example.com" 
                    className="inline-flex items-center text-[#0a2f14] hover:text-[#258c3d] transition-colors"
                    aria-label="Email Jatin"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* illustrator - nim */}
              <div className="flex items-center gap-4 md:gap-5 group">
                <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden aspect-square">
                  <Image 
                    src="/assets/nim.webp"
                    alt="Nimesh"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-xl text-[#0a2f14]/90 mb-1 font-medium">
                    Nimesh (Illustrator)
                  </p>
                  <a 
                    href="mailto:nimeshpatel99@hotmail.com" 
                    className="inline-flex items-center text-[#0a2f14] hover:text-[#258c3d] transition-colors"
                    aria-label="Email Nimesh"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
