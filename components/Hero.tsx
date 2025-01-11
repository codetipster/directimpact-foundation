import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative bg-[#59B7E7]/5">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full text-[#B5D858]/10"
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

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-20">
          <div className="relative z-10">
            <p className="text-black mb-4">Direct Impact Empowerment Foundations</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#59B7E7] mb-6">
              Empowering Futures,
              <br />
              Transforming Lives
              <br />
              Together
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
            Our vision is to empower youth in developing countries by equipping them with opportunities for meaningful work, promoting sustainable livelihoods, and driving economic growth
            </p>
            <Button
              size="lg"
              className="bg-[#B5D858] hover:bg-[#59B7E7]/90"
            >
              Explore Causes
            </Button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-xl mx-auto">
              <Image
                src="/hero.jpg"
                alt="Young boy in yellow and white clothing"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

