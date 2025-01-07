import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function VolunteerCTA() {
  return (
    <section className="relative py-40">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-[#F2E5E5]" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="relative bg-[#693B2E] p-16 flex flex-col justify-center min-h-[400px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <pattern
                    id="zigzag"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(-10)"
                  >
                    <path
                      d="M 0 5 L 5 0 L 10 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#zigzag)" />
                </svg>
              </div>
              
              <p className="text-white/80 uppercase tracking-wider text-sm mb-4 relative z-10">
                SUBMIT YOUR APPLICATION NOW
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
                Join Our Team as a
                <br />
                Volunteer
              </h2>
              <Button
                variant="secondary"
                className="bg-[#F2E5E5] hover:bg-[#F2E5E5]/90 text-[#693B2E] w-fit relative z-10"
              >
                Apply Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
                alt="Volunteers working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

