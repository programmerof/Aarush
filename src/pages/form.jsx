'use client'
import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function FormcarryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [studyLocation, setStudyLocation] = useState('USA')
  const captchaRef = useRef(null)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const message = e.target.elements.message.value
    const token = captchaRef.current.getValue()

    try {
      const response = await fetch('https://formcarry.com/s/UzXDADOsJHe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          studyLocation,
          'g-recaptcha-response': token,
        }),
      })
      if (response.ok) {
        console.log('Form submitted successfully')
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold">
          Full Name
        </label>
        <Input type="text" name="name" id="name" placeholder="Your first and last name" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold">
          Your Email Address
        </label>
        <Input type="email" name="email" id="email" placeholder="john@doe.com" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message..."
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>


      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold">
          Your Preferred Study Destination
        </label>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">{studyLocation}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuLabel>Study Location</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setStudyLocation('USA')}>USA</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStudyLocation('Australia')}>Australia</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStudyLocation('Canada')}>Canada</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 flex items-center">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <span className="ml-2 text-zinc-800 text-lg font-bold">
          Yes, I would like to receive information on study abroad news and events from website.
        </span>
      </div>

      <ReCAPTCHA sitekey={siteKey} ref={captchaRef} />
      <div className="mb-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Send'}
        </Button>
      </div>
    </form>
  )
}