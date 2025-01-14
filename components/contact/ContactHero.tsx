'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative bg-[#59B7E7]/5 min-h-[50vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full text-[#B5D858]/5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-sm font-medium text-[#B5D858] mb-4">
              GET IN TOUCH
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s Make a
              <br />
              <span className="text-[#59B7E7]">Difference Together</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Whether you&apos;re looking to volunteer, donate, or learn more about our programs,
              we&apos;re here to help. Reach out to us and become part of our mission to
              empower youth and transform communities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#B5D858]/10 rounded-tr-full" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#59B7E7]/10 rounded-bl-full" />
    </section>
  )
}

