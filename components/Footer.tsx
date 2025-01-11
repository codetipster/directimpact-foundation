import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin} from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Donate', href: '/donate' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="bg-[#F2E5E5] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-12 lg:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="HopeHarbor"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold">DirectImpact Empowerment Foundation</span>
            </Link>
            <p className="text-gray-600 mb-6">
            Direct Impact Empowerment Foundation is a nonprofit organization in Nigeria dedicated to reducing multidimensional poverty across Nigeria and Sub-Saharan Africa by empowering youth through targeted skills acquisition and training to foster economic independence and community transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-[#693B2E] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#693B2E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#693B2E] mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:contact@example.com"
                    className="text-gray-600 hover:text-[#693B2E] transition-colors"
                  >
                    enquiries@directimpactempowerment.org
                    donations@directimpactempowerment.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#693B2E] mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+1234566789"
                    className="text-gray-600 hover:text-[#693B2E] transition-colors"
                  >
                    (+234) 708 0861651
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#693B2E] mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    Lagos, Nigeria
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>Copyright © {new Date().getFullYear()} DirectImpact Foundation | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

