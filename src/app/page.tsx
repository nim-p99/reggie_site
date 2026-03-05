import GameSectionWrapper from '@/components/GameSectionWrapper';
import Image from 'next/image';
import Reggie from '@/components/Reggie';
import Logo from '@/components/Logo';
import Description from '@/components/Description';
import Reflection from '@/components/Reflection';
import Mockup from '@/components/Mockup';


export default function Home() {
  return (
    <main className="bg-[#258c3d] text-white">
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-start">
        <Logo />
        {/* <Reggie/> */}
      </section>

      <Description/>
      <Reflection />
      <Mockup />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">take a sneak peak</h1>
      </section>



      {/* 3d layer  */}
      <GameSectionWrapper />
    </main>
  );
}
