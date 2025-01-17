import { Scissors, Wallet, Briefcase, GraduationCap, Users } from 'lucide-react'

const programs = [
  {
    icon: Scissors,
    title: 'Specialist Fashion Design Training',
    description: 'Offering hands-on training in advanced fashion design, enabling youth to acquire employable skills and establish their own businesses.',
  },
  {
    icon: Wallet,
    title: 'Micro-Credit Scheme',
    description: 'Providing accessible funding to graduates, empowering them to purchase essential equipment and kickstart their ventures.',
  },
  {
    icon: Briefcase,
    title: 'Business Incubation and Acceleration',
    description: 'Supporting young entrepreneurs with mentorship, advanced training, and resources to scale their businesses and compete in local and global markets.',
  },
  {
    icon: GraduationCap,
    title: 'Self-Reliance initiatives',
    description: 'Providing support to vulnerable individuals by helping them establish small-scale startup businesses, enabling them to achieve financial independence to sustain themselves',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description: 'Engaging with local leaders, schools, and organizations to recruit participants and raise awareness of our programs.',
  },
]

export function AboutPrograms() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          </div>

          <div className="space-y-6">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-full bg-[#59B7E7]/10">
                    <program.icon className="w-6 h-6 text-[#59B7E7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
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

