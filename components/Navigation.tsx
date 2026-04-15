'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Founder Visit', href: '/founder-visit' },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/oldlogo.jpeg"
              alt="HopeHarbor"
              width={80}
              height={80}
              className="h-20 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-xl">
              <Link href="/donate">DONATE</Link>
            </Button>

            <Button className="bg-[#59B7E7] hover:bg-[#59B7E7]/90 text-white" asChild>
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-600 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </nav>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Image
                src="/oldlogo.jpeg"
                alt="HopeHarbor"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
              <button onClick={closeMobileMenu}>✕</button>
            </div>

            {/* Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-xl font-medium text-gray-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Buttons */}
            <div className="p-6 border-t space-y-4">
              <Button className="w-full bg-[#B5D858] text-lg" asChild>
                <Link href="/donate" onClick={closeMobileMenu}>
                  DONATE
                </Link>
              </Button>

              <Button className="w-full bg-[#59B7E7] text-white text-lg" asChild>
                <Link href="/volunteer" onClick={closeMobileMenu}>
                  Become a Volunteer
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}