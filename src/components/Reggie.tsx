import Image from 'next/image';

export default function Reggie() {
  return(
    <div className="mt-4 w-full max-w-md md:max-w-xl">
      <Image 
        src="/assets/reggie_border.png" 
        alt="Reggie the Veggie himself" 
        width={800} 
        height={800}
        className="w-full h-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
      />
    </div>
  );
}
