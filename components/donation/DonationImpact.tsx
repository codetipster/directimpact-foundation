import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Briefcase, Users } from 'lucide-react'

const impacts = [
  {
    icon: GraduationCap,
    title: 'Specialist Training',
    description: 'Providing specialist training in fashion design and entrepreneurial skills.'
  },
  {
    icon: Briefcase,
    title: 'Micro-credit Loans',
    description: 'Offering micro-credit loans to graduates to kickstart their businesses.'
  },
  {
    icon: Users,
    title: 'Business Incubation',
    description: 'Supporting business incubation programs to nurture sustainable ventures.'
  }
]

export function DonationImpact() {
  return (
    <section className="py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Your Support Matters</h2>
            <p className="text-gray-600">
              Your donations empower young individuals through various programs and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {impacts.map((impact) => (
              <Card key={impact.title} className="bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#B5D858]/10 flex items-center justify-center mb-4">
                    <impact.icon className="w-6 h-6 text-[#B5D858]" />
                  </div>
                  <h3 className="font-bold mb-2">{impact.title}</h3>
                  <p className="text-gray-600">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Thank You for Your Impact!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every contribution, big or small, brings us closer to creating lasting change. 
              Let&apos;s make a difference together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

