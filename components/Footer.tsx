import Link from "next/link"
import Image from "next/image"
import { Facebook, Phone, Mail, MapPin, Youtube } from "lucide-react"
import { FaTiktok, FaWhatsapp } from "react-icons/fa"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Donate", href: "/donate" },
  //{ label: 'Insights', href: '/insights' },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61560752956530&mibextid=ZbWKwL",
    label: "Facebook",
    color: "#1877F2", // Facebook blue
  },
  {
    icon: FaTiktok,
    href: "https://vm.tiktok.com/ZNeK1bxUh/",
    label: "TikTok",
    color: "#000000", // TikTok black
  },
  {
    icon: FaWhatsapp,
    href: "#",
    label: "WhatsApp",
    color: "#25D366", // WhatsApp green
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@DirectImpactempowerment",
    label: "YouTube",
    color: "#FF0000", // YouTube red
  },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#59B7E7]/10 to-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-12 lg:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/oldlogo.jpeg" alt="DirectImpact" width={80} height={80} className="w-40 h-40" />
              <span className="text-xl font-semibold text-[#59B7E7]">Direct Impact Empowerment Foundation</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Direct Impact Empowerment Foundation is a nonprofit organization in Nigeria dedicated to reducing
              multidimensional poverty across Nigeria and Sub-Saharan Africa by empowering youth through targeted skills
              acquisition and training to foster economic independence and community transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center 
                    hover:bg-opacity-90 transition-all duration-300"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-[#59B7E7]">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#B5D858] transition-colors flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#B5D858] opacity-0 transition-opacity 
                    group-hover:opacity-100"
                  ></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-semibold text-lg mb-4 text-[#59B7E7]">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div
                  className="w-10 h-10 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                  group-hover:bg-[#59B7E7] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#59B7E7] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#59B7E7]">Email:</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:enquiries@directimpactempowerment.org"
                      className="text-gray-600 hover:text-[#B5D858] transition-colors block"
                    >
                      enquiries@directimpactempowerment.org
                    </a>
                    <a
                      href="mailto:donations@directimpactempowerment.org"
                      className="text-gray-600 hover:text-[#B5D858] transition-colors block"
                    >
                      donations@directimpactempowerment.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div
                  className="w-10 h-10 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                  group-hover:bg-[#59B7E7] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#59B7E7] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#59B7E7]">Phone</p>
                  <a href="tel:+2347080861651" className="text-gray-600 hover:text-[#B5D858] transition-colors">
                    (+234) 708 0861651
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div
                  className="w-10 h-10 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                  group-hover:bg-[#59B7E7] transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#59B7E7] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#59B7E7]">Address</p>
                  <p className="text-gray-600">
                    21 Bale Street, Apata <br />
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#59B7E7]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              Copyright © {new Date().getFullYear()} Direct Impact Empowerment Foundation | All Rights Reserved
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-gray-600 hover:text-[#B5D858] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#B5D858] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

