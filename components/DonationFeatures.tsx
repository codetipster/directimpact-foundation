import { GraduationCap, Briefcase, Users, Heart, Lightbulb, BookOpen } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Skill Development',
    description: 'We provide specialized training in fashion design and entrepreneurship, equipping youth with the tools to build sustainable careers and transform their communities.',
  },
  {
    icon: Briefcase,
    title: 'Business Empowerment',
    description: 'Through our micro-credit scheme, we enable young entrepreneurs to access the funding and resources they need to start and grow successful businesses.',
  },
  {
    icon: Users,
    title: 'Community Transformation',
    description: 'We uplift communities by addressing youth unemployment and poverty, fostering stability, and creating opportunities for economic growth.',
  },
  {
    icon: Heart,
    title: 'Youth Welfare',
    description: 'Our programs provide mentorship, education, and resources to ensure young people have the support they need to thrive and contribute positively to society.',
  },
  {
    icon: Lightbulb,
    title: 'Creating Opportunities',
    description: 'We establish platforms for young people to showcase their talents, connect with mentors, and access markets for their skills and products.',
  },
  {
    icon: BookOpen,
    title: 'Education and Training',
    description: 'Our holistic approach integrates foundational education with vocational training, ensuring participants are well-prepared for success in both local and global markets.',
  },
]

export function DonationFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-gray-600">
            Empowering Youth for a Brighter Future
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 rounded-full bg-[#B5D858]/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#B5D858]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

