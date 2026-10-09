import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: any[]) => void;
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
        {/* Google Tag (gtag.js) - Google Analytics 4 & Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XJ7K2Z5VLL"
        />
        <Script id="google-tags-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            /* Initialize Google Analytics 4 */
            gtag('config', 'G-XJ7K2Z5VLL');

            /* Initialize Google Ads Conversion Tracking */
            gtag('config', 'AW-3965857070');
          `}
        </Script>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}