//import Image from 'next/image'

export function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Direct Impact Empowerment Foundation was born out of a desire to 
                  address the challenges of unemployment and poverty in Nigeria. Our 
                  founders, led by Eka Oga Reuben, saw the immense potential in youth 
                  across Apata, Ibadan, and envisioned a future where every young person 
                  had access to meaningful opportunities.
                </p>
                <p>
                  With a team of passionate professionals, we began this journey by 
                  focusing on the untapped potential in Nigeria&apos;s fashion industry—a 
                  sector capable of transforming lives and contributing significantly 
                  to the economy. Today, we continue to grow, driven by our unwavering 
                  commitment to create a sustainable model for youth empowerment.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <video
                src="/aboutvid.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

