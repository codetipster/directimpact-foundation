'use client'

import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export function VolunteerHero() {
  const handleJoinClick = () => {
    window.open('https://wa.me/1234567890', '_blank')
  }

  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
          alt="Volunteer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            BECOME A
            <br />
            VOLUNTEER!
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Join us in empowering youth and transforming lives! Your skills and dedication can help bridge the gap between potential and opportunity, creating pathways for sustainable livelihoods and vibrant communities. Together, we can tackle unemployment and poverty, one step at a time.
          </p>
          <Button
            onClick={handleJoinClick}
            size="lg"
            className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-white flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            JOIN US NOW!
          </Button>
        </div>
      </div>
    </div>
  )
}

