import { Metadata } from 'next'
import { CausesHero } from '@/components/causes/CausesHero'
import { CausesList } from '@/components/causes/CausesList'

export const metadata: Metadata = {
  title: 'Our Causes - DirectImpact Empowerment Foundation',
  description: 'Learn about our key initiatives in youth empowerment, welfare support, entrepreneurship, and community development.',
}

export default function CausesPage() {
  return (
    <main>
      <CausesHero />
      <CausesList />
    </main>
  )
}

