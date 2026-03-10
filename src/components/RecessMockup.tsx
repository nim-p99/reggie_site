import Image from 'next/image';


export default function RecessMockup() {
  return (
    <section className="relative w-full">
      <div className="w-full">
        <Image 
          src="/assets/recess_mockup.png"
          alt="Reggie Pages"
          width={2500}
          height={1400}
          priority 
          className="w-full h-auto block"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
