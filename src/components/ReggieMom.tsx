
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
        </div>
      </section>
    </>
  );
}
