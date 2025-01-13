import { Metadata } from 'next'
import { VolunteerHero } from '@/components/volunteer/VolunteerHero'
import { VolunteerMission } from '@/components/volunteer/VolunteerMission'

export const metadata: Metadata = {
  title: 'Become a Volunteer - DirectImpact Empowerment Foundation',
  description: 'Join our team of volunteers and make a difference in communities worldwide.',
}

export default function Volunteer() {
  return (
    <main>
      <VolunteerHero />
      <VolunteerMission />
    </main>
  )
}
