import { Metadata } from 'next'
import FounderBio from '@/components/FounderBio'
import CEOBio from '@/components/CEOBio'

export const metadata: Metadata = {
  title: 'Our Team - Direct Impact',
  description: 'Meet Femi and Reuben, the hearts and minds leading our mission.',
}

export default function TeamPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="pt-32 pb-12 text-center border-b border-gray-50">
        <span className="text-[#7B1E1E] text-xs font-black uppercase tracking-[0.3em]">
          Leadership
        </span>
        <h1 className="text-5xl font-serif text-[#1a1a1a] mt-4">
          {`The People Behind the Impact`}
        </h1>
      </div>

      {/* Founder Section */}
      <section className="bg-white">
         <FounderBio />
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center items-center gap-4 py-12">
        <div className="h-px bg-gray-100 w-24"></div>
        <div className="w-2 h-2 bg-[#7B1E1E] rotate-45"></div>
        <div className="h-px bg-gray-100 w-24"></div>
      </div>

      {/* CEO Section */}
      <section className="bg-[#FCFCFC] pb-24">
         <CEOBio />
      </section>
    </main>
  )
}