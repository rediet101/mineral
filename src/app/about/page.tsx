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
      <section className="relative w-full md:w-[1410px] h-[400px] md:h-[679px] overflow-hidden rounded-[2px] border border-[1px]">
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
          
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <h1 className="text-6xl md:text-[200px] font-bold text-white leading-none mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Leading the way in sustainable mineral exploration and development since 1995 G.C
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-10 md:py-20 px-4 md:px-6">
        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-16 overflow-x-auto">
          <div className="flex gap-4 md:gap-8 border-b border-gray-200 min-w-max">
            <button className="pb-4 border-b-2 border-black font-medium text-black text-sm md:text-base">Our History</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors text-sm md:text-base">Mission & Vision</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors text-sm md:text-base">Core Values</button>
            <button className="pb-4 text-gray-500 hover:text-black transition-colors text-sm md:text-base">Achievements</button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Journey Since <span className="text-black">1995</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8 md:mb-12 text-sm md:text-base">
            For nearly three decades, Ethiopian Mineral Corporation has been at the forefront of mineral exploration and development in Ethiopia,
            contributing to the nation's economic growth while maintaining the highest standards of sustainability and social responsibility.
          </p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gray-200 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start md:items-center justify-start md:justify-center mb-8 md:mb-16">
                  {/* Year Circle */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-8 md:w-10 h-8 md:h-10 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                      <span className="text-white text-xs md:text-sm font-bold">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-6/12 pl-16 md:pl-8 ${
                    item.side === 'left' ? 'md:mr-auto md:pr-8' : 'md:ml-auto'
                  }`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow relative min-h-[160px] flex flex-col justify-between">
                      <div className={`absolute top-0 h-full w-1 bg-black rounded-lg ${
                        item.side === 'left' ? 'left-0 md:right-0' : 'left-0'
                      }`}></div>
                      <div className={`${item.side === 'left' ? 'pl-4 md:pr-4' : 'pl-4 md:pl-4'}`}>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 text-start md:text-end">{item.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base text-start md:text-end">{item.description}</p>
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
      <section className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
        {/* Partner With Us */}
        <div className="w-full md:w-1/2 bg-white p-10 min-h-[400px] flex flex-col">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Interested in working with Ethiopian Mineral Corporation?
              Whether you're looking for mineral exploration services, laboratory testing, or investment
              opportunities, we're here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link href="/getintouch" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                Contact Us
              </button>
            </Link>
            <Link href="https://reddy.ai/services" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-[#1B1F24] text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                Request Service
              </button>
            </Link>
          </div>
        </div>

        {/* Our Locations */}
        <div className="w-full md:w-1/2 bg-[#1B1F24] text-white p-10 min-h-[400px]">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">Our Locations</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Headquarters</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Bole Road, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 551 7777</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Laboratory Facility</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Industrial Zone, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 552 8888</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Regional Office</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Main Street, Hawassa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 553 9999</p>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-15'>
        <Footer/>
      </div>
    </div>
  )
}

export default page