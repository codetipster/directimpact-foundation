import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Direct Impact Empowerment Foundation | Empowering Lives',
  description: 'Registered in Switzerland and Nigeria, we walk alongside vulnerable people from the moment of crisis to the day of independence.',
  icons: {
    icon: '/dimpact-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}