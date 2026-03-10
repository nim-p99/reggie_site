import Image from 'next/image';



export default function Mockup() {
  return(
    <>
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-20">
        <div className="w-full relative max-w-5xl mx-auto px-6">
          <Image 
            src="/assets/reggie_mockup_3.png"
            alt="Reggie Mockup"
            width={1500}
            height={1000}
            priority 
            className="w-full h-auto block"
          />
        </div>
      </section>
    </>
  );
}



