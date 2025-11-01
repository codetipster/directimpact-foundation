import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export function DonationHero() {
  return (
    <section className="relative py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#59B7E7]/10 mb-6">
            <Heart className="w-8 h-8 text-[#59B7E7]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DIRECT IMPACT EMPOWERMENT DONATIONS
          </h1>
          <div className="text-lg text-gray-600 mb-8 space-y-4">
            <p>
              At Direct Impact Empowerment, every act of giving helps us feed families, restore dignity, and empower lives across Nigeria and beyond.
            </p>
            <p>
              We are a self-funded foundation, registered in both Switzerland 🇨🇭 and Nigeria 🇳🇬, doing what we can — one life at a time.
            </p>
            <p>
              Your donation goes directly toward food aid, medical help, and small business support for struggling families.
            </p>
            <p className="text-xl font-semibold text-[#59B7E7]">
              🌍 Together, we can make humanity our currency of kindness.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-[#59B7E7] text-[#59B7E7] hover:bg-[#59B7E7]/10"
            >
              <Link href="/volunteer">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}