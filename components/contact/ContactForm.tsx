'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      toast.success('Message sent successfully!')
      event.currentTarget.reset()
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          required
          className="bg-gray-50 border-gray-200"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          required
          className="bg-gray-50 border-gray-200"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email Address*"
          required
          className="bg-gray-50 border-gray-200"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message*"
          required
          className="min-h-[150px] bg-gray-50 border-gray-200"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#59B7E7] hover:bg-[#59B7E7]/90"
      >
        {isSubmitting ? 'Sending...' : 'SUBMIT'}
      </Button>
    </form>
  )
}

