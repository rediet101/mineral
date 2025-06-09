'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Footer from '@/components/Footer'
const url = process.env.NEXT_PUBLIC_API_LINK + "contact-us"

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone_number: "",
  company: "",
  message: "",
  method: "",
  contact_time: "",
  is_agreed: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch(url ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
        name: "",
        email: "",
        phone_number: "",
        company: "",
        message: "",
        method: "",
        contact_time: "",
        is_agreed: false
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : null

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div>
    <section className="relative w-full h-[90vh] bg-[url('/contact.svg')] bg-contain bg-no-repeat justify-center items-center">
           {/* Background Image */}
          
           {/* Content */}
           <div className="relative z-20 pt-3">
             <Navbar />
             
             <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
               <h1 className="text-white text-6xl md:text-[140px] font-bold mb-4">
               Contact Us
               </h1>
               <p className="text-white/90 text-base md:text-xl max-w-2xl">
                Reach out to our team for inquiries, support, or to discuss how we can meet your mineral exploration and processing needs.
               </p>
             </div>
           </div>
         </section>
      
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-3 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <div className="text-white rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: "url('/contactbg.svg')",
              }}
            />
            <div className="absolute inset-0 z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8 md:mb-12 text-sm md:text-base">
                We're here to help with all your mineral exploration and
                processing needs. Fill out the form and our team will
                get back to you as soon as possible.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="font-bold mb-2 text-base md:text-lg">Head Office</h3>
                  <p className="text-gray-300 text-sm md:text-base">Bole Road, Addis Ababa, Ethiopia</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-base md:text-lg">Phone</h3>
                  <p className="text-gray-300 text-sm md:text-base">+251 11 123 4567</p>
                  <p className="text-gray-300 text-sm md:text-base">Emergency: +251 91 234 5678</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-base md:text-lg">Email</h3>
                  <p className="text-gray-300 text-sm md:text-base">info@ethiopianmineral.com</p>
                  <p className="text-gray-300 text-sm md:text-base">support@ethiopianmineral.com</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-base md:text-lg">Business Hours</h3>
                  <p className="text-gray-300 text-sm md:text-base">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-300 text-sm md:text-base">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 md:p-0">
            <h2 className="text-2xl md:text-2xl font-bold mb-6 md:mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your inquiry or request in detail"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm mb-4">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="method"
                      value="email"
                      checked={formData.method === 'email'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="method"
                      value="phone"
                      checked={formData.method === 'phone'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="method"
                      value="both"
                      checked={formData.method === 'both'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Both</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-4">Best Time to Contact You</label>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_time"
                      value="morning"
                      checked={formData.contact_time === 'morning'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Morning (8AM-12PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_time"
                      value="afternoon"
                      checked={formData.contact_time === 'afternoon'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Afternoon (12PM-5PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_time"
                      value="anytime"
                      checked={formData.contact_time === 'anytime'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm md:text-base">Anytime</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="is_agreed"
                    checked={formData.is_agreed}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <span className="text-sm">
                    I agree to the Privacy Policy and consent to the processing of my personal data.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 md:py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
        
      </div>
      <div className='pt-10'>
      <Footer/>
      </div>
    </div>
  )
}