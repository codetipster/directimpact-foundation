import Link from "next/link"
import Image from "next/image"
import { Facebook, Phone, Mail, MapPin, Youtube } from "lucide-react"
import { FaTiktok, FaWhatsapp } from "react-icons/fa"

/* const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Donate", href: "/donate" },
  //{ label: 'Insights', href: '/insights' },
  { label: "Contact", href: "/contact" },
] */

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
      <div className="container mx-auto px-4 py-6">
        
        {/* UPPER SECTION: Partner Organisations & Badges */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <h3 className="font-bold text-xl text-[#59B7E7]">Partner Organisations</h3>
            <p className="text-gray-500 text-sm mt-1">Recognised and verified by global platforms</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-stretch gap-4">
            {/* GlobalGiving Badge */}
            <a 
              href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-36"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/Globalgivingbadge.jpeg" 
                  alt="GlobalGiving Partner Organisation" 
                  width={80} 
                  height={80} 
                  className="h-auto object-contain"
                  priority
                />
              </div>
              <div className="mt-auto leading-tight">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-0.5">Verified Partner</span>
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#59B7E7] transition-colors">GlobalGiving 2026</span>
              </div>
            </a>

            {/* Effective Org Badge */}
            <div 
              className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-36"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/effective_org.png" 
                  alt="Effective Organisation Badge" 
                  width={80} 
                  height={80} 
                  className="h-auto object-contain"
                  priority
                />
              </div>
              <div className="mt-auto leading-tight">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-0.5">Recognised</span>
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#59B7E7] transition-colors">Effective Organisation</span>
              </div>
            </div>

            {/* Top Rank Badge */}
            <div 
              className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-36"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/top_rank_badge.png" 
                  alt="Top Ranked Organisation Badge" 
                  width={80} 
                  height={80} 
                  className="h-auto object-contain"
                  priority
                />
              </div>
              <div className="mt-auto leading-tight">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-0.5">Top Ranked</span>
                <span className="text-xs font-bold text-gray-800 group-hover:text-[#59B7E7] transition-colors">Organisation</span>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Foundation Info & Contacts */}
        <div className="grid gap-6 md:grid-cols-2 pt-6 border-t border-[#59B7E7]/20">
          
          {/* Logo, Description, and Socials */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/dimpact-logo.jpeg" alt="DirectImpact" width={60} height={60} className="w-16 h-16 md:w-20 md:h-20" />
              <span className="text-lg font-semibold text-[#59B7E7]">Direct Impact Empowerment Foundation</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-lg">
              Direct Impact Empowerment Foundation is a non-profit organisation registered in Switzerland and Nigeria. We walk alongside vulnerable people from the moment of crisis all the way to sustained independence through our four-stage Dignity to Independence Programme. 
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center 
                    hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:pl-8 lg:pl-16">
            <h3 className="font-semibold text-lg mb-3 text-[#59B7E7]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <div
                  className="w-9 h-9 shrink-0 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                    group-hover:bg-[#59B7E7] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-[#59B7E7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-0.5">
                  <p className="font-semibold text-sm text-gray-800 mb-0.5">Email</p>
                  <div className="space-y-0.5">
                    <a
                      href="mailto:enquiries@directimpactempowerment.org"
                      className="text-gray-600 text-sm hover:text-[#B5D858] transition-colors block"
                    >
                      enquiries@directimpactempowerment.org
                    </a>
                    <a
                      href="mailto:donations@directimpactempowerment.org"
                      className="text-gray-600 text-sm hover:text-[#B5D858] transition-colors block"
                    >
                      donations@directimpactempowerment.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div
                  className="w-9 h-9 shrink-0 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                    group-hover:bg-[#59B7E7] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-[#59B7E7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-0.5">
                  <p className="font-semibold text-sm text-gray-800 mb-0.5">Phone</p>
                  <a href="tel:+2347080861651" className="text-gray-600 text-sm hover:text-[#B5D858] transition-colors">
                    (+234) 708 0861651
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div
                  className="w-9 h-9 shrink-0 rounded-full bg-[#59B7E7]/10 flex items-center justify-center 
                    group-hover:bg-[#59B7E7] transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 text-[#59B7E7] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-0.5">
                  <p className="font-semibold text-sm text-gray-800 mb-0.5">Address</p>
                  <p className="text-gray-600 text-sm">
                    21 Bale Street, Apata <br />
                    Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="mt-8 pt-4 border-t border-[#59B7E7]/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
            <div className="text-gray-600 text-xs">
              <p>Copyright © {new Date().getFullYear()} Direct Impact Empowerment Foundation | All Rights Reserved.</p>
              <p className="mt-1 text-[#59B7E7]">
                Direct Impact Empowerment is a registered charity in Switzerland [CHE-415.427.651] and in Nigeria [CAC/IT/7420254].
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/privacy" className="text-gray-600 font-medium hover:text-[#B5D858] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 font-medium hover:text-[#B5D858] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}