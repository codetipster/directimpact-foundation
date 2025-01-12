import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export function DonationHero() {
  return (
    <section className="relative py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#59B7E7]/10 mb-6">
            <Heart className="w-8 h-8 text-[#59B7E7]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Lives with Your Generosity
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your support can empower youth, uplift communities, and create a sustainable future. 
            Every contribution helps us provide specialized training, business incubation, and 
            micro-credit access to young individuals striving to overcome poverty and unemployment. 
            Together, we can turn potential into progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-[#59B7E7] text-[#59B7E7] hover:bg-[#59B7E7]/10"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}