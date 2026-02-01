"use client";

import dynamic from 'next/dynamic';


// as page.tsx is a server component, we cannot use dynamic{ssr:false}


const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-slate-900" /> 
});

export default function Visuals() {
  return <Scene />;
}
