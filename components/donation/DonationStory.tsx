'use client'
import { useState, useRef } from 'react'
import { Play, X } from 'lucide-react'

export function DonationStory() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the Impact of Your Support
            </h2>
            <p className="text-2xl text-[#59B7E7] font-semibold mb-6">
              &quot;Empowering One, Empowering Many&quot;
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Watch how your contributions are changing lives. Meet Adeola, a determined 
              mother who received a ₦100,000 grant from our foundation to start her 
              small-scale business. Through her hard work and resourcefulness, she has 
              built a thriving business that supports her family.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With more support, Adeola can scale her business, ensuring a stable future 
              for herself and her children. Your donation can help her—and others like 
              her—achieve their dreams.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
            {/* Video Element */}
            <video
              ref={videoRef}
              //poster="/oldlogo.jpeg"
              className="w-full h-full object-cover"
              controls={isPlaying}
            >
              <source src="/impact.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay - Only show when not playing */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play Adeola's story"
              >
                <div className="w-20 h-20 rounded-full bg-[#59B7E7]/90 group-hover:bg-[#59B7E7] 
                  flex items-center justify-center transition-all duration-300 
                  group-hover:scale-110"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </button>
            )}

            {/* Close Button - Only show when playing */}
            {isPlaying && (
              <button
                onClick={handlePause}
                className="absolute top-4 right-4 z-10 p-2 rounded-full 
                  bg-black/20 hover:bg-black/40 transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}