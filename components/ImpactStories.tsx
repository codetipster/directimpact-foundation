'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//import { Button } from '@/components/ui/button'
import { ChevronRight, Users, GraduationCap, Briefcase } from 'lucide-react'
import Image from 'next/image'

const initiatives = [
  {
    id: 1,
    title: "Skills Training",
    icon: GraduationCap,
    stat: "500+",
    description: "Youth trained annually in vocational skills",
    story: {
      name: "Sarah Johnson",
      role: "Web Developer",
      quote: "The training program gave me the skills and confidence to pursue my dream career in tech.",
      image: "/placeholder.svg",
      impact: "Now earning 3x her previous income"
    }
  },
  {
    id: 2,
    title: "Business Incubation",
    icon: Briefcase,
    stat: "200+",
    description: "Small businesses launched through microloans",
    story: {
      name: "Michael Chen",
      role: "Entrepreneur",
      quote: "With the microloan and mentorship, I was able to start my sustainable farming business.",
      image: "/placeholder.svg",
      impact: "Created jobs for 12 other youth"
    }
  },
  {
    id: 3,
    title: "Community Impact",
    icon: Users,
    stat: "50+",
    description: "Partner communities empowered",
    story: {
      name: "Maria Rodriguez",
      role: "Community Leader",
      quote: "Our village has transformed through the youth empowerment programs.",
      image: "/placeholder.svg",
      impact: "Youth unemployment reduced by 40%"
    }
  }
]



export function ImpactStories() {
  const [activeInitiative, setActiveInitiative] = useState(initiatives[0])
  

  return (
    <section className="py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            How We&apos;re Making a Difference
          </h2>
          <p className="text-gray-600">
            Through targeted programs and initiatives, we&apos;re creating lasting change
            in communities across Africa.
          </p>
        </div>

        {/* Impact Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Initiatives List */}
          <div className="space-y-4">
            {initiatives.map((initiative) => (
              <motion.div
                key={initiative.id}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  activeInitiative.id === initiative.id
                    ? 'bg-[#B5D858] text-white'
                    : 'bg-white hover:bg-[#B5D858]/10'
                }`}
                onClick={() => setActiveInitiative(initiative)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-white/20">
                    <initiative.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{initiative.title}</h3>
                    <p className={
                      activeInitiative.id === initiative.id
                        ? 'text-white/80'
                        : 'text-gray-600'
                    }>
                      {initiative.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-6 h-6 transition-transform ${
                    activeInitiative.id === initiative.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Story */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInitiative.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6">
                <Image
                  src={activeInitiative.story.image}
                  alt={activeInitiative.story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold">{activeInitiative.story.name}</h4>
                    <p className="text-[#B5D858]">{activeInitiative.story.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#59B7E7]">
                      {activeInitiative.stat}
                    </div>
                    <p className="text-sm text-gray-600">Impact Number</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  &quot;{activeInitiative.story.quote}&quot;
                </blockquote>
                <div className="bg-[#B5D858]/10 p-4 rounded-lg">
                  <p className="text-[#693B2E] font-semibold">
                    Impact: {activeInitiative.story.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Impact Map */}
        
        {/* Call to Action */}
        
      </div>
    </section>
  )
}

