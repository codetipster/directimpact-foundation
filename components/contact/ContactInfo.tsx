import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-[#59B7E7] text-sm font-medium mb-2">Contact</h1>
        <h2 className="text-4xl font-bold mb-4">Get in Touch With Us</h2>
        <p className="text-gray-600">
          We Are Here To Help You At Any Time All Over The World So Don&apos;t Hesitate 
          To Reach Us At Any Moment. Here We Are Providing Our Organization Contact 
          Details For Easy Reach.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-[#59B7E7]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Message</h3>
            <a 
              href="mailto:support@directimpact.org" 
              className="text-gray-600 hover:text-[#B5D858] transition-colors"
            >
              enquiries@directimpactempowerment.org
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-[#59B7E7]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Contact Us</h3>
            <a 
              href="tel:+2347080861651" 
              className="text-gray-600 hover:text-[#B5D858] transition-colors"
            >
              (+234) 708 0861651
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Follow us on social media</h3>
        <p className="text-gray-600">
          Stay connected with us on social media to see how we’re empowering youths 
          and transforming communities. Follow our journey and join the conversation!
        </p>
        <div className="flex gap-4">
          {[
            { icon: FaInstagram, href: '#', label: 'Instagram' },
            { icon: FaFacebook, href: '#', label: 'Facebook' },
            { icon: FaTwitter, href: '#', label: 'Twitter' },
            { icon: FaPinterest, href: '#', label: 'Pinterest' },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center 
                text-[#59B7E7] hover:bg-[#59B7E7] hover:text-white transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

