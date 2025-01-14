import { Metadata } from 'next'
import { ContactForm } from '../../components/contact/ContactForm'
import { ContactInfo } from '../../components/contact/ContactInfo'
import { ContactHero } from '../../components/contact/ContactHero'

export const metadata: Metadata = {
  title: 'Contact Us - DirectImpact Empowerment Foundation',
  description: 'Get in touch with us to learn more about our youth empowerment programs and how you can get involved.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

