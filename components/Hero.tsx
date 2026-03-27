
'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "Building pathways\nfrom vulnerability\nto economic independence",
    subtitle: "Dignity to Independence Programme",
    description: "Through the Dignity to Independence Programme, we move individuals from crisis to stability, from stability to income, and from income to independence through a structured and measurable journey.",
    image: "/hero.jpg"
  },
  {
    title: "A structured,\nrepeatable model\nfor lasting change",
    subtitle: "Our Solution",
    description: "Direct Impact Empowerment delivers a structured model that transitions individuals from vulnerability to sustainable income. This is not a one-time intervention — it is a guided journey toward independence.",
    image: "/global.jpeg"
  },
  {
    title: "Global Standards,\nLocal Impact",
    subtitle: "Registered in Switzerland and Nigeria",
    description: "We combine international structure, accountability, and programme discipline with local delivery and community understanding. Designed globally. Delivered locally.",
    image: "/oneworld.jpeg"
  }
];


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }, [isAnimating])

  const prevSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

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
          {/* Content Section */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                <p className="text-black mb-4">{slides[currentSlide].subtitle}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#59B7E7] mb-6 whitespace-pre-line">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-gray-600 mb-8 max-w-lg">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-white"
                    asChild
                  >
                    <a href="/causes">View Our Programme</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#59B7E7] text-[#59B7E7] hover:bg-[#59B7E7] hover:text-white"
                    asChild
                  >
                    <a href="/contact">Partner with Us</a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt="Featured image"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#59B7E7]" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-[#59B7E7]" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'w-8 bg-[#59B7E7]'
                      : 'bg-[#59B7E7]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

