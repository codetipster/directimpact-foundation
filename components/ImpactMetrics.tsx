'use client'

import { useState, useEffect, useRef } from 'react'
//import { Button } from '@/components/ui/button'
import { Users, GraduationCap, Briefcase, Heart, LineChart } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const challenges = [
  {
    icon: Users,
    title: "Youth Unemployment",
    stat: "60%",
    description: "of unemployed people in Africa are youth",
    color: "#B5D858"
  },
  {
    icon: GraduationCap,
    title: "Education Access",
    stat: "1 in 3",
    description: "young people in developing countries lacks access to quality education",
    color: "#59B7E7"
  },
  {
    icon: Briefcase,
    title: "Skills Impact",
    stat: "70%",
    description: "more likely to secure sustainable jobs with vocational training",
    color: "#693B2E"
  },
  {
    icon: LineChart,
    title: "Economic Growth",
    stat: "10x",
    description: "return in economic growth for every $1 invested in youth skills",
    color: "#B5D858"
  },
  {
    icon: Heart,
    title: "Gender Gap",
    stat: "1.5x",
    description: "young women are more likely to be unemployed than young men",
    color: "#59B7E7"
  }
]

function CountUpAnimation({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

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
  }, [target, duration, isVisible])

  return <div ref={elementRef}>{Math.round(count)}</div>
}

export function ImpactMetrics() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Challenge We Face
          </h2>
          <p className="text-gray-600">
            Understanding the scale of youth unemployment and lack of opportunities helps
            us create targeted solutions for sustainable change.
          </p>
        </div>

        {/* Challenges Grid */}
        <div 
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${challenge.color}10` }}
                >
                  <challenge.icon 
                    className="w-8 h-8"
                    style={{ color: challenge.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: challenge.color }}>
                  {challenge.stat.includes('%') ? (
                    <div className="flex items-center">
                      <CountUpAnimation 
                        target={parseInt(challenge.stat)} 
                      />
                      <span>%</span>
                    </div>
                  ) : (
                    challenge.stat
                  )}
                </div>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Together, we can create meaningful change. Join us in our mission to empower
            youth through education, training, and sustainable opportunities.
          </p>
          <Button 
            size="lg"
            className="bg-[#B5D858] hover:bg-[#B5D858]/90"
          >
            Join Our Mission
          </Button>
        </div> */}
      </div>
    </section>
  )
}


