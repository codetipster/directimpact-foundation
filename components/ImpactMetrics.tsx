'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

const metrics = [
  { value: '10,000+', label: 'People Impacted' },
  { value: '15,000+', label: 'Volunteer Hours' },
  { value: '17M+', label: 'Funds Raised' },
]

const partners = [
  { name: 'Cloud', logo: '/cloud-logo.svg' },
  { name: 'Ebooks', logo: '/ebooks-logo.svg' },
  { name: 'Penta', logo: '/penta-logo.svg' },
  { name: 'Cactus', logo: '/cactus-logo.svg' },
  { name: 'Nextmove', logo: '/nextmove-logo.svg' },
]

export function ImpactMetrics() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Updates from Our Fight Against Poverty
          </h2>
          <p className="text-[#693B2E]">
            Poverty Spotlight: Stories of Impact and Change
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-xl mx-auto mb-20">
          <form 
            onSubmit={handleSubmit}
            className="bg-[#F2E5E5] p-8 rounded-lg flex gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-[#693B2E]"
              required
            />
            <Button 
              type="submit"
              className="bg-[#693B2E] hover:bg-[#693B2E]/90 whitespace-nowrap"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-[#693B2E]/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#693B2E]" />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-2xl">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="bg-[#F2E5E5] py-12 px-4 rounded-lg relative overflow-hidden">
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
            <p className="text-center font-semibold mb-8">
              Organisations that Support Our Cause
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

