import HomePageAndAbout from '@/components/HomepageAndAbout'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* We have removed the Popup component as requested. 
          The homepage design is now entirely managed within the HomePageAndAbout component 
          for a cleaner, more professional institutional look.
      */}
      <HomePageAndAbout />
    </main>
  )
}

