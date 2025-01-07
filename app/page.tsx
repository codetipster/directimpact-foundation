import { Hero } from '@/components/Hero'
import { ImpactMetrics } from '@/components/ImpactMetrics'
import { VideoSection } from '@/components/VideoSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { VolunteerCTA } from '@/components/VolunteerCTA'
import { DonationFeatures } from '@/components/DonationFeatures'
import { TeamSection } from '@/components/TeamSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <TeamSection />
      <VideoSection />
      <TestimonialsSection />
      <DonationFeatures />
      <VolunteerCTA />
    </main>
  )
}

