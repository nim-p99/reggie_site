import Image from 'next/image';



export default function Logo() {
  return(
    <>
      <section className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <Image 
            src="/assets/reggie_cover_no_title.PNG"
            alt="Reggie Book Cover"
            width={2500}
            height={1400}
            priority 
            className="w-full h-auto block"
          />
          {/* fade image into next component */}
          <div className="absolute bottom-0 left-0 w-full h-40 md:h-40 bg-gradient-to-t from-[#258c3d] to-transparent opacity-100 pointer-events-none z-10"/>
        </div>
        <div className="absolute inset-0 flex items-start justify-center z-20 pt-10">
          <a 
            href="https://www.amazon.co.uk/Reggie-Veggie-Jatin-Sharma/dp/B0DL4CV4GK/ref=sr_1_1?sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 w-full max-w-4xl px-4 cursor-pointer block"
          >
            <div className="group relative w-full max-w-5xl px-4 cursor-pointer">
              <div className="relative w-full max-w-5xl px-4 animate-float transition-all duration-300 hover:brightness-110 group-hover:scale-110 group-hover:rotate-2">
                <Image 
                  src="/assets/logo_border.png" 
                  alt="Reggie the Veggie Logo" 
                  width={600}
                  height={300}
                  priority 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
