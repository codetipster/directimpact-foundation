import Image from 'next/image';

export default function CEOBio() {
  return (
    <div className="max-w-[860px] mx-auto px-6 py-16 md:py-20 text-[#1a1a1a] font-sans">
      {/* Label & Header */}
      <div className="text-[12px] font-bold tracking-[2px] uppercase text-[#7B1E1E] mb-3">
        A word from our CEO
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
        The man on the ground
      </h2>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-16 items-start">
        
        {/* Biography Text Content */}
        <div className="flex flex-col space-y-6 text-[17px] leading-[1.85] text-[#2a2a2a]">
          <p>
            When the platform we had both been part of fell apart and everyone went their
            separate ways, I approached Femi. I had noticed something about her during our
            time together. Of everyone in that group, she was a giver. The same as me.
            The difference was that I was based in Nigeria and did not have much. But she
            was the logical person to ask.
          </p>

          <p>
            She said no at first. She told me she would rather support someone who was
            already running an NGO than start something new. I told her not to worry,
            that I would do it, that I would handle it. And I meant that. What I did not
            know at the time was how much work was actually involved. I thought it was
            something I could just start doing.
          </p>

          <p>
            So when she said she was going to send me for training, I was genuinely
            surprised. But that training opened my eyes. I realised that what we had been
            doing before was not NGO work. We were just doing something. What exactly,
            I am still not sure. But it was not this.
          </p>

          <p>
            The journey has been long. It has been tiring. But I have stayed committed,
            and with Femi's support, we have taken giant strides.
          </p>

          <p>
            One of the things that makes me most proud is that through Direct Impact, I
            have become even more respected in my community. People look up to me. People
            come to me with their problems and ask whether our organisation can help. 
          </p>

          <p className="font-semibold italic">That still makes me smile.</p>

          <p>
            Femi had always wanted to stay in the background. But the work was too much
            for one person, and she had to step forward. From the very beginning she told
            me that I would be the CEO, that I would run things. And I am. I carry that
            title with so much pride.
          </p>

          <p className="text-[#7B1E1E] font-semibold">
            We are happy. We are proud. And we know that what we are doing is scalable.
            If we have achieved everything we have with no external funding, just imagine
            what becomes possible when support from the outside finally arrives.
          </p>

          <p className="text-sm text-gray-500 italic mt-2 border-t pt-4">
            Reuben Eka, CEO, Direct Impact Empowerment Foundation, Nigeria
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[3/4] bg-[#f5eeee] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/reuben.jpeg" // Ensure this file is in your /public folder
            alt="Reuben Eka - CEO"
            fill
            className="object-cover"
            priority // Helps with LCP (loading speed) for the main image
          />
        </div>

      </div>
    </div>
  );
}
