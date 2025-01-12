import { Metadata } from 'next'
import { DonationHero } from '@/components/donation/DonationHero'
import { DonationOptions } from '@/components/donation/DonationOptions'
import { DonationImpact } from '@/components/donation/DonationImpact'
import { DonationStory } from '@/components/donation/DonationStory'

export const metadata: Metadata = {
  title: 'Donate - DirectImpact Empowerment Foundation',
  description: 'Support youth empowerment and community transformation through your generous donation.',
}

export default function DonatePage() {
  return (
    <main>
      <DonationHero />
      <DonationOptions />
      <DonationStory />
      <DonationImpact />
    </main>
  )
}

