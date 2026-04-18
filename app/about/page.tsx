import { Metadata } from 'next'
import { AboutOrganization } from '@/components/about/AboutTheOrganization'

export const metadata: Metadata = {
  title: 'About the Foundation - Direct Impact',
  description: 'Our mission, vision, and the institutional story of Direct Impact Empowerment.',
}

export default function AboutOrgPage() {
  return (
    <main className="bg-white">
      {/* This component contains the Mission, Vision, and Org history we coded earlier */}
      <AboutOrganization />
      
      {/* A simple, beautiful transition to the team */}
      <section className="py-20 bg-[#1a1a1a] text-center">
        <h2 className="text-white font-serif text-2xl mb-6">
          {`Want to meet the people behind the mission?`}
        </h2>
        <a 
          href="/about/team" 
          className="inline-block bg-[#7B1E1E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#9B2E2E] transition-colors"
        >
          {`View Our Team`}
        </a>
      </section>
    </main>
  )
}