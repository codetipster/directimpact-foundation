"use client";

import Image from 'next/image';

export default function CEOBio() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- Image Section (Grid Span 5) --- */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative Background Element */}
          <div className="absolute -inset-4 bg-[#7B1E1E]/5 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
          
          <div className="relative aspect-[4/5] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/reuben.jpeg"
              alt="Reuben Eka - CEO"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority 
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-xl hidden md:block border border-gray-50">
            <p className="text-[#7B1E1E] font-black text-2xl mb-1">CEO</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Nigeria Operations</p>
          </div>
        </div>

        {/* --- Text Content (Grid Span 7) --- */}
        <div className="lg:col-span-7 lg:pl-10">
          <div className="space-y-8">
            {/* Header Area */}
            <div>
              <span className="text-[#7B1E1E] text-xs font-black uppercase tracking-[0.3em] block mb-4">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
                {`Reuben Eka: The man on the ground`}
              </h2>
            </div>

            {/* Narrative Body */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                {`When the platform we had both been part of fell apart, I approached Femi. Of everyone in that group, she was a giver. The same as me. The difference was that I was based in Nigeria and did not have much.`}
              </p>

              <div className="bg-[#7B1E1E]/5 p-8 rounded-2xl border-l-4 border-[#7B1E1E] my-8">
                <p className="text-[#1a1a1a] font-serif italic text-xl">
                  {`"She said she was going to send me for training. That training opened my eyes. I realized that what we had been doing before was not NGO work. We were just doing 'something.' But it was not this."`}
                </p>
              </div>

              <p>
                {`The journey has been long and tiring, but through Direct Impact, I have become respected in my community. People come to me with their problems and ask whether our organization can help.`}
              </p>

              <p className="text-[#7B1E1E] font-medium">
                {`"We know that what we are doing is scalable. If we achieved this with no external funding, imagine what becomes possible when support finally arrives."`}
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-gray-100">
              <p className="font-serif text-2xl text-[#1a1a1a]">Reuben Eka</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest mt-1">
                Chief Executive Officer, Nigeria
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}