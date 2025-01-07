'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function NewsletterSection() {
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="HopeHarbor"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold">HopeHarbor</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum.
            </p>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#693B2E]"
                required
              />
              <Button 
                type="submit"
                className="bg-[#693B2E] hover:bg-[#693B2E]/90 whitespace-nowrap px-8"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

