import Image from 'next/image'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Tommy Lee Jones',
    role: 'VOLUNTEER',
    position: 'VP of Marketing',
    image: '/placeholder.svg',
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Marina Troynar',
    role: 'VOLUNTEER',
    position: 'VP of Marketing',
    image: '/placeholder.svg',
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Eduard Morry',
    role: 'VOLUNTEER',
    position: 'VP of Marketing',
    image: '/placeholder.svg',
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
      linkedin: '#',
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-[#F2E5E5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Allow me to introduce
            <br />
            our team of experts.
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg overflow-hidden">
              {/* Member Image */}
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover grayscale"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm">
                  {member.position}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#693B2E] text-sm mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <Link 
                    href={member.social.facebook}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={member.social.instagram}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={member.social.youtube}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

