"use client";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[clamp(32px,6vw,64px)] font-serif text-[#1a1a1a] leading-[1.1] mb-10">
          We are self-funded. <br/>
          <span className="text-[#7B1E1E]">Not out of choice, but out of default.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-gray-100 pt-12">
          <div>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Looking away has always been the most difficult thing to do. Year after year, 
              we have found ourselves deeper in the trenches of humanity.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-gray-500 leading-relaxed">
              Before we helped a single person, we invested in formal NGO management 
              training for our in-country CEO. We built governance first. 
              Because we refused to let this be the blind leading the blind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}