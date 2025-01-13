import { Shield, Eye, CheckCircle, Leaf } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in everything we do.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Ensuring clarity and openness in our actions and operations.',
  },
  {
    icon: CheckCircle,
    title: 'Accountability',
    description: 'Taking responsibility for our decisions and their impact.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committing to long-term solutions that create lasting change.',
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-[#59B7E7]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-gray-600">
              At the heart of our work are these core values:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#B5D858]/10">
                    <value.icon className="w-6 h-6 text-[#B5D858]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

