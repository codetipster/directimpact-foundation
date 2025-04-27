import { Hero } from '@/components/Hero'
import { ImpactMetrics } from '@/components/ImpactMetrics'
import { VolunteerCTA } from '@/components/VolunteerCTA'
import { DonationFeatures } from '@/components/DonationFeatures'
import ImpactStories from '@/components/ImpactStories'
import { AboutImpact } from '@/components/about/AboutImpact'
import { OurPartners } from '@/components/OurPartners'
import { Popup } from '@/components/about/Popup'

export default function Home() {
  return (
    <main>
       <Popup />
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

