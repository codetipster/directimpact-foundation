'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Play, X } from 'lucide-react'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.3 // Trigger when 30% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          console.log('Background video autoplay failed:', error)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        playsInline
        loop
        muted
        poster="/video-poster.jpg"
      >
        <source
          src="https://player.vimeo.com/external/315391555.hd.mp4?s=3f02cadab21231fd54d531008f0f7096852bec51&profile_id=175&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <p className="text-lg mb-4">Empowering Communities</p>
        
        {!isPlaying && (
          <>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Watch Our Volunteers in Action
              <br />
              and Join Us Today
            </h2>

            <button
              onClick={handlePlayClick}
              className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center mb-8 transition-colors"
              aria-label="Play video with sound"
            >
              <Play className="w-8 h-8 text-white" />
            </button>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#693B2E] hover:bg-[#693B2E]/90"
              >
                Donate
              </Button>
              <Button 
                variant="secondary"
                className="bg-[#F2E5E5] hover:bg-[#F2E5E5]/90 text-[#693B2E]"
              >
                Become a Volunteer
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Full Screen Video Player */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full h-full max-w-7xl mx-auto aspect-video">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/315391555?autoplay=1&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

