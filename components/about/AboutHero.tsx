'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Background video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/group.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-40"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="uppercase tracking-wider mb-4">
              Transforming Lives
            </h2>
            <h1 className="text-5xl font-bold mb-6">
              Meet the Heart of Our Mission <br /><span className="text-[#B5D858]">Our journey
                to making a difference </span> 
            </h1>
            <p className="text-white/80 mb-8 text-lg">
            Together, we&apos;re shaping a future where every youth can thrive and contribute meaningfully to society.
            </p>
            <Link href="/donate">
              <Button 
                className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-black rounded-full px-8"
              >
                Donate To Our Cause
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

