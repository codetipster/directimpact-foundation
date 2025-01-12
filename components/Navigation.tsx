import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Causes', href: '/causes' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
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

          <div className="flex items-center gap-4">
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
        </nav>
      </div>
    </header>
  )
}

