export function AboutMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Who We Are */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Direct Impact Empowerment Foundation is a nonprofit organization dedicated 
                to addressing youth unemployment and poverty in Africa. Founded with a 
                vision to empower young people and foster sustainable development, we focus 
                on creating opportunities through skill acquisition, entrepreneurial support, 
                and community-driven initiatives.
              </p>
              <p>
                We are based in Apata, Ibadan, Nigeria, where we&apos;re building a model for 
                youth empowerment that can be replicated across the continent. Our holistic 
                approach combines vocational training, financial support, and business 
                development to unlock the potential of Africa&apos;s youth, enabling them to 
                contribute meaningfully to their communities and economies.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#59B7E7]/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#59B7E7] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower at least 500 youth every five years through specialist training, 
                business incubation, micro-credit access, and foundational education, 
                equipping them with the tools to build thriving careers, businesses, 
                and communities.
              </p>
            </div>

            <div className="bg-[#B5D858]/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#B5D858] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A future where every young person has the opportunity to lead a meaningful 
                life, free from poverty and societal challenges, while contributing to a 
                prosperous and inclusive society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

