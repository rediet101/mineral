'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const NewsDetail = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-[url('/News1.svg')] bg-contain bg-no-repeat justify-center items-center">
        {/* Background Image */}
        

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <div className=" bg-opacity-50 p-6 rounded-lg max-w-3xl">
              <p className="text-white text-sm mb-2">MINING & RESOURCES | December 15, 2023</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Major Feldspar Discovery: Ethiopia's Benishangul Region Set for $22M Mining Development
              </h1>
              <h2 className="text-xl md:text-2xl text-white mb-6">
                Groundbreaking project promises economic boost and job creation in mineral-rich region
              </h2>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-3 md:py-3 px-4 md:px-8 -mt-15">
        <div className="max-w-3xl mx-auto">
          <div className="mb-1">
            <p className="text-gray-600 italic text-lg mb-6">
              In a significant development for Ethiopia's mining sector, a new $22 million feldspar mining project has been announced in the Benishangul region, marking one of the largest mineral investments in the area to date.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
          <p className="text-gray-600 mb-8">
            The ambitious mining initiative, spanning 680 hectares, is set to commence operations in early 2024. Industry experts project that this development will not only boost the region's economy but also create hundreds of direct and indirect employment opportunities for local communities.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Economic Impact</h3>
          <p className="text-gray-600 mb-8">
            According to mining sector analysts, the project is expected to generate substantial export revenue for Ethiopia, with initial estimates suggesting annual production capacity could reach up to 200,000 tonnes of high-grade feldspar. The mineral, essential for ceramics and glass manufacturing, has seen increasing demand in international markets.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Environmental Considerations</h3>
          <p className="text-gray-600 mb-8">
            The project developers have emphasized their commitment to sustainable mining practices, with comprehensive environmental impact assessments already completed. The mining operation will implement state-of-the-art dust suppression systems and water management protocols to minimize environmental impact.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Community Development</h3>
          <p className="text-gray-600 mb-8">
            As part of the project's social responsibility initiative, significant investments are planned for local infrastructure development, including road improvements and community facilities. Training programs will be established to ensure local workforce participation in the mining operations.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-3">Quick Facts:</h4>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Project Duration: 5 years (2024-2029)</li>
              <li>Expected Job Creation: 300+ direct positions</li>
              <li>Infrastructure Investment: $5 million allocated</li>
              <li>Environmental Compliance: ISO 14001 standards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8 md:pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative h-[250px] md:h-[400px]">
              <Image
                src="/ben.svg"
                alt="Aerial view of the Benishangul mining site"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
            <div className="md:col-span-4 relative h-[250px] md:h-[400px]">
              <Image
                src="/ben3.svg"
                alt="Mining equipment and operations"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>

            <div className="md:col-span-4 relative h-[250px] md:h-[300px]">
              <Image
                src="/ben2.svg"
                alt="Environmental protection measures"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
            <div className="md:col-span-8 relative h-[250px] md:h-[300px]">
              <Image
                src="/ben.svg"
                alt="Community engagement initiatives"
                className="object-cover rounded-[20px]"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsDetail 