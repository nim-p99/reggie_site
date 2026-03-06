import GameSectionWrapper from '@/components/GameSectionWrapper';
import Image from 'next/image';
import Reggie from '@/components/Reggie';
import Logo from '@/components/Logo';
import Description from '@/components/Description';
import Reflection from '@/components/Reflection';
import Mockup from '@/components/Mockup';
import Pages from '@/components/Pages';
import BeeSection from '@/components/BeeSection';
import RecessMockup from '@/components/RecessMockup';
import ReggieMom from '@/components/ReggieMom';
import Brad from '@/components/Brad';
import dynamic from 'next/dynamic';



export default function Home() {
  return (
    <main className="bg-[#258c3d] text-white">
      <section className="relative z-10 w-full flex flex-col items-center justify-start">
        <Logo />
        {/* <Reggie/> */}
      </section>

      <Description/>
      <BeeSection />
      <Mockup />
      <Pages />
      <div className="flex flex-col md:flex-row">
        <Brad />
        <ReggieMom />
      </div>
      <RecessMockup />
      <Reflection />


      {/* 3d layer  */}
      <div className="hidden md:block">
        <GameSectionWrapper />
      </div>
    </main>
  );
}
