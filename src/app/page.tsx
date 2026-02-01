import GameSectionWrapper from '@/components/GameSectionWrapper';

export default function Home() {
  return (
    <main className="bg-sky-600 text-white">
      {/* section 1-5 (text/images) */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">reggie the veggie</h1>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">meet reggie</h1>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">take a sneak peak</h1>
      </section>



      {/* 3d layer  */}
      <GameSectionWrapper />
    </main>
  );
}
