import { Hero } from '@/components/Hero'
import { ImpactMetrics } from '@/components/ImpactMetrics'
import { VolunteerCTA } from '@/components/VolunteerCTA'
import { DonationFeatures } from '@/components/DonationFeatures'
import ImpactStories from '@/components/ImpactStories'
import { AboutImpact } from '@/components/about/AboutImpact'
import { OurPartners } from '@/components/OurPartners'

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <ImpactStories />
      <AboutImpact />
      <DonationFeatures />
      <OurPartners />
      <VolunteerCTA />
    </main>
  )
}

