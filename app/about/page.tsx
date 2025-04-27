import { Metadata } from 'next'
import { AboutHero } from '../../components/about/AboutHero'
import { AboutMission } from '../../components/about/AboutMission'
import { AboutValues } from '../../components/about/AboutValues'
import { AboutPrograms } from '../../components/about/AboutPrograms'
import { AboutImpact } from '../../components/about/AboutImpact'
import { AboutStory } from '../../components/about/AboutStory'
import { AboutPartners } from '../../components/about/AboutPartners'
import { Popup } from '../../components/about/Popup' 

export const metadata: Metadata = {
  title: 'About Us - DirectImpact Empowerment Foundation',
  description: 'Learn about our mission to empower youth and transform communities across Africa through skill acquisition and entrepreneurial support.',
}

export default function AboutPage() {
  return (
    <main>
       <Popup />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutPrograms />
      <AboutImpact />
      <AboutStory />
      <AboutPartners />
    </main>
  )
}
