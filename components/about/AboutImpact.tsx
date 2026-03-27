"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Home, TrendingUp } from "lucide-react"

const impacts = [
  {
    icon: Users,
    stat: "120+",
    label: "Individuals Already Supported",
    description: "We have already supported individuals through direct intervention and emergency relief initiatives. Our work is focused on measurable outcomes, not one-time distribution.",
  },
  {
    icon: Home,
    stat: "",
    label: "Built for Scale",
    description: "Our programme is designed for replication through structured delivery, measurable tracking, and community-led implementation — allowing us to expand without compromising quality.",
  },
  {
    icon: TrendingUp,
    stat: "",
    label: "Global Standards, Local Impact",
    description: "Registered in Switzerland and Nigeria, we combine international structure, accountability, and programme discipline with local delivery and community understanding.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Impact Snapshot</h2>
            <p className="text-white/80 max-w-2xl mx-auto">We are building measurable pathways from crisis to independence.</p>
          </div>

          <div ref={ref} className="grid grid-cols-1 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 w-full"
              >
                <div className="flex items-center">
                  <div
                    className="w-16 h-16 rounded-full bg-[#B5D858]/10 
                    flex items-center justify-center mr-6"
                  >
                    <impact.icon className="w-8 h-8 text-[#B5D858]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {impact.stat && <div className="text-3xl font-bold text-[#59B7E7] mr-3">{impact.stat}</div>}
                      <h3 className="text-xl font-bold">{impact.label}</h3>
                    </div>
                    <p className="text-gray-600">{impact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

