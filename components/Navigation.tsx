'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Causes', href: '/causes' },
  //{ label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/oldlogo.jpeg"
              alt="HopeHarbor"
              width={80}
              height={80}
              className="w-30 h-30"
              unoptimized
            />
            {/* <span className="text-xl font-semibold">DirectImpact</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="default"
              className="bg-[#B5D858] hover:bg-[#B5D858]/90 text-xl"
            >
              <Link href="/donate">
                DONATE
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="bg-[#59B7E7] hover:bg-[#59B7E7]/90 text-white"
              asChild
            >
              <Link href="/volunteer">
                Become a Volunteer
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Image
                src="/oldlogo.jpeg"
                alt="HopeHarbor"
                width={60}
                height={60}
                className="w-15 h-15"
                unoptimized
              />
              <button
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-8 h-8"
                aria-label="Close mobile menu"
              >
                <span className="block w-6 h-0.5 bg-gray-600 rotate-45" />
                <span className="block w-6 h-0.5 bg-gray-600 -rotate-45 -translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Action Buttons */}
            <div className="p-6 border-t space-y-4">
              <Button
                variant="default"
                className="w-full bg-[#B5D858] hover:bg-[#B5D858]/90 text-lg py-3"
                asChild
              >
                <Link href="/donate" onClick={closeMobileMenu}>
                  DONATE
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full bg-[#59B7E7] hover:bg-[#59B7E7]/90 text-white text-lg py-3"
                asChild
              >
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

