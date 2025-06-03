'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('Minerals Exploration & Development')

  const services = [
    'Minerals Exploration & Development',
    'Mining Laboratory Services',
    'Gemstone Production & Retail',
    'Drilling & Consultancy Services'
  ]

  return (
        <div className="min-h-screen p-[10px] gap-[10px] overflow-x-hidden">
          <section className="relative w-full md:w-[1410px] h-[679px] overflow-hidden rounded-[2px] border border-[1px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/service.svg"
                alt="Mining Background"
                className="object-cover w-full h-full"
                width={1410}
                height={679}
                priority
              />
            </div>

        {/* Optional Dark Overlay */}


        {/* Content */}
        <div className="relative z-20 pt-3">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8 pt-30">
            <h1 className="text-white text-[6vh] md:text-[20vh] font-bold">
              Our Services
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Delivering excellence in mineral exploration, laboratory analysis, drilling
              operations, and gemstone production with cutting-edge technology and
              decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Core Services</h2>
        
        {/* Service Pills */}
        <div className="flex flex-wrap gap-4 mb-8 md:mb-16 justify-center items-center">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`px-4 py-3 rounded-full transition-colors ${
                activeService === service
                  ? 'bg-black text-white'
                  : 'border border-black text-black hover:bg-black/5'
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Minerals Exploration Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">Minerals Exploration & Development</h3>
            <p className="text-gray-700 mb-8">
              Our expert team utilizes cutting-edge exploration techniques to identify and evaluate 
              mineral deposits across Ethiopia's diverse geological landscape. We specialize in gold, 
              kaolin, quartz, feldspar, dolomite, and other industrial minerals, providing comprehensive 
              services from initial surveying to deposit valuation.
            </p>

            {/* Services List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-full">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="40" rx="16" fill="black"/>
<path d="M23.7812 25.8438C24.0625 26.1562 24.0625 26.625 23.75 26.9062L22.875 27.7812C22.5938 28.0938 22.125 28.0938 21.8125 27.7812L18.7188 24.6875C18.5625 24.5312 18.5 24.3438 18.5 24.1562V23.625C17.375 24.5 16 25 14.5 25C10.9062 25 8 22.0938 8 18.5C8 14.9375 10.9062 12 14.5 12C18.0625 12 21 14.9375 21 18.5C21 20.0312 20.4688 21.4062 19.625 22.5H20.125C20.3125 22.5 20.5 22.5938 20.6562 22.7188L23.7812 25.8438ZM14.5 22.5C16.6875 22.5 18.5 20.7188 18.5 18.5C18.5 16.3125 16.6875 14.5 14.5 14.5C12.2812 14.5 10.5 16.3125 10.5 18.5C10.5 20.7188 12.2812 22.5 14.5 22.5Z" fill="white"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold mb-2">Geological Mapping & Surveying</h4>
                  <p className="text-gray-600">
                    Detailed geological mapping and surveying to identify potential mineral deposits using 
                    advanced GIS technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-full">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="40" rx="16" fill="black"/>
<path d="M23.5 24C23.75 24 24 24.25 24 24.5V25.5C24 25.7812 23.75 26 23.5 26H9C8.4375 26 8 25.5625 8 25V14.5C8 14.25 8.21875 14 8.5 14H9.5C9.75 14 10 14.25 10 14.5V24H23.5ZM22.5 15C22.75 15 23 15.25 22.9688 15.5V19.2188C22.9688 19.875 22.1875 20.2188 21.7188 19.75L20.6875 18.7188L17.6875 21.7188C17.3125 22.125 16.6562 22.125 16.2812 21.7188L14 19.4375L12.5312 20.875C12.3438 21.0625 12.0312 21.0625 11.8438 20.875L11.125 20.1562C10.9375 19.9688 10.9375 19.6562 11.125 19.4688L13.2812 17.3125C13.6562 16.9062 14.3125 16.9062 14.6875 17.3125L17 19.5938L19.2812 17.3125L18.25 16.2812C17.7812 15.8125 18.125 15 18.7812 15H22.5Z" fill="white"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold mb-2">Geophysical & Geochemical Analysis</h4>
                  <p className="text-gray-600">
                    Comprehensive geophysical surveys and geochemical sampling to evaluate subsurface 
                    mineral potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-full">
                <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="40" rx="14" fill="#010101"/>
<path d="M15 16.25C15 16.6875 15.3125 17 15.75 17H20V27.25C20 27.6875 19.6562 28 19.25 28H8.75C8.3125 28 8 27.6875 8 27.25V12.75C8 12.3438 8.3125 12 8.75 12H15V16.25ZM10 14.25V14.75C10 14.9062 10.0938 15 10.25 15H12.75C12.875 15 13 14.9062 13 14.75V14.25C13 14.125 12.875 14 12.75 14H10.25C10.0938 14 10 14.125 10 14.25ZM10 16.25V16.75C10 16.9062 10.0938 17 10.25 17H12.75C12.875 17 13 16.9062 13 16.75V16.25C13 16.125 12.875 16 12.75 16H10.25C10.0938 16 10 16.125 10 16.25ZM16 24C15.875 24 15.75 23.9375 15.6875 23.8125C15.3125 23.0625 14.25 22.875 13.625 23.375L13.1875 22.0625C13.0938 21.75 12.8125 21.5625 12.5 21.5625C12.1562 21.5625 11.875 21.75 11.7812 22.0625L11.2188 23.7812C11.1562 23.9062 11.0312 24 10.875 24H10.5C10.2188 24 10 24.25 10 24.5C10 24.7812 10.2188 25 10.5 25H10.875C11.4688 25 11.9688 24.6562 12.1562 24.0938L12.5 23.0938L13 24.6875C13.0625 24.875 13.25 25 13.4375 25C13.4688 25 13.4688 25 13.5 25C13.5 25 13.4688 25.0312 13.5 25.0312C13.6875 25.0312 13.8438 24.9062 13.9375 24.75L14.1562 24.25C14.25 24.0938 14.4062 24.0625 14.5 24.0625C14.5625 24.0625 14.7188 24.0938 14.8125 24.2812C15.0312 24.7188 15.5 25 16 25H17.5C17.75 25 18 24.7812 18 24.5C18 24.25 17.75 24 17.5 24H16ZM19.7812 15.2812C19.9062 15.4375 20 15.625 20 15.8125V16H16V12H16.1875C16.375 12 16.5625 12.0938 16.7188 12.2188L19.7812 15.2812Z" fill="white"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold mb-2">Resource Estimation & Reporting</h4>
                  <p className="text-gray-600">
                    Accurate mineral resource estimation and reporting in compliance with international 
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-full">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="40" rx="16" fill="black"/>
<path d="M10 15C13.8438 15 17 18.1562 17 22V26.5C17 26.7812 16.75 27 16.5 27H15.5C15.2188 27 15 26.7812 15 26.5V22C11.125 22 8 18.875 8 15H10ZM22 13H24C24 16.625 21.25 19.625 17.7188 19.9688C17.375 18.7188 16.75 17.5625 15.875 16.625C17.0625 14.4688 19.3438 13 22 13Z" fill="white"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold mb-2">Environmental Impact Assessment</h4>
                  <p className="text-gray-600">
                    Thorough environmental impact assessments to ensure sustainable exploration practices.
                  </p>
                </div>
              </div>
            </div>
<Link href="/contact">
            <button className="mt-8 bg-black text-white px-6 py-3 rounded-full">
              Request Testing Services
            </button>
            </Link>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/servicecore.svg"
              alt="Mining workers analyzing samples"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-32">
        <div className="flex flex-col mb-12 md:mb-24">
          <h2 className="text-5xl md:text-8xl font-bold mb-6">Our Methodology</h2>
          <p className="text-xl md:text-2xl text-gray-600 w-full">
            We follow a systematic approach to deliver exceptional results for all our
            mining and mineral services, ensuring quality, safety, and efficiency at every
            stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Assessment */}
          <div className="border rounded-3xl p-8 md:p-12">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl">1</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Assessment</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Thorough evaluation of project requirements, site conditions, and objectives to develop a tailored approach.
            </p>
          </div>

          {/* Planning */}
          <div className="border rounded-3xl p-8 md:p-12">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl">2</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Planning</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Detailed project planning including resource allocation, timeline development, and risk assessment.
            </p>
          </div>

          {/* Execution */}
          <div className="border rounded-3xl p-8 md:p-12">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl">3</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Execution</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Implementation of project plans with strict adherence to safety standards and quality control measures.
            </p>
          </div>

          {/* Analysis & Reporting */}
          <div className="border rounded-3xl p-8 md:p-12">
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="text-3xl">4</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Analysis & Reporting</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive data analysis and detailed reporting with actionable insights and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-16 bg-gray-50 shadow-xl/30">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-16">Equipment & Technology</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Exploration Technology */}
          <div>
            <div className="flex items-center gap-3 mb-6">
             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1484 11.1836L14.7383 14.5586C14.5625 14.7695 14.2812 14.9102 13.9648 14.9102C13.6484 14.9102 13.3672 14.7695 13.1562 14.5586L10.3438 11.7461L9.99219 12.0977C10.3789 12.9414 10.5898 13.8555 10.5898 14.8398C10.5898 16 10.3086 17.0898 9.81641 18.0039C9.64062 18.3203 9.21875 18.3555 9.00781 18.1094L5.21094 14.3477L4.57812 14.9453C4.61328 15.0508 4.64844 15.1211 4.64844 15.2266C4.64844 15.8594 4.15625 16.3516 3.52344 16.3516C2.89062 16.3516 2.39844 15.8594 2.39844 15.2266C2.39844 14.5938 2.89062 14.1016 3.52344 14.1016C3.62891 14.1016 3.69922 14.1367 3.80469 14.1719L4.40234 13.5391L0.640625 9.74219C0.394531 9.53125 0.429688 9.10938 0.746094 8.93359C1.66016 8.44141 2.75 8.16016 3.875 8.16016C4.85938 8.16016 5.80859 8.37109 6.65234 8.75781L7.00391 8.40625L4.19141 5.59375C3.98047 5.38281 3.83984 5.10156 3.83984 4.78516C3.83984 4.46875 3.98047 4.1875 4.19141 4.01172L7.56641 0.601562C7.77734 0.390625 8.05859 0.25 8.375 0.25C8.69141 0.25 8.97266 0.390625 9.18359 0.601562L11.9961 3.41406L13.6836 1.72656C13.8945 1.51562 14.1758 1.375 14.4922 1.375C14.8438 1.375 15.125 1.51562 15.3359 1.72656L17.0234 3.41406C17.2344 3.625 17.375 3.90625 17.375 4.22266C17.375 4.57422 17.2344 4.85547 17.0234 5.06641L15.3359 6.75391L18.1484 9.60156C18.3594 9.77734 18.5 10.0586 18.5 10.375C18.5 10.6914 18.3594 10.9727 18.1484 11.1836ZM8.19922 7.21094L10.8008 4.60938L8.375 2.18359L5.77344 4.78516L8.19922 7.21094ZM16.5664 10.375L14.1406 7.94922L11.5391 10.5508L13.9648 12.9766L16.5664 10.375Z" fill="black"/>
</svg>

              <h3 className="text-xl font-bold">Exploration Technology</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced GPS and GIS mapping systems</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Ground-penetrating radar equipment</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Magnetometers and electromagnetic surveying tools</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Portable XRF analyzers for field testing</span>
              </li>
            </ul>
          </div>

          {/* Laboratory Equipment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
             <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8633 14.4531C17.8828 16.1055 16.6875 18.25 14.7539 18.25H3.96094C2.02734 18.25 0.832031 16.1055 1.85156 14.4531L6 7.80859V2.5H5.71875C5.22656 2.5 4.875 2.14844 4.875 1.65625V1.09375C4.875 0.636719 5.22656 0.25 5.71875 0.25H13.0312C13.4883 0.25 13.875 0.636719 13.875 1.09375V1.65625C13.875 2.14844 13.4883 2.5 13.0312 2.5H12.75V7.80859L16.8633 14.4531ZM6.31641 11.5H12.3633L10.6758 8.79297C10.5703 8.61719 10.4648 8.37109 10.4648 8.125V2.5H8.21484V8.125C8.21484 8.37109 8.14453 8.61719 8.03906 8.79297L6.31641 11.5Z" fill="black"/>
</svg>


              <h3 className="text-xl font-bold">Laboratory Equipment</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>X-ray diffraction (XRD) analyzers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Atomic absorption spectrometers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Scanning electron microscopes</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Fire assay furnaces and equipment</span>
              </li>
            </ul>
          </div>

          {/* Drilling Equipment */}
          <div>
            <div className="flex items-center gap-3 mb-6">
            <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4375 8.125C22.7188 8.125 23 8.40625 23 8.6875V9.8125C23 10.1289 22.7188 10.375 22.4375 10.375H21.8398C20.8203 9.03906 19.2031 8.125 17.375 8.125C15.5117 8.125 13.8945 9.03906 12.875 10.375H10.5898C9.57031 9.03906 7.95312 8.125 6.125 8.125C4.26172 8.125 2.64453 9.03906 1.625 10.375H1.0625C0.746094 10.375 0.5 10.1289 0.5 9.8125V8.6875C0.5 8.40625 0.746094 8.125 1.0625 8.125H1.625V5.3125C1.625 5.03125 1.87109 4.75 2.1875 4.75H8.375V1.375C8.375 0.777344 8.86719 0.25 9.5 0.25H13.4727C14.1758 0.285156 14.8086 0.601562 15.2305 1.12891L18.1484 4.75H20.75C21.3477 4.75 21.875 5.27734 21.875 5.875V8.125H22.4375ZM10.625 4.75H15.2656L13.4727 2.5H10.625V4.75ZM21.3125 12.625C21.5938 12.625 21.875 12.9062 21.875 13.1875V14.3125C21.875 14.6289 21.5938 14.875 21.3125 14.875H21.1016C21.0312 15.1562 20.9258 15.4023 20.8203 15.6133L20.9258 15.7539C21.1719 15.9648 21.1719 16.3164 20.9258 16.5625L20.1523 17.3359C19.9062 17.582 19.5547 17.582 19.3438 17.3359L19.2031 17.2305C18.9922 17.3359 18.7461 17.4414 18.5 17.5117V17.6875C18.5 18.0039 18.2188 18.25 17.9375 18.25H16.8125C16.4961 18.25 16.25 18.0039 16.25 17.6875V17.5117C15.9688 17.4414 15.7227 17.3359 15.5117 17.2305L15.3711 17.3359C15.1602 17.582 14.8086 17.582 14.5625 17.3359L13.7891 16.5625C13.543 16.3164 13.543 15.9648 13.7891 15.7539L13.8945 15.6133C13.7891 15.4023 13.6836 15.1562 13.6133 14.875H13.4375C13.1211 14.875 12.875 14.6289 12.875 14.3125V13.1875C12.875 12.9062 13.1211 12.625 13.4375 12.625H13.6133C13.6836 12.3789 13.7891 12.1328 13.8945 11.9219L13.7891 11.7812C13.543 11.5703 13.543 11.2188 13.7891 10.9727L14.5625 10.1992C14.8086 9.95312 15.1602 9.95312 15.3711 10.1992L15.5117 10.3047C15.7227 10.1992 15.9688 10.0938 16.25 10.0234V9.8125C16.25 9.53125 16.4961 9.25 16.8125 9.25H17.9375C18.2188 9.25 18.5 9.53125 18.5 9.8125V10.0234C18.7461 10.0938 18.9922 10.1992 19.2031 10.3047L19.3438 10.1992C19.5547 9.95312 19.9062 9.95312 20.1523 10.1992L20.9258 10.9727C21.1719 11.2188 21.1719 11.5703 20.9258 11.7812L20.8203 11.9219C20.9258 12.1328 21.0312 12.3789 21.1016 12.625H21.3125ZM17.375 15.4375C18.2891 15.4375 19.0625 14.6992 19.0625 13.75C19.0625 12.8359 18.2891 12.0625 17.375 12.0625C16.4258 12.0625 15.6875 12.8359 15.6875 13.75C15.6875 14.6992 16.4258 15.4375 17.375 15.4375ZM10.0625 12.625C10.3438 12.625 10.625 12.9062 10.625 13.1875V14.3125C10.625 14.6289 10.3438 14.875 10.0625 14.875H9.85156C9.78125 15.1562 9.67578 15.4023 9.57031 15.6133L9.67578 15.7539C9.92188 15.9648 9.92188 16.3164 9.67578 16.5625L8.90234 17.3359C8.65625 17.582 8.30469 17.582 8.09375 17.3359L7.95312 17.2305C7.74219 17.3359 7.49609 17.4414 7.25 17.5117V17.6875C7.25 18.0039 6.96875 18.25 6.6875 18.25H5.5625C5.24609 18.25 5 18.0039 5 17.6875V17.5117C4.71875 17.4414 4.47266 17.3359 4.26172 17.2305L4.12109 17.3359C3.91016 17.582 3.55859 17.582 3.3125 17.3359L2.53906 16.5625C2.29297 16.3164 2.29297 15.9648 2.53906 15.7539L2.64453 15.6133C2.53906 15.4023 2.43359 15.1562 2.36328 14.875H2.1875C1.87109 14.875 1.625 14.6289 1.625 14.3125V13.1875C1.625 12.9062 1.87109 12.625 2.1875 12.625H2.36328C2.43359 12.3789 2.53906 12.1328 2.64453 11.9219L2.53906 11.7812C2.29297 11.5703 2.29297 11.2188 2.53906 10.9727L3.3125 10.1992C3.55859 9.95312 3.91016 9.95312 4.12109 10.1992L4.26172 10.3047C4.47266 10.1992 4.71875 10.0938 5 10.0234V9.8125C5 9.53125 5.24609 9.25 5.5625 9.25H6.6875C6.96875 9.25 7.25 9.53125 7.25 9.8125V10.0234C7.49609 10.0938 7.74219 10.1992 7.95312 10.3047L8.09375 10.1992C8.30469 9.95312 8.65625 9.95312 8.90234 10.1992L9.67578 10.9727C9.92188 11.2188 9.92188 11.5703 9.67578 11.7812L9.57031 11.9219C9.67578 12.1328 9.78125 12.3789 9.85156 12.625H10.0625ZM6.125 15.4375C7.03906 15.4375 7.8125 14.6992 7.8125 13.75C7.8125 12.8359 7.03906 12.0625 6.125 12.0625C5.17578 12.0625 4.4375 12.8359 4.4375 13.75C4.4375 14.6992 5.17578 15.4375 6.125 15.4375Z" fill="black"/>
</svg>

              <h3 className="text-xl font-bold">Drilling Equipment</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Atlas Copco Diamec drilling rigs</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Schramm T450 RC drilling rigs</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Sandvik DE710 surface core drilling rigs</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Modern sampling and core processing equipment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
         {/* Laboratory Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          {/* Headings */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-5xl md:text-8xl font-bold mb-4">State Of The Art</h2>
            <h3 className="text-5xl md:text-8xl font-bold">Laboratory Services</h3>
          </div>

          {/* Lab Services Card */}
          <div className="bg-black text-white rounded-[2rem] overflow-visible relative">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Content */}
              <div className="p-6 md:p-12 relative z-10">
                <h4 className="text-2xl md:text-3xl font-bold mb-6">State-of-the-Art Laboratory Services</h4>
                <p className="text-gray-300 mb-8 text-sm md:text-base">
                  Our advanced laboratory facilities offer comprehensive testing and analysis services for the mining
                  industry. With cutting-edge equipment and experienced professionals, we deliver accurate and
                  reliable results for all your mineral testing needs.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4 mb-8 md:mb-12">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Mineral Composition Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Ore Grade Determination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Geochemical Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Mineralogical Studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Environmental Impact Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Quality Control Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Gemstone Authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Metal Purity Analysis</span>
                  </div>
                </div>

                {/* Certification Badges */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 mb-8">
                  <button className="flex items-center gap-2 border border-white rounded-full px-10 py-2 hover:bg-white/10 transition-colors">
                   <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8125 9.08105L16.25 10.4873C16.6875 10.8936 16.4688 11.6123 15.9062 11.7686L13.9688 12.2686L14.5 14.2061C14.6562 14.7686 14.1562 15.2686 13.5938 15.1123L11.6562 14.5811L11.1562 16.5186C11 17.1123 10.2812 17.2998 9.875 16.8623L8.5 15.4248L7.09375 16.8623C6.6875 17.2686 5.96875 17.1123 5.8125 16.5186L5.3125 14.5811L3.375 15.1123C2.8125 15.2686 2.3125 14.7686 2.46875 14.2061L3 12.2686L1.0625 11.7686C0.5 11.6123 0.28125 10.8936 0.71875 10.4873L2.15625 9.08105L0.71875 7.6748C0.28125 7.26855 0.5 6.5498 1.0625 6.4248L3 5.9248L2.46875 3.9873C2.3125 3.4248 2.8125 2.89355 3.375 3.0498L5.3125 3.6123L5.8125 1.64355C5.9375 1.08105 6.6875 0.893555 7.09375 1.33105L8.5 2.76855L9.875 1.33105C10.2812 0.893555 11.0312 1.1123 11.1562 1.64355L11.6562 3.6123L13.5938 3.0498C14.1562 2.89355 14.6562 3.4248 14.5 3.9873L13.9688 5.9248L15.9062 6.4248C16.4688 6.5498 16.6875 7.26855 16.25 7.6748L14.8125 9.08105Z" fill="#F0F0F0"/>
</svg>

                    <span className="text-sm text-white">ISO 9001 Certified</span>
                  </button>
                  <button className="flex items-center gap-2 border border-white rounded-full px-6 py-2 hover:bg-white/10 transition-colors">
                   <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.53125 11.4248C3.9375 11.8623 4.53125 12.0811 5.125 12.0811C5.53125 12.0811 5.90625 11.9873 6.25 11.7998L4.59375 15.7998C4.46875 16.1123 4.03125 16.2061 3.78125 15.9248L2.65625 14.7373L1 14.7998C0.65625 14.8311 0.375 14.4561 0.53125 14.1123L1.9375 10.6436C2.1875 10.8311 2.4375 10.9873 2.75 11.0498C3.375 11.2373 3.25 11.1436 3.53125 11.4248ZM12.4375 14.1123C12.5938 14.4561 12.3125 14.8311 11.9688 14.7998L10.3125 14.7373L9.1875 15.9248C8.9375 16.2061 8.5 16.1123 8.375 15.7998L6.71875 11.7998C7.0625 11.9873 7.4375 12.0811 7.84375 12.0811C8.4375 12.0811 9.03125 11.8623 9.4375 11.4248C9.71875 11.1436 9.5625 11.2373 10.25 11.0498C10.5312 10.9873 10.7812 10.8311 11.0312 10.6436L12.4375 14.1123ZM8.71875 10.7061C8.28125 11.1436 7.65625 11.2061 7.15625 10.8936C6.96875 10.7686 6.71875 10.7061 6.46875 10.7061C6.25 10.7061 6 10.7686 5.8125 10.8936C5.3125 11.2061 4.6875 11.1436 4.28125 10.7061C3.8125 10.2373 3.75 10.2686 3.0625 10.0811C2.625 9.9873 2.28125 9.64355 2.15625 9.1748C1.9375 8.2998 2 8.39355 1.34375 7.76855C1.03125 7.4248 0.90625 6.95605 1.03125 6.51855C1.25 5.64355 1.25 5.76855 1.03125 4.8623C0.90625 4.4248 1.03125 3.95605 1.34375 3.64355C2 2.9873 1.9375 3.08105 2.15625 2.20605C2.28125 1.76855 2.625 1.4248 3.0625 1.2998C3.9375 1.0498 3.8125 1.1123 4.46875 0.456055C4.78125 0.143555 5.25 0.0185547 5.6875 0.143555C6.53125 0.362305 6.4375 0.362305 7.28125 0.143555C7.71875 0.0185547 8.1875 0.143555 8.5 0.456055C9.15625 1.1123 9.03125 1.0498 9.90625 1.2998C10.3438 1.4248 10.6875 1.76855 10.8125 2.20605C11.0312 3.08105 10.9688 2.9873 11.625 3.64355C11.9375 3.95605 12.0625 4.4248 11.9375 4.8623C11.7188 5.76855 11.7188 5.64355 11.9375 6.51855C12.0625 6.95605 11.9375 7.4248 11.625 7.76855C10.9688 8.39355 11.0312 8.2998 10.8125 9.1748C10.6875 9.64355 10.3438 9.9873 9.90625 10.0811C9.25 10.2686 9.1875 10.2373 8.71875 10.7061ZM3.53125 5.58105C3.53125 7.2373 4.84375 8.58105 6.5 8.58105C8.125 8.58105 9.4375 7.2373 9.4375 5.58105C9.4375 3.9248 8.125 2.58105 6.5 2.58105C4.84375 2.58105 3.53125 3.9248 3.53125 5.58105Z" fill="#F0F0F0"/>
</svg>

                    <span className="text-sm text-white">Nationally Accredited</span>
                  </button>
                  <button className="flex items-center gap-2 border border-white rounded-full px-6 py-2 hover:bg-white/10 transition-colors">
                  <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.59375 1.64355C8.96875 0.893555 10.0312 0.924805 10.375 1.64355L12.4375 5.7998L17 6.45605C17.8125 6.58105 18.125 7.58105 17.5312 8.1748L14.25 11.3936L15.0312 15.9248C15.1562 16.7373 14.2812 17.3623 13.5625 16.9873L9.5 14.8311L5.40625 16.9873C4.6875 17.3623 3.8125 16.7373 3.9375 15.9248L4.71875 11.3936L1.4375 8.1748C0.84375 7.58105 1.15625 6.58105 1.96875 6.45605L6.5625 5.7998L8.59375 1.64355Z" fill="#F0F0F0"/>
</svg>

                    <span className="text-sm text-white">Industry Standard Compliance</span>
                  </button>
                </div>

                {/* CTA Button */}
                <Link href={"/contact"}>
                <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
                  Request Testing Services
                </button>
                </Link>
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden w-full h-[300px]">
                <img
                  src="/lab.svg"
                  alt="Laboratory Scientists"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Image - Outside the grid */}
            <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-10 w-[600px] z-20">
              <img
                src="/lab.svg"
                alt="Laboratory Scientists"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="container mx-auto px-4 md:px-8 py-10 md:py-20">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">Featured Case Studies</h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 md:mb-12">
          Explore our successful projects and see how our comprehensive
          services have delivered exceptional results for our clients across
          Ethiopia.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Oromia Gold Project */}
          <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-shadow w-full md:min-w-[400px]">
            <div className="rounded-3xl overflow-hidden mb-6">
              <Image
                src="/ft1.svg"
                alt="Oromia Gold Project"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Oromia Gold Project</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive exploration and development of a major
              gold deposit in the Oromia region, resulting in a
              commercially viable mining operation.
            </p>
            <div className="mb-6">
              <h4 className="text-gray-500 mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Identified 1.2M oz gold resource</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Completed feasibility study in 8 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Implemented sustainable mining practices</span>
                </li>
              </ul>
            </div>
            <button className="flex items-center gap-2 text-black font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
              View Case Study
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Welo Opal Project */}
          <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-shadow w-full md:min-w-[400px]">
            <div className="rounded-3xl overflow-hidden mb-6">
              <Image
                src="/ft2.svg"
                alt="Welo Opal Project"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-3 whitespace-nowrap">
              <h3 className="text-2xl font-bold">Welo Opal Project</h3>
              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs flex-shrink-0">Gemstone Production</span>
            </div>
            <p className="text-gray-600 mb-4">
              Development of a sustainable opal mining operation in the
              Welo region, including exploration, extraction, and market
              development.
            </p>
            <div className="mb-6">
              <h4 className="text-gray-500 mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Established ethical mining practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Created 200+ local jobs</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Developed international market channels</span>
                </li>
              </ul>
            </div>
            <button className="flex items-center gap-2 text-black font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
              View Case Study
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Tigray Kaolin Project */}
          <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-shadow w-full md:min-w-[400px]">
            <div className="rounded-3xl overflow-hidden mb-6">
              <Image
                src="/ft3.svg"
                alt="Tigray Kaolin Project"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mb-3 whitespace-nowrap">
              <h3 className="text-2xl font-bold">Tigray Kaolin Project</h3>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs flex-shrink-0">Industrial Minerals</span>
            </div>
            <p className="text-gray-600 mb-4">
              Exploration and development of high-quality kaolin
              deposits in the Tigray region, including laboratory testing
              and market development.
            </p>
            <div className="mb-6">
              <h4 className="text-gray-500 mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Identified premium-grade kaolin deposits</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Developed processing facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="whitespace-nowrap">Secured export contracts worth $3.5M</span>
                </li>
              </ul>
            </div>
            <button className="flex items-center gap-2 text-black font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
              View Case Study
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
