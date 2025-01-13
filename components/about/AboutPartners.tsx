import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const partnerBenefits = [
  'Expand our training programs.',
  'Fund micro-credit initiatives.',
  'Scale our business incubation efforts.',
]

export function AboutPartners() {
  return (
    <section className="py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Partners and Supporters
            </h2>
            <p className="text-gray-600 mb-8">
              We work closely with donors, corporate organizations, community leaders, 
              and volunteers to achieve our goals.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-4 mb-8">
              {partnerBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#B5D858]/10 
                    flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#B5D858]" />
                  </div>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#59B7E7] hover:bg-[#59B7E7]/90"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

