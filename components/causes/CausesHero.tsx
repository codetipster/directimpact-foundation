import { Button } from '@/components/ui/button'
import { Users, Briefcase, Building2, HomeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const causes = [
  {
    icon: HomeIcon,
    title: 'Welfare Support for Vulnerable Families',
    description: 'We are committed to supporting underprivileged families by addressing their immediate needs.',
    color: '#59B7E7',
  },
  {
    icon: Users,
    title: 'Tackling Youth Unemployment',
    description: 'Equipping young individuals with skills and resources needed to succeed in the workforce.',
    color: '#B5D858',
  },
  {
    icon: Briefcase,
    title: 'Micro-Credit Support for Entrepreneurs',
    description: 'Providing interest-free loans and startup resources to graduates of our programs.',
    color: '#59B7E7',
  },
  {
    icon: Building2,
    title: 'Building Sustainable Communities',
    description: 'Creating long-term change by fostering sustainable community development.',
    color: '#B5D858',
  },
]

export function CausesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/causes.jpg"
        alt="Smiling children"
        fill
        className="object-cover opacity-20"
        priority
      />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            To Change{' '}
            <span className="text-[#B5D858]">
              Their Stories
            </span>
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Join our mission to empower youth and transform communities. Your 
            support helps create lasting positive change in the lives of those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#B5D858] hover:bg-[#B5D858]/90"
              asChild
            >
              <Link href="/donate">
                DONATE NOW
              </Link>
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/volunteer" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                BE A VOLUNTEER
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${cause.color}20` }}
              >
                <cause.icon
                  className="w-6 h-6"
                  style={{ color: cause.color }}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cause.title}
              </h3>
              <p className="text-white/80 text-sm">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

