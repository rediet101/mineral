import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className="min-h-screen p-[10px] gap-[10px]">
      <section className="relative w-[1410px] h-[679px] overflow-hidden rounded-[2px] border border-[1px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.svg"
            alt="Mining Background"
            className="object-cover w-full h-full"
            width={1410}
            height={590}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-8 pt-20">
            <h1 className="text-[180px] font-bold text-white leading-none mb-6">
            Form
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mb-16">
            Reach out to our team for inquiries, support, or to discuss how we can meet your mineral exploration and processing needs.
            </p>
           </div>
           </div>
           </section>
   </div>
  )
}

export default page