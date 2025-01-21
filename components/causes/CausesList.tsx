'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HomeIcon, Users, Briefcase, Building2 } from 'lucide-react'

const causes = [
  {
    icon: HomeIcon,
    title: "Welfare Support for Vulnerable Families",
    summary: "We are committed to supporting underprivileged families by addressing their immediate needs. Our welfare programs provide essentials like food, medical assistance, and financial aid to families struggling to make ends meet. This cause is central to our mission of alleviating poverty and ensuring that no one is left behind. Your support helps us extend a lifeline to those who need it the most.",
    image: "/rpa.jpeg",
    phase: 1
  },
  {
    icon: Users,
    title: "Tackling Youth Unemployment",
    summary: "Youth unemployment is a pressing issue, and we aim to address it through innovative programs. Our focus is on equipping young individuals with the skills and resources they need to succeed in the workforce. Through initiatives like specialist fashion design training and business incubation, we empower youth to become self-reliant and economically productive. Unfortunately, this phase is yet to take off due to funding limitations, but with your support, we can turn this vision into reality.",
    image: "/unemploy.jpg",
    phase: 2
  },
  {
    icon: Briefcase,
    title: "Micro-Credit Support for Entrepreneurs",
    summary: "Access to funding is a significant barrier for many aspiring entrepreneurs. Our micro-credit scheme is designed to provide interest-free loans and startup resources to graduates of our programs. By enabling them to purchase equipment and start their businesses, we aim to foster a culture of entrepreneurship and drive economic growth within their communities.",
    image: "/sew.jpg",
    phase: 2
  },
  {
    icon: Building2,
    title: "Spreading Love and Hope | Supporting the Vulnerable During Festive Seasons",
    summary: "At Direct Impact Empowerment we believe that no one should feel left behind, especially during festive periods. That’s why we reach out to the underprivileged and vulnerable in our community to spread joy and provide relief.Our initiative focuses on supplying essential food items and financial support, ensuring families can celebrate the season with dignity and happiness. Each contribution makes a meaningful difference in the lives of those who need it most.",
    image: "/love.jpeg",
    phase: 2
  }
]

export function CausesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Journey Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Journey of Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#59B7E7]/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#59B7E7]/20 flex items-center justify-center">
                  <span className="text-[#59B7E7] font-bold">1</span>
                </div>
                <h3 className="font-bold text-xl">Phase One</h3>
              </div>
              <p className="text-gray-600">
                Focused on reaching out to the vulnerable and underprivileged, offering welfare support 
                that is well-documented. This includes providing food, medical assistance, and 
                financial aid to struggling families.
              </p>
            </div>
            <div className="bg-[#B5D858]/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#B5D858]/20 flex items-center justify-center">
                  <span className="text-[#B5D858] font-bold">2</span>
                </div>
                <h3 className="font-bold text-xl">Phase Two</h3>
              </div>
              <p className="text-gray-600">
                Designed to tackle youth unemployment through programs like specialist fashion design 
                training, business incubation, and micro-credit support. Unfortunately, this phase 
                has not taken off yet due to financial constraints, but it remains central to our 
                long-term vision.
              </p>
            </div>
          </div>
        </div>

        {/* Individual Causes */}
        <div className="space-y-20">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Section - Alternating sides */}
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <Image
                  src={cause.image || "/placeholder.svg"}
                  alt={cause.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  Phase {cause.phase}
                </div>
              </div>

              {/* Content Section */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#59B7E7]/10 flex items-center justify-center">
                    <cause.icon className="w-6 h-6 text-[#59B7E7]" />
                  </div>
                  <h3 className="text-2xl font-bold">{cause.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{cause.summary}</p>
                <div className="flex gap-4">
                  <Button 
                    className="bg-[#B5D858] hover:bg-[#B5D858]/90"
                    asChild
                  >
                    <Link href="/donate">Support This Cause</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-[#59B7E7] text-[#59B7E7] hover:bg-[#59B7E7]/10"
                    asChild
                  >
                    <Link href="/volunteer">Volunteer</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

