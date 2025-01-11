'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const metrics = [
  { value: 100, label: 'People Impacted' },
  { value: 10000, label: 'Volunteer Hours' },
  { value: 300000, label: 'Funds Raised' },
]

const partners = [
  { name: 'PerceptiveSec', logo: '/perceptive.jpeg' },
  { name: 'insiderlogo', logo: '/insiderlogo.png' },
  { name: 'local', logo: '/local.jpeg' },
]

function CountUpAnimation({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.min(target * progress, target))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, isInView])

  return (
    <div ref={elementRef}>
      {count >= 1000000
        ? `${(count / 1000000).toFixed(1)}M+`
        : count >= 1000
        ? `${(count / 1000).toFixed(0)}k+`
        : `${Math.round(count)}+`}
    </div>
  )
}

export function OurPartners() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const partnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="flex items-center justify-center gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-6 h-6 rounded-full bg-[#B5D858] flex items-center justify-center"
              >
                <Check className="w-4 h-4 text-white" />
              </motion.div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-2xl text-[#59B7E7]">
                  <CountUpAnimation target={metric.value} />
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#59B7E7]/10 py-12 px-4 rounded-lg relative overflow-hidden"
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center font-semibold mb-8"
            >
              Organisations that Support Our Cause
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  variants={partnerVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-16 w-auto" // Changed from h-8 to h-16
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

