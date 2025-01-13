'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Home, TrendingUp } from 'lucide-react'

const impacts = [
  {
    icon: Users,
    stat: '500+',
    label: 'Youth Empowered',
    description: 'Training and equipping individuals with employable skills.',
  },
  {
    icon: Home,
    stat: '10,000+',
    label: 'Households Impacted',
    description: 'Lifting families out of poverty through ripple effects of empowerment.',
  },
  {
    icon: TrendingUp,
    label: 'Community Transformation',
    description: 'Reducing societal vices like illegal migration, internet fraud, and unemployment.',
  },
]

export function AboutImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-[#59B7E7]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
          </div>

          <div 
            ref={ref}
            className="grid md:grid-cols-3 gap-8"
          >
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#B5D858]/10 
                  flex items-center justify-center mb-4">
                  <impact.icon className="w-8 h-8 text-[#B5D858]" />
                </div>
                {impact.stat && (
                  <div className="text-3xl font-bold text-[#59B7E7] mb-2">
                    {impact.stat}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{impact.label}</h3>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

