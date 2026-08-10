import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import Script from 'next/script'

// Declare gtag globally so TypeScript allows you to use window.gtag on click events
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

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
        {/* Google Ads Tag - Load script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18051879035"
        />
        {/* Google Ads Tag - Config */}
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051879035');
          `}
        </Script>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}