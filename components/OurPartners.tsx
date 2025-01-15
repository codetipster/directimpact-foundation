'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const partners = [
  { name: 'PerceptiveSec', logo: '/perceptive.jpeg' },
  { name: 'insiderlogo', logo: '/insiderlogo.png' },
  { name: 'local', logo: '/local.jpeg' },
  // Duplicate partners to create seamless loop
  { name: 'PerceptiveSec', logo: '/perceptive.jpeg' },
  { name: 'insiderlogo', logo: '/insiderlogo.png' },
  { name: 'local', logo: '/local.jpeg' },
]

export function OurPartners() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#59B7E7]/10 py-12 px-4 rounded-lg relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg
              className="absolute w-full h-full text-black"
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

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center font-semibold mb-8"
            >
              Organisations that Support Our Cause
            </motion.p>

            {/* Sliding Partners Container */}
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-slide-partners">
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="h-16 w-auto"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add the animation to your global CSS or a style tag */}
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-partners {
          animation: slide 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-slide-partners:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

