import Image from "next/image";
import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

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
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#59B7E7]/10 to-white border-t">
      <div className="container mx-auto px-4 py-8">
        
        {/* UPPER SECTION: Partner Organisations & Badges */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="font-bold text-xl text-[#59B7E7]">Partner Organisation & Accreditations</h3>
          </div>
          
          {/* Larger Badges Row */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 mb-6">
            {/* GlobalGiving Vetted Badge */}
            <a 
              href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-44 md:w-48"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/vetted.jpeg" 
                  alt="GlobalGiving Vetted Organisation" 
                  width={120} 
                  height={120} 
                  className="h-auto w-28 md:w-32 object-contain"
                  priority
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3a5c]">Vetted</span>
            </a>

            {/* Effective Org Badge */}
            <a 
              href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-44 md:w-48"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/effective.jpeg" 
                  alt="Effective Organisation Badge" 
                  width={120} 
                  height={120} 
                  className="h-auto w-28 md:w-32 object-contain"
                  priority
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3a5c]">Effective</span>
            </a>

            {/* Top Rank Badge */}
            <a 
              href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white border border-[#59B7E7]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#59B7E7]/40 group w-44 md:w-48"
            >
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/top-rank.jpeg" 
                  alt="Top Ranked Organisation Badge" 
                  width={120} 
                  height={120} 
                  className="h-auto w-28 md:w-32 object-contain"
                  priority
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a3a5c]">Top-Ranked</span>
            </a>
          </div>

          {/* Sub-Footer Statement from GlobalGiving Page */}
          <div className="mx-auto max-w-3xl text-center font-sans text-xs leading-relaxed text-[#555] bg-white/70 p-4 rounded-xl border border-[#59B7E7]/20 shadow-xs">
            <p>
              Direct Impact Empowerment Foundation is a dual-registered NGO in Nigeria (CAC/IT/7420254) and Switzerland (CHE-415.427.651), independently vetted and Top-Ranked by{" "}
              <a
                href="https://www.globalgiving.org/dy/v2/pe/dashboard/overview.html?organization.id=105967"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B1E1E] font-semibold underline hover:no-underline"
              >
                GlobalGiving
              </a>.
            </p>
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
                    21 Bale Street, Apata <br /> Ibadan, Nigeria
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
  );
}