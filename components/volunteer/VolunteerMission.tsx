import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Hand, Target } from 'lucide-react'

const impactCards = [
  {
    title: 'We help Nepal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1544461772-722f499fa5aa',
    link: '/causes/nepal'
  },
  {
    title: 'We help India',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f',
    link: '/causes/india'
  }
]

export function VolunteerMission() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              When supporting us, we
              <br />
              fight together to survive.
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                By standing with us, you’re investing in a future where youth thrive as skilled professionals and entrepreneurs. Together, we combat the challenges of unemployment and poverty, fostering hope, stability, and progress in underserved communities.
              </p>
              <p className="text-gray-600">
                Discover how our programs are reshaping communities, from fashion design training to entrepreneurial incubation. Together, we’re creating a ripple effect of empowerment and sustainable development.
              </p>
              <Link 
                href="/about"
                className="text-[#59B7E7] hover:underline inline-block"
              >
                Learn more
              </Link>

              {/* Mission and Goals */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#B5D858]/10">
                    <Hand className="w-6 h-6 text-[#B5D858]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Our mission</h3>
                    <p className="text-gray-600">
                      To empower youth with specialized skills, foundational education, and entrepreneurial tools, enabling them to drive economic growth and foster social transformation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#59B7E7]/10">
                    <Target className="w-6 h-6 text-[#59B7E7]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Our goals</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Train 500 youths in specialist fashion design by 2028.</li>
                      <li>Establish micro-credit schemes to fund entrepreneurial ventures.</li>
                      <li>Create a scalable empowerment model for adoption in other regions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Impact Cards */}
          <div className="space-y-6">
            {impactCards.map((card) => (
              <div key={card.title} className="relative overflow-hidden rounded-lg">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {card.description}
                    </p>
                    <Button
                      asChild
                      className="w-fit bg-[#B5D858] hover:bg-[#B5D858]/90"
                    >
                      <Link href={card.link}>
                        READ MORE
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

