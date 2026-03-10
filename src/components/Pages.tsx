import Image from 'next/image';



export default function Page1() {
  return(
    <>
      <section className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <Image 
            src="/assets/reggie_mockup_4.png"
            alt="Reggie Pages"
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
