'use client';

import Link from "next/link";

export default function HomePageAndAbout() {
  const dipStages = [
    { 
      stage: 'Stage 01', 
      title: 'Crisis Response', 
      desc: 'Emergency relief delivered directly. Food, water, and immediate support.' 
    },
    { 
      stage: 'Stage 02', 
      title: 'Stabilisation', 
      desc: 'Medical care and basic needs secured before anything else moves forward.' 
    },
    { 
      stage: 'Stage 03', 
      title: 'Economic Restart', 
      desc: 'Seed capital, equipment, and training tailored to each person.' 
    },
    { 
      stage: 'Stage 04', 
      title: 'Sustained Independence', 
      desc: 'Regular follow-up visits and support until fully self-sufficient.' 
    },
  ];

  return (
    <main className="bg-white text-[#1a1a1a] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#7B1E1E] px-6 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-64 -mt-64"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block px-5 py-2 mb-8 text-[11px] font-black uppercase tracking-[0.4em] text-white/90 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
            Direct Impact Empowerment Foundation
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-white leading-[1.1] mb-8 tracking-tight">
            {`We go to the people every other system has missed.`}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {`Registered in Switzerland and Nigeria, we walk alongside vulnerable people from the moment of crisis to the day of independence.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link 
              href="/donate" 
              className="px-10 py-4 bg-white text-[#7B1E1E] font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              {`Support Our Work`}
            </Link>
            <Link 
              href="#pathway" 
              className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {`See the Impact`}
            </Link>
          </div>
        </div>
      </section>

      {/* --- THE PATHWAY --- */}
      <section id="pathway" className="py-24 bg-[#FDFDFD] px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">{`The Dignity to Independence Pathway`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dipStages.map((d, i) => (
              <div key={d.stage} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold mb-6 mx-auto" style={{ backgroundColor: '#7B1E1E' }}>
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STORY & STATS --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              {`"She was sitting on the ground when we found her."`}
            </h2>
            <div className="bg-[#7B1E1E]/5 p-10 rounded-3xl border-l-8 border-[#7B1E1E] italic font-serif text-2xl text-[#1a1a1a] mb-6">
              {`"We gave her the capital to restart her business. No strings attached. No debt to repay."`}
            </div>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {`Today, she earns a living. Her grandchildren are in school. This is the Direct Impact model.`}
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-[40px] p-12 text-white shadow-3xl">
            <div className="space-y-10">
              {[
                ['$70', 'Emergency relief package'],
                ['$200', 'Full journey to independence'],
                ['300+', 'Lives touched to date'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-5xl font-serif text-[#7B1E1E] mb-1">{num}</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.25em] font-bold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}