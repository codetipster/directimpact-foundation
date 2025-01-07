'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "I challenge you to make your life a masterpiece.",
    author: "John Roy",
    role: "Creative Director, Vision",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5
  },
  {
    quote: "Volunteering here changed my perspective on community service.",
    author: "Sarah Chen",
    role: "Community Organizer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5
  },
  {
    quote: "The impact we make together is truly remarkable.",
    author: "Marcus Johnson",
    role: "Program Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Listen to Our
            <br />
            Volunteers Experiences
          </h2>
          <p className="text-[#693B2E]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#F2E5E5] rounded-lg p-8 md:p-12">
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 text-6xl text-[#693B2E] font-serif">"</div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <Image
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].author}
                  width={400}
                  height={400}
                  className="rounded-lg w-full object-cover aspect-square"
                />
              </div>

              {/* Content */}
              <div className="relative">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#693B2E] text-[#693B2E]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-bold mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-lg">
                    {testimonials[currentSlide].author}
                  </p>
                  <p className="text-[#693B2E]">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-[#693B2E] w-8'
                      : 'bg-[#693B2E]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

