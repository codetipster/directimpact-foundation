import { Metadata } from 'next'
import { Popup } from '../../components/about/Popup'
import  HomepageAndAbout  from '@/components/HomepageAndAbout' 

export const metadata: Metadata = {
  title: 'About Us - DirectImpact Empowerment Foundation',
  description: 'Learn about our mission to empower youth and transform communities across Africa through skill acquisition and entrepreneurial support.',
}

export default function AboutPage() {
  return (
    <main>
       <Popup />
	  <HomepageAndAbout />
      
    </main>
  )
}
