'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Activity {
  title: string
  description: string
  image: string
  slug: string
}

interface ActivityCardProps {
  activity: Activity
  scrollYProgress: MotionValue<number>
  index: number
  total: number
}

const activities: Activity[] = [
  {
    title: "Specialist Fashion Design Training  (Training Center in Progress!)",
    description: "The foundation is training youths in advanced fashion design techniques, equipping them with technical and entrepreneurial skills to meet both local and global demands.",
    image: "/fashion.jpg",
    slug: "fashion-design-training"
  },
  {
    title: "Business Incubation and Acceleration",
    description: "They are establishing a business incubation and acceleration program to support graduates with mentorship, advanced training, and resources to scale their businesses effectively.",
    image: "/bizness.jpg",
    slug: "business-incubation"
  },
  {
    title: "Micro-Credit Scheme",
    description: "The foundation is preparing to launch a micro-credit program to provide accessible funding to graduates, enabling them to purchase essential equipment and start their businesses.",
    image: "/micro.jpg",
    slug: "micro-credit"
  }
]

const ActivityCard = ({ activity, scrollYProgress, index, total }: ActivityCardProps) => {
  const y = useTransform(
    scrollYProgress,
    // Adjust the input range to make cards stack more gradually
    [index / (total + 1), (index + 1) / (total + 1)],
    ['80vh', '0vh']
  )

  return (
    <motion.div
      className="absolute w-full max-w-5xl mx-4 aspect-[16/7]"
      style={{
        y,
        zIndex: index
      }}
    >
      <Link 
        href={`/activities/${activity.slug}`}
        className="block w-full h-full relative rounded-2xl overflow-hidden group cursor-pointer"
      >
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40" />
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-center text-center text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl transition-transform duration-300 group-hover:scale-105">
            {activity.title}
          </h3>
          <p className="text-white/90 max-w-2xl text-sm md:text-base">
            {activity.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

const ImpactStories = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['90px start', 'end end']  // Offset by 15px from the top
  })

  return (
    <section className="bg-white">
      <div 
        ref={containerRef} 
        className="relative h-[400vh]" // Increased height for smoother scrolling
      >
        <div className="sticky top-[90px]"> {/* Match the 15px offset */}
          <div className="py-8">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="text-sm uppercase tracking-wider text-green-500 mb-2">
                Our Activities
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Key Programs & Initiatives
              </h3>
              <p className="text-gray-600">
                Discover how we&apos;re making a difference through our comprehensive programs
                and sustainable initiatives.
              </p>
            </div>
          </div>

          <div className="h-[700px] flex items-center justify-center overflow-hidden bg-[#F3F7EA]">
            {activities.map((activity, index) => (
              <ActivityCard
                key={activity.title}
                activity={activity}
                scrollYProgress={scrollYProgress}
                index={index}
                total={activities.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactStories