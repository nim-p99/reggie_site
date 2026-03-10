import GameSectionWrapper from '@/components/GameSectionWrapper';
import Image from 'next/image';
import Reggie from '@/components/Reggie';
import Logo from '@/components/Logo';
import Description from '@/components/Description';
import ReflectionFooter from '@/components/Reflection';
import Mockup from '@/components/Mockup';
import Pages from '@/components/Pages';
import BeeSection from '@/components/BeeSection';
import RecessMockup from '@/components/RecessMockup';
import ReggieMom from '@/components/ReggieMom';
import Brad from '@/components/Brad';
import BeeWithReview from '@/components/BeeWithReview';
import FloatingBuyButton from '@/components/FloatingBuyButton';

export default function Home() {
  return (
    <main className="bg-[#258c3d] text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative z-10 w-full flex flex-col items-center">
        <Logo />
      </section>

      <Description />
      
      <BeeSection />

      <section className="bg-white pb-20">
        <Mockup />
        <Pages />
      </section>


      <section className="flex flex-col items-center bg-white">
          <BeeWithReview 
            review="This book is more than just a story—it’s an invitation for kids to be proud of who they are."  
          />
        </section>

      <section className="bg-[#1b4332] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Meet the Family</h2>
          <p className="text-white/80"></p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-white p-4 shadow-2xl rounded-sm">
            <Brad />
            <p className="text-black text-center font-serif mt-2">Big Brother Brad</p>
          </div>
          <div className="rotate-[3deg] hover:rotate-0 transition-transform duration-500 bg-white p-4 shadow-2xl rounded-sm">
            <ReggieMom />
            <p className="text-black text-center font-serif mt-2">Reggie's Mom</p>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-white">
        <RecessMockup />
      </section>

      <section className="flex flex-col items-end px-10 bg-white">
        <BeeWithReview 
          flipped
          review="I've read the book to my class on many occasions as my Year 1 children just can't get enough of it." 
        />
      </section>

      <section className="bg-white">
        <ReflectionFooter />
      </section>

      <FloatingBuyButton />

      {/* 3D LAYER */}
      {/* <div className="hidden md:block"> */}
      {/*   <GameSectionWrapper /> */}
      {/* </div> */}
    </main>
  );
}
