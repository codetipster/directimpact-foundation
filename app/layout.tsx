import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import Script from 'next/script' // Required for Google Ads tracking

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Direct Impact Empowerment Foundation | Empowering Lives',
  description: 'Registered in Switzerland and Nigeria, we walk alongside vulnerable people from the moment of crisis to the day of independence.',
  icons: {
    // This points to the logo file in your /public folder
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
      <head>
        {/* Google Ads Global Tag - Applies to all pages */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18051879035"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051879035');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}