'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const people = [
  {
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    name: "Max",
    location: "Lagos, Nigeria",
    position: "-bottom-10 -right-10" // Bottom Right
  },
  {
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    name: "Luna",
    location: "Abuja, Nigeria",
    position: "-top-10 -right-10" // Top Right
  },
  {
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    name: "Charlie",
    location: "Ibadan, Nigeria",
    position: "-bottom-10 -left-10" // Bottom Left
  },
  {
    image: "/me.jpeg",
    name: "Sam",
    location: "Tech support",
    position: "-top-10 -left-10" // Top Left
  }
]

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
    <section className="relative min-h-screen bg-black py-20 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Collage with Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-12">
              {people.map((person, index) => (
                <div key={index} className="relative">
                  <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                    <Image
                      src={person.image}
                      alt={`${person.name} - Rescue dog from ${person.location}`}
                      width={400}
                      height={400}
                      className="object-cover aspect-square"
                    />
                  </div>
                  <div className={`absolute ${person.position} bg-[#F3F7EA]/95 backdrop-blur-sm rounded-lg p-6 z-10`}>
                    <div className="text-2xl font-bold">{person.name}</div>
                    <div className="text-sm text-gray-600">
                      {person.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="uppercase tracking-wider mb-4">
              Transforming Lives
            </h2>
            <h1 className="text-5xl font-bold mb-6">
              Our Impact <span className="text-[#B5D858]">by the</span>
              <br />
              Numbers
            </h1>
            <p className="text-white/80 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <Button 
              className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-black rounded-full px-8"
            >
              Donate To Our Cause
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
