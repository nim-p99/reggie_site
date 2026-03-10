

import Image from 'next/image';


export default function Brad() {
  return(
    <>
      <section className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <Image 
            src="/assets/brad.PNG"
            alt="Brad"
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
