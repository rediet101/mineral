import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer';
import Link from 'next/link'

const timeline = [
  {
    year: "1995",
    title: "Company Founded",
    description:
      "Ethiopian Mineral Corporation was established with a vision to develop Ethiopia's rich mineral resources sustainably.",
    side: "right",
  },
  {
    year: "2003",
    title: "First Major Discovery",
    description:
      "Discovered significant gold deposits in the Oromia region, marking our first major success in mineral exploration.",
    side: "left",
  },
  {
    year: "2008",
    title: "Laboratory Expansion",
    description:
      "Expanded our testing capabilities with a state-of-the-art laboratory facility in Addis Ababa.",
    side: "right",
  },
  {
    year: "2012",
    title: "International Recognition",
    description:
      "Received international certification for our sustainable mining practices and environmental management systems.",
    side: "left",
  },
  {
    year: "2017",
    title: "Gemstone Division",
    description:
      "Launched our gemstone division, focusing on ethically sourced emeralds, sapphires, and other precious stones.",
    side: "right",
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description:
      "Implemented advanced digital technologies across our operations to enhance efficiency and sustainability.",
    side: "left",
  },
];

const page = () => {
  return (
    <div className="min-h-screen p-[10px] gap-[10px]">
      <section className="relative w-[1410px] h-[679px] overflow-hidden rounded-[2px] border border-[1px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.svg"
            alt="Background"
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            width={1410}
            height={679}
            style={{ objectPosition: 'center 30%' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20">
          <Navbar />
          
          <div className="container mx-auto px-8 pt-20">
            <h1 className="text-[200px] font-bold text-white leading-none mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Leading the way in sustainable mineral exploration and development since 1995 G.C
            </p>
          </div>
        </div>
      </section>
       <section className="bg-white py-20 px-6">
        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex gap-8 border-b border-gray-200">
            <button className="pb-4 border-b-2 border-black font-medium text-black">Our History</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors">Mission & Vision</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors">Core Values</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors">Achievements</button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Journey Since <span className="text-black">1995</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            For nearly three decades, Ethiopian Mineral Corporation has been at the forefront of mineral exploration and development in Ethiopia,
            contributing to the nation's economic growth while maintaining the highest standards of sustainability and social responsibility.
          </p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center justify-center mb-16">
                  {/* Year Circle - Always Centered */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-6/12 ${item.side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow relative">
                      <div className={`absolute top-0 h-full w-1 bg-black rounded-lg ${ 
                        item.side === 'left' ? 'right-0' : 'left-0'
                      }`}></div>
                      <div className={`${item.side === 'left' ? 'pr-4' : 'pl-4'}`}>
                        <h3 className="text-xl text-end font-bold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-end">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner and Locations Section */}
      <section className="flex shadow-2xl rounded-lg overflow-hidden">
        {/* Partner With Us - Left Side */}
        <div className="w-1/2 bg-white p-16">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-gray-600 mb-8">
            Interested in working with Ethiopian Mineral Corporation?
            <br />
            Whether you're looking for
            <br />
            mineral exploration services, laboratory testing, or investment
            <br />
            opportunities, we're here to
            <br />
            help.
          </p>
          <div className="flex gap-4">
            <Link href="/getintouch" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </Link>
            <Link href="https://reddy.ai/services" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#1B1F24] text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
                Request Service
              </button>
            </Link>
          </div>
        </div>

        {/* Our Locations - Right Side */}
        <div className="w-1/2 bg-[#1B1F24] text-white p-16">
          <h2 className="text-2xl font-semibold mb-8">Our Locations</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Headquarters</h3>
              <p className="text-gray-300 mb-1">Bole Road, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300">+251 11 551 7777</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Laboratory Facility</h3>
              <p className="text-gray-300 mb-1">Industrial Zone, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300">+251 11 552 8888</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Regional Office</h3>
              <p className="text-gray-300 mb-1">Main Street, Hawassa, Ethiopia</p>
              <p className="text-gray-300">+251 11 553 9999</p>
            </div>
          </div>
        </div>
      </section>
      <div   className='mt-15'>
      <Footer/>
      </div>
    </div>
  )
}

export default page