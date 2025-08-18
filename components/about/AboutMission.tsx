import Image from 'next/image'

export function AboutMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About Us */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Direct Impact Empowerment, founded in 2024, is a registered NGO in Nigeria and Switzerland dedicated to transforming lives in vulnerable communities. We provide urgent food aid, life-saving medical support, and empower small businesses to break the cycle of poverty. Currently self-funded, we&apos;ve already touched countless lives — from funding emergency surgeries to helping families start income-generating ventures. Our vision is clear: empower youth, save lives, and create lasting change. Join us to make the impact go further.
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Our Team</h3>
            
            {/* Femi and Reuben - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Femi */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/pesin.png" 
                      alt="Femi - Founder & COO" 
                      width={400}
                      height={256}
                      className="w-full h-64 object-contain bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <h4 className="text-xl font-bold text-[#59B7E7] mb-2">Femi – Founder & COO</h4>
                    <p className="text-sm italic text-gray-500 mb-3">&ldquo;No one should be left behind in their time of need.&rdquo;</p>
                    <p className="text-gray-600 text-sm flex-1">
                      I started Direct Impact Empowerment in 2024 with a personal mission — to turn compassion into action. From funding food aid and urgent surgeries to supporting small businesses, I&apos;ve seen first-hand how even one act of kindness can change a life. Today, our registered NGO in Nigeria and Switzerland is still self-funded, but our ambition is global.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reuben */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/reuben.jpeg" 
                      alt="Reuben - CEO" 
                      width={400}
                      height={256}
                      className="w-full h-64 object-contain bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <h4 className="text-xl font-bold text-[#59B7E7] mb-2">Reuben – CEO</h4>
                    <p className="text-sm italic text-gray-500 mb-3">&ldquo;Every life we touch must feel valued.&rdquo;</p>
                    <p className="text-gray-600 text-sm flex-1">
                      A lifelong giver, I met Femi by chance, and our shared vision for helping others brought us together. I trained myself to run an NGO and now lead our on-the-ground efforts — meeting every beneficiary, forging real connections, and making sure our support is personal and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sam and Rosemarie - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sam */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/me.jpeg" 
                      alt="Sam - Tech" 
                      width={400}
                      height={256}
                      className="w-full h-64 object-contain bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <h4 className="text-xl font-bold text-[#59B7E7] mb-2">Sam – Tech</h4>
                    <p className="text-gray-600 text-sm flex-1">
                      Passionate about leveraging technology to create positive social impact. I joined Direct Impact to help build digital solutions that can scale our mission and reach more communities in need.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rosemarie */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/devco.jpeg" 
                      alt="Rosemarie - Development Coordinator" 
                      width={400}
                      height={256}
                      className="w-full h-64 object-contain bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <h4 className="text-xl font-bold text-[#59B7E7] mb-2">Rosemarie – Development Coordinator</h4>
                    <p className="text-gray-600 text-sm flex-1">
                      I connected with Direct Impact because I believe deeply in their mission and share the same heart for giving. In my role, I offer guidance and advice, helping to shape opportunities that grow our reach and deepen our impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Mission */}
          <div className="bg-gradient-to-r from-[#59B7E7]/10 to-[#B5D858]/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#59B7E7] mb-4">Our Shared Mission</h3>
            <p className="text-sm italic text-gray-500 mb-4">&ldquo;Vision, compassion, and action — one life at a time.&rdquo;</p>
            <p className="text-gray-600">
              Together, we are building a movement to reach the most vulnerable with urgent aid, long-term solutions, and hope for the future.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
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

