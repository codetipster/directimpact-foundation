"use client";

import Image from 'next/image';

export default function FounderBio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- Text Content (Grid Span 7) --- */}
        <div className="lg:col-span-7 lg:pr-10 order-2 lg:order-1">
          <div className="space-y-8">
            {/* Header Area */}
            <div>
              <span className="text-[#7B1E1E] text-xs font-black uppercase tracking-[0.3em] block mb-4">
                Our Origins
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
                {`Femi: Why I do this`}
              </h2>
            </div>

            {/* Narrative Body */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                {`I finally said yes to Reuben because he told me he would do the work himself. All I needed to do was support him. I thought I would send him for proper NGO management training so he would know what it truly means to run an organization, and he would take it from there. I genuinely believed I would not need to roll up my sleeves.`}
              </p>

              <div className="bg-[#7B1E1E]/5 p-8 rounded-2xl border-l-4 border-[#7B1E1E] my-8">
                <p className="text-[#1a1a1a] font-serif italic text-xl">
                  {`"What I did not know was that it was a set-up. One that even Reuben was not aware of."`}
                </p>
              </div>

              <p>
                {`This work means more to me than I can put into words. I have cried over cases that stayed with me, and for people I could not reach fast enough. But doing this makes me happy in a way that nothing else does. I could do this full time without being paid a single penny, just to see someone's life change because I did not walk away.`}
              </p>

              <p>
                {`The people we serve are not statistics. They are human beings and they are treated with dignity and respect, every single time. If that were me, would I not want someone to show up?`}
              </p>

              <p className="text-[#7B1E1E] font-medium text-xl font-serif italic">
                {`"To be kind, all you need to do is mentally swap places. Just mentally swap places."`}
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-gray-100">
              <p className="font-serif text-2xl text-[#1a1a1a]">Femi</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">
                Founder, Direct Impact Empowerment Foundation
              </p>
            </div>
          </div>
        </div>

        {/* --- Image Section (Grid Span 5) --- */}
        <div className="lg:col-span-5 relative group order-1 lg:order-2">
          {/* Decorative Background Element */}
          <div className="absolute -inset-4 bg-[#7B1E1E]/5 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          
          <div className="relative aspect-[4/5] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/pesin.png"
              alt="Femi - Founder"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority 
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl hidden md:block border border-gray-50">
            <p className="text-[#7B1E1E] font-black text-2xl mb-1">Founder</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Vision & Strategy</p>
          </div>
        </div>

      </div>
    </div>
  );
}