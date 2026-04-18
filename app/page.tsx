import { Metadata } from 'next' // 1. Import it
import HomePageAndAbout from '@/components/HomepageAndAbout'

// 2. ACTUALLY USE IT (This makes the error go away)
export const metadata: Metadata = {
  title: 'Direct Impact Empowerment Foundation | Home',
  description: 'Transforming lives in Nigeria and Switzerland through urgent food aid, medical support, and small business empowerment.',
  openGraph: {
    images: ['/dimpact-logo.jpeg'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomePageAndAbout />
    </main>
  )
}

