
import Image from 'next/image';


export default function ReggieMom() {
  return(
    <>
      <section className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <Image 
            src="/assets/reggie_mom.PNG"
            alt="Reggie Reflection"
            width={2500}
            height={1400}
            priority 
            className="w-full h-auto block"
          />
          {/* fade image into next component */}
          {/* <div className="absolute bottom-0 left-0 w-full h-40 md:h-40 bg-gradient-to-t from-[#258c3d] to-transparent opacity-100 pointer-events-none z-10"/> */}
        </div>
      </section>
    </>
  );
}
