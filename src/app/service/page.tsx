'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';


export default function ServicesPage() {
 const [activeService, setActiveService] = useState('Minerals Exploration & Development')

  type ServiceDescription = {
    title: string;
    description: string;
    image: string;
    features: {
      title: string;
      description: string;
    }[];
  }

  type ServiceDescriptions = {
    [key: string]: ServiceDescription;
  }

  const serviceDescriptions: ServiceDescriptions = {
    "Minerals Exploration & Development": {
      title: "Minerals Exploration & Development",
      description: "Our expert team utilizes cutting-edge exploration techniques to identify and evaluate mineral deposits across Ethiopia's diverse geological landscape. We specialize in gold, kaolin, quartz, feldspar, dolomite, and other industrial minerals, providing comprehensive services from initial surveying to deposit valuation.",
      image: "/minerals.svg",
      features: [
        {
          title: "Geological Mapping & Surveying",
          description: "Detailed geological mapping and surveying to identify potential mineral deposits using advanced GIS technology."
        },
        {
          title: "Geophysical & Geochemical Analysis",
          description: "Comprehensive geophysical surveys and geochemical sampling to evaluate subsurface mineral potential."
        },
        {
          title: "Resource Estimation & Reporting",
          description: "Accurate mineral resource estimation and reporting in compliance with international standards."
        },
        {
          title: "Environmental Impact Assessment",
          description: "Thorough environmental impact assessments to ensure sustainable exploration practices."
        }
      ]
    },
    "Mining Laboratory Services": {
      title: "Mining Laboratory Services",
      description: "Our state-of-the-art laboratory facilities provide comprehensive testing and analysis services for the mining industry. Equipped with advanced technology and staffed by experienced professionals, we deliver accurate and reliable results for all mineral testing needs.",
      image: "/lab.svg",
      features: [
        {
          title: "Mineral Composition Analysis",
          description: "Detailed analysis of mineral composition using X-ray diffraction, X-ray fluorescence, and atomic absorption spectroscopy."
        },
        {
          title: "Ore Grade Determination",
          description: "Precise ore grade determination for gold, silver, copper, and other valuable minerals using fire assay and other methods."
        },
        {
          title: "Geochemical Testing",
          description: "Comprehensive geochemical analysis of soil, rock, and water samples to support exploration and environmental monitoring."
        },
        {
          title: "Gemstone Authentication",
          description: "Expert gemstone authentication and quality assessment using advanced gemological equipment."
        }
      ]
    },
    "Gemstone Production & Retail": {
      title: "Gemstone Production & Retail",
      description: "We offer ethically sourced gemstones from exploration to retail, providing the finest quality stones from Ethiopian mines. Our gemstone production process ensures the highest standards of quality and authenticity for every stone.",
      image: "/gemstone.svg",
      features: [
        {
          title: "Gemstone Mining & Extraction",
          description: "Specialised mining techniques for careful extraction of precious gemstones including opals, emeralds, sapphires, and more."
        },
        {
          title: "Cutting & Polishing",
          description: "Expert cutting and polishing services to maximize the beauty and value of each gemstone."
        },
        {
          title: "Gemstone Certification",
          description: "Professional gemstone certification services to authenticate and grade precious stones."
        },
        {
          title: "Wholesale & Retail",
          description: "Wholesale and retail services for ethically sourced Ethiopian gemstones with full traceability."
        }
      ]
    },
    "Drilling & Consultancy Services": {
      title: "Drilling & Consultancy Services",
      description: "Our comprehensive drilling and consultancy services provide expert guidance and execution for mining projects of all scales. We combine technical expertise with state-of-the-art drilling equipment to deliver reliable results.",
      image: "/drilling.svg",
      features: [
        {
          title: "Diamond Core Drilling",
          description: "Precision core drilling services for detailed geological analysis and resource evaluation."
        },
        {
          title: "Technical Consulting",
          description: "Expert consulting services for project planning, feasibility studies, and operational optimization."
        },
        {
          title: "Equipment Solutions",
          description: "Access to modern drilling equipment and technical support for various geological conditions."
        },
        {
          title: "Project Management",
          description: "Comprehensive project management services from planning to execution and monitoring."
        }
      ]
    }
  }

  return (
        <div className="min-h-screen overflow-x-hidden">
          <section className="relative w-full h-[100vh] bg-[url('/service.svg')] bg-contain bg-no-repeat justify-center items-center">
  {/* Background Image - remains unchanged */}
  
  {/* Content - responsive adjustments */}
  <div className="relative z-20 pt-3">
    <Navbar />
    
    <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-30">
      {/* Responsive heading */}
      <h1 className="text-white text-6xl md:text-[140px] font-bold leading-tight md:leading-none">
        Our Services
      </h1>
      
      {/* Responsive paragraph - hidden on mobile if it doesn't fit well */}
      <p className="hidden md:block text-white/90 text-xl max-w-2xl">
        Delivering excellence in mineral exploration, laboratory analysis, drilling
        operations, and gemstone production with cutting-edge technology and
        decades of expertise.
      </p>
      
      {/* Mobile-only alternative content */}
      <div className="md:hidden mt-6">
        <p className="text-white/90 text-base max-w-[90%]">
          Expert mineral services with cutting-edge technology and decades of experience.
        </p>
      </div>
    </div>
  </div>
  
  {/* Optional mobile adjustments for background */}
  <style jsx>{`
    @media (max-width: 767px) {
      section {
        background-size: cover;
        background-position: center;
        height: 80vh;
      }
    }
  `}</style>
</section>

      {/* Core Services Section */}
      <section className="mx-auto px-4 md:px-8 py-5 md:py-1 -mt-3 md:-mt-15">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Our Core Services</h2>
        
        <div className="flex flex-col gap-4 mb-8 md:mb-16">
          {/* First row of buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className={`rounded-full px-6 md:px-6 py-6 text-xl whitespace-normal md:whitespace-nowrap ${
                  activeService === "Minerals Exploration & Development"
                    ? "bg-black text-white hover:bg-black/90 hover:text-white"
                    : "border border-black bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setActiveService("Minerals Exploration & Development")}
              >
                Minerals Exploration & Development
              </Button>
              
              {/* Fourth button below first button */}
              <Button
                variant="outline"
                className={`rounded-full px-6 md:px-6 py-6 text-xl whitespace-normal md:whitespace-nowrap ${
                  activeService === "Drilling & Consultancy Services"
                    ? "bg-black text-white hover:bg-black/90 hover:text-white"
                    : "border border-black bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setActiveService("Drilling & Consultancy Services")}
              >
                Drilling & Consultancy Services
              </Button>
            </div>

            <Button
              variant="outline"
              className={`rounded-full px-6 md:px-6 py-6 text-xl whitespace-normal md:whitespace-nowrap ${
                activeService === "Mining Laboratory Services"
                  ? "bg-black text-white hover:bg-black/90 hover:text-white"
                  : "border border-black bg-white text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveService("Mining Laboratory Services")}
            >
              Mining Laboratory Services
            </Button>

            <Button
              variant="outline"
              className={`rounded-full px-6 md:px-6 py-6 text-xl whitespace-normal md:whitespace-nowrap ${
                activeService === "Gemstone Production & Retail"
                  ? "bg-black text-white hover:bg-black/90 hover:text-white"
                  : "border border-black bg-white text-black hover:bg-black hover:text-white"
              }`}
              onClick={() => setActiveService("Gemstone Production & Retail")}
            >
              Gemstone Production & Retail
            </Button>
          </div>
        </div>

        {/* Service Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">{serviceDescriptions[activeService].title}</h3>
            <p className="text-gray-700 mb-8">
              {serviceDescriptions[activeService].description}
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {serviceDescriptions[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-full">
                    {activeService === "Minerals Exploration & Development" ? (
                      index === 0 ? (
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="40" rx="16" fill="black"/>
                        <path d="M23.7812 25.8438C24.0625 26.1562 24.0625 26.625 23.75 26.9062L22.875 27.7812C22.5938 28.0938 22.125 28.0938 21.8125 27.7812L18.7188 24.6875C18.5625 24.5312 18.5 24.3438 18.5 24.1562V23.625C17.375 24.5 16 25 14.5 25C10.9062 25 8 22.0938 8 18.5C8 14.9375 10.9062 12 14.5 12C18.0625 12 21 14.9375 21 18.5C21 20.0312 20.4688 21.4062 19.625 22.5H20.125C20.3125 22.5 20.5 22.5938 20.6562 22.7188L23.7812 25.8438ZM14.5 22.5C16.6875 22.5 18.5 20.7188 18.5 18.5C18.5 16.3125 16.6875 14.5 14.5 14.5C12.2812 14.5 10.5 16.3125 10.5 18.5C10.5 20.7188 12.2812 22.5 14.5 22.5Z" fill="white"/>
                        </svg>

                      ) : index === 1 ? (
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="40" rx="16" fill="black"/>
                        <path d="M23.5 24C23.75 24 24 24.25 24 24.5V25.5C24 25.7812 23.75 26 23.5 26H9C8.4375 26 8 25.5625 8 25V14.5C8 14.25 8.21875 14 8.5 14H9.5C9.75 14 10 14.25 10 14.5V24H23.5ZM22.5 15C22.75 15 23 15.25 22.9688 15.5V19.2188C22.9688 19.875 22.1875 20.2188 21.7188 19.75L20.6875 18.7188L17.6875 21.7188C17.3125 22.125 16.6562 22.125 16.2812 21.7188L14 19.4375L12.5312 20.875C12.3438 21.0625 12.0312 21.0625 11.8438 20.875L11.125 20.1562C10.9375 19.9688 10.9375 19.6562 11.125 19.4688L13.2812 17.3125C13.6562 16.9062 14.3125 16.9062 14.6875 17.3125L17 19.5938L19.2812 17.3125L18.25 16.2812C17.7812 15.8125 18.125 15 18.7812 15H22.5Z" fill="white"/>
                        </svg>

                      ) : index === 2 ? (
                        <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="40" rx="14" fill="#010101"/>
                        <path d="M15 16.25C15 16.6875 15.3125 17 15.75 17H20V27.25C20 27.6875 19.6562 28 19.25 28H8.75C8.3125 28 8 27.6875 8 27.25V12.75C8 12.3438 8.3125 12 8.75 12H15V16.25ZM10 14.25V14.75C10 14.9062 10.0938 15 10.25 15H12.75C12.875 15 13 14.9062 13 14.75V14.25C13 14.125 12.875 14 12.75 14H10.25C10.0938 14 10 14.125 10 14.25ZM10 16.25V16.75C10 16.9062 10.0938 17 10.25 17H12.75C12.875 17 13 16.9062 13 16.75V16.25C13 16.125 12.875 16 12.75 16H10.25C10.0938 16 10 16.125 10 16.25ZM16 24C15.875 24 15.75 23.9375 15.6875 23.8125C15.3125 23.0625 14.25 22.875 13.625 23.375L13.1875 22.0625C13.0938 21.75 12.8125 21.5625 12.5 21.5625C12.1562 21.5625 11.875 21.75 11.7812 22.0625L11.2188 23.7812C11.1562 23.9062 11.0312 24 10.875 24H10.5C10.2188 24 10 24.25 10 24.5C10 24.7812 10.2188 25 10.5 25H10.875C11.4688 25 11.9688 24.6562 12.1562 24.0938L12.5 23.0938L13 24.6875C13.0625 24.875 13.25 25 13.4375 25C13.4688 25 13.4688 25 13.5 25C13.5 25 13.4688 25.0312 13.5 25.0312C13.6875 25.0312 13.8438 24.9062 13.9375 24.75L14.1562 24.25C14.25 24.0938 14.4062 24.0625 14.5 24.0625C14.5625 24.0625 14.7188 24.0938 14.8125 24.2812C15.0312 24.7188 15.5 25 16 25H17.5C17.75 25 18 24.7812 18 24.5C18 24.25 17.75 24 17.5 24H16ZM19.7812 15.2812C19.9062 15.4375 20 15.625 20 15.8125V16H16V12H16.1875C16.375 12 16.5625 12.0938 16.7188 12.2188L19.7812 15.2812Z" fill="white"/>
                        </svg>
                        
                      ) : (
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="40" rx="16" fill="black"/>
                        <path d="M10 15C13.8438 15 17 18.1562 17 22V26.5C17 26.7812 16.75 27 16.5 27H15.5C15.2188 27 15 26.7812 15 26.5V22C11.125 22 8 18.875 8 15H10ZM22 13H24C24 16.625 21.25 19.625 17.7188 19.9688C17.375 18.7188 16.75 17.5625 15.875 16.625C17.0625 14.4688 19.3438 13 22 13Z" fill="white"/>
                        </svg>

                      )
                    ) : activeService === "Mining Laboratory Services" ? (
                      index === 0 ? (
                        <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.460938" y="0.0195312" width="29.4841" height="40" rx="14.7421" fill="#010101"/>
                        <path d="M13.4609 22.0195C12.8984 22.0195 12.4609 21.582 12.4609 21.0195V14.0195C12.4609 13.4883 12.8984 13.0195 13.4609 13.0195V12.5195C13.4609 12.2695 13.6797 12.0195 13.9609 12.0195H15.9609C16.2109 12.0195 16.4609 12.2695 16.4609 12.5195V13.0195C16.9922 13.0195 17.4609 13.4883 17.4609 14.0195V21.0195C17.4609 21.582 16.9922 22.0195 16.4609 22.0195H16.0859V22.5195C16.0859 22.8008 15.8359 23.0195 15.5859 23.0195H14.3359C14.0547 23.0195 13.8359 22.8008 13.8359 22.5195V22.0195H13.4609ZM22.9609 26.0195C23.7734 26.0195 24.4609 26.707 24.4609 27.5195C24.4609 27.8008 24.2109 28.0195 23.9609 28.0195H8.96094C8.67969 28.0195 8.46094 27.8008 8.46094 27.5195C8.46094 26.707 9.11719 26.0195 9.96094 26.0195H18.4609C20.6484 26.0195 22.4609 24.2383 22.4609 22.0195C22.4609 19.832 20.6484 18.0195 18.4609 18.0195V16.0195C21.7422 16.0195 24.4609 18.7383 24.4609 22.0195C24.4609 23.582 23.8672 24.957 22.8984 26.0195H22.9609ZM11.7109 25.0195C11.5547 25.0195 11.4609 24.9258 11.4609 24.7695V24.2695C11.4609 24.1445 11.5547 24.0195 11.7109 24.0195H18.2109C18.3359 24.0195 18.4609 24.1445 18.4609 24.2695V24.7695C18.4609 24.9258 18.3359 25.0195 18.2109 25.0195H11.7109Z" fill="white"/>
                        </svg>

                      ) : index === 1 ? (
                        <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.460938" y="0.0195312" width="29.4841" height="40" rx="14.7421" fill="#010101"/>
                        <path d="M23.3672 17.8633C23.4609 17.957 23.4609 18.1133 23.3672 18.207L22.3047 19.2695C22.2109 19.3633 22.0547 19.3633 21.9609 19.2695L21.6172 18.9258L13.8984 26.582C13.2734 27.207 12.4609 27.5195 11.6484 27.5195C10.7422 27.5195 9.83594 27.1445 9.17969 26.3945C8.05469 25.1133 8.27344 23.1445 9.49219 21.9258L17.0547 14.3633L16.7109 14.0195C16.6172 13.9258 16.6172 13.7695 16.7109 13.6758L17.7734 12.6133C17.8672 12.5195 18.0234 12.5195 18.1172 12.6133L23.3672 17.8633ZM18.3984 20.0195L20.5547 17.8633L18.1172 15.4258L13.4922 20.0195H18.3984Z" fill="white"/>
                        </svg>

                      ) : index === 2 ? (
                        <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.460938" y="0.0195312" width="29.4841" height="40" rx="14.7421" fill="#010101"/>
                        <path d="M23.3672 17.8633C23.4609 17.957 23.4609 18.1133 23.3672 18.207L22.3047 19.2695C22.2109 19.3633 22.0547 19.3633 21.9609 19.2695L21.6172 18.9258L13.8984 26.582C13.2734 27.207 12.4609 27.5195 11.6484 27.5195C10.7422 27.5195 9.83594 27.1445 9.17969 26.3945C8.05469 25.1133 8.27344 23.1445 9.49219 21.9258L17.0547 14.3633L16.7109 14.0195C16.6172 13.9258 16.6172 13.7695 16.7109 13.6758L17.7734 12.6133C17.8672 12.5195 18.0234 12.5195 18.1172 12.6133L23.3672 17.8633ZM18.3984 20.0195L20.5547 17.8633L18.1172 15.4258L13.4922 20.0195H18.3984Z" fill="white"/>
                        </svg>

                      ) : (
                        <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.460938" y="0.0195312" width="29.4841" height="40" rx="14.7421" fill="#010101"/>
                        <path d="M22.1562 12L25 17H21.8125L19.6562 12H22.1562ZM18.1562 12L20.3125 17H11.6562L13.8125 12H18.1562ZM9.8125 12H12.3125L10.1562 17H7L9.8125 12ZM7 18H10.125L13.9688 25.875C14.0312 25.9688 13.9062 26.0625 13.8125 25.9688L7 18ZM11.625 18H20.3438L16.0625 27.9688C16.0312 28.0312 15.9375 28.0312 15.9062 27.9688L11.625 18ZM18 25.875L21.8438 18H25L18.1562 25.9688C18.0938 26.0625 17.9375 25.9688 18 25.875Z" fill="white"/>
                        </svg>
                        
                      )
                    ) : activeService === "Gemstone Production & Retail" ? (
                      index === 0 ? (
                        <svg width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.736816" width="32" height="43.1664" rx="16" fill="#070707"/>
<path d="M23.6562 12.7368L26.5 17.7368H23.3125L21.1562 12.7368H23.6562ZM19.6562 12.7368L21.8125 17.7368H13.1562L15.3125 12.7368H19.6562ZM11.3125 12.7368H13.8125L11.6562 17.7368H8.5L11.3125 12.7368ZM8.5 18.7368H11.625L15.4688 26.6118C15.5312 26.7056 15.4062 26.7993 15.3125 26.7056L8.5 18.7368ZM13.125 18.7368H21.8438L17.5625 28.7056C17.5312 28.7681 17.4375 28.7681 17.4062 28.7056L13.125 18.7368ZM19.5 26.6118L23.3438 18.7368H26.5L19.6562 26.7056C19.5938 26.7993 19.4375 26.7056 19.5 26.6118Z" fill="white"/>
</svg>

                      ) : index === 1 ? (
                        <svg width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.0195312" width="32" height="43.1664" rx="16" fill="#070707"/>
                        <path d="M17.1875 20.0195L22.375 25.2383C22.5312 25.3945 22.5312 25.6133 22.375 25.7695C21.3438 26.8008 19.6875 26.8008 18.6562 25.7695L15.0625 22.1445L14.2812 22.9258C14.4062 23.2695 14.5 23.6445 14.5 24.0195C14.5 25.707 13.1562 27.0195 11.5 27.0195C9.8125 27.0195 8.5 25.707 8.5 24.0195C8.5 22.3633 9.8125 21.0195 11.5 21.0195C11.625 21.0195 11.75 21.0508 11.9062 21.0508L12.9375 20.0195L11.9062 19.0195C11.75 19.0195 11.625 19.0195 11.5 19.0195C9.8125 19.0195 8.5 17.707 8.5 16.0195C8.5 14.3633 9.8125 13.0195 11.5 13.0195C13.1562 13.0195 14.5 14.3633 14.5 16.0195C14.5 16.4258 14.4062 16.8008 14.2812 17.1445L15.0625 17.9258L18.6562 14.3008C19.6875 13.2695 21.3438 13.2695 22.375 14.3008C22.5312 14.457 22.5312 14.6758 22.375 14.832L17.1875 20.0195ZM11.5 17.0195C12.0312 17.0195 12.5 16.582 12.5 16.0195C12.5 15.4883 12.0312 15.0195 11.5 15.0195C10.9375 15.0195 10.5 15.4883 10.5 16.0195C10.5 16.582 10.9375 17.0195 11.5 17.0195ZM11.5 25.0195C12.0312 25.0195 12.5 24.582 12.5 24.0195C12.5 23.4883 12.0312 23.0195 11.5 23.0195C10.9375 23.0195 10.5 23.4883 10.5 24.0195C10.5 24.582 10.9375 25.0195 11.5 25.0195Z" fill="white"/>
                        </svg>
                        
                      ) : index === 2 ? (
                        <svg width="33" height="44" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.402344" width="32" height="43.1664" rx="16" fill="#070707"/>
<path d="M22.8125 20.4023L24.25 21.8086C24.6875 22.2148 24.4688 22.9336 23.9062 23.0898L21.9688 23.5898L22.5 25.5273C22.6562 26.0898 22.1562 26.5898 21.5938 26.4336L19.6562 25.9023L19.1562 27.8398C19 28.4336 18.2812 28.6211 17.875 28.1836L16.5 26.7461L15.0938 28.1836C14.6875 28.5898 13.9688 28.4336 13.8125 27.8398L13.3125 25.9023L11.375 26.4336C10.8125 26.5898 10.3125 26.0898 10.4688 25.5273L11 23.5898L9.0625 23.0898C8.5 22.9336 8.28125 22.2148 8.71875 21.8086L10.1562 20.4023L8.71875 18.9961C8.28125 18.5898 8.5 17.8711 9.0625 17.7461L11 17.2461L10.4688 15.3086C10.3125 14.7461 10.8125 14.2148 11.375 14.3711L13.3125 14.9336L13.8125 12.9648C13.9375 12.4023 14.6875 12.2148 15.0938 12.6523L16.5 14.0898L17.875 12.6523C18.2812 12.2148 19.0312 12.4336 19.1562 12.9648L19.6562 14.9336L21.5938 14.3711C22.1562 14.2148 22.6562 14.7461 22.5 15.3086L21.9688 17.2461L23.9062 17.7461C24.4688 17.8711 24.6875 18.5898 24.25 18.9961L22.8125 20.4023Z" fill="white"/>
</svg>

                      ) : (
                        <svg width="35" height="44" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.785156" width="34" height="43.1664" rx="17" fill="#070707"/>
                        <path d="M27.3125 16.5039C28.3438 18.1914 27.4062 20.5039 25.4688 20.7539C25.3125 20.7852 25.1875 20.7852 25.0312 20.7852C24.0938 20.7852 23.2812 20.3789 22.7188 19.7539C22.1562 20.3789 21.3438 20.7852 20.4062 20.7852C19.5 20.7852 18.6562 20.3789 18.0938 19.7539C17.5312 20.3789 16.7188 20.7852 15.8125 20.7852C14.875 20.7852 14.0625 20.3789 13.5 19.7539C12.9375 20.3789 12.125 20.7852 11.1875 20.7852C11.0312 20.7852 10.9062 20.7852 10.75 20.7539C8.8125 20.5039 7.875 18.1914 8.9375 16.5039L10.9375 13.2539C11.125 12.9727 11.4688 12.7852 11.8125 12.7852H24.4375C24.7812 12.7852 25.0938 12.9727 25.2812 13.2539L27.3125 16.5039ZM25.0312 21.7852C25.2188 21.7852 25.4062 21.7852 25.5938 21.7539C25.7812 21.7539 25.9375 21.6914 26.125 21.6602V27.7852C26.125 28.3477 25.6562 28.7852 25.125 28.7852H11.125C10.5625 28.7852 10.125 28.3477 10.125 27.7852V21.6602C10.2812 21.6914 10.4375 21.7227 10.625 21.7539C10.8125 21.7852 11 21.7852 11.1875 21.7852C11.5 21.7852 11.8125 21.7539 12.125 21.6914V24.7852H24.125V21.6914C24.4062 21.7539 24.7188 21.7852 25.0312 21.7852Z" fill="white"/>
                        </svg>
                        
                      )
                    ) : activeService === "Drilling & Consultancy Services" ? (
                      index === 0 ? (
                        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.895508" width="33.011" height="42.9448" rx="16.5055" fill="black"/>
<path d="M23.1562 12.8955L26 17.8955H22.8125L20.6562 12.8955H23.1562ZM19.1562 12.8955L21.3125 17.8955H12.6562L14.8125 12.8955H19.1562ZM10.8125 12.8955H13.3125L11.1562 17.8955H8L10.8125 12.8955ZM8 18.8955H11.125L14.9688 26.7705C15.0312 26.8643 14.9062 26.958 14.8125 26.8643L8 18.8955ZM12.625 18.8955H21.3438L17.0625 28.8643C17.0312 28.9268 16.9375 28.9268 16.9062 28.8643L12.625 18.8955ZM19 26.7705L22.8438 18.8955H26L19.1562 26.8643C19.0938 26.958 18.9375 26.8643 19 26.7705Z" fill="#FDFDFD"/>
</svg>

                      ) : index === 1 ? (
                        <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.901855" width="35.0742" height="42.9448" rx="17.5371" fill="black"/>
                        <path d="M25.8438 18.9644C26.0312 19.1831 26.0312 19.4956 25.8438 19.6831L23 22.5269C22.8125 22.7144 22.5 22.7144 22.3125 22.5269L21.5938 21.8081C21.4062 21.6206 21.4062 21.3081 21.5938 21.0894L21.9375 20.7456L21.0312 19.8394C20.375 20.0269 19.6562 19.8394 19.125 19.3394L17.5938 17.8081C17.2188 17.4331 17 16.9019 17 16.3706V15.8081L14.1562 14.3706C16.125 12.4331 19.2812 12.4331 21.25 14.3706L22.6562 15.8081C23.1875 16.3081 23.3438 17.0581 23.1562 17.7144L24.0625 18.6206L24.4375 18.2769C24.625 18.0894 24.9375 18.0894 25.125 18.2769L25.8438 18.9644ZM16.875 18.4956L18.4062 20.0269C18.5312 20.1519 18.6562 20.2456 18.7812 20.3394L11.3438 28.3081C10.5938 29.0894 9.3125 29.1206 8.5625 28.3394C7.78125 27.5894 7.8125 26.3081 8.59375 25.5581L16.5625 18.1206C16.6562 18.2456 16.75 18.4019 16.875 18.4956Z" fill="#FDFDFD"/>
                        </svg>
                        
                      ) : index === 2 ? (
                        <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.908203" width="33.011" height="42.9448" rx="16.5055" fill="black"/>
                        <path d="M22.2812 23.6895L23.9688 26.6582L23.75 28.4707C23.7188 28.8145 23.375 29.002 23.0625 28.877L21.375 28.1582L19.6875 25.2207C20.625 24.8457 21.4688 24.3145 22.2812 23.6895ZM23.5938 20.7207C21.9375 23.3145 19.0938 24.9082 16 24.9082C14.875 24.9082 13.8125 24.7207 12.7812 24.3457L10.5938 28.1582L8.90625 28.877C8.59375 29.002 8.25 28.8145 8.21875 28.4707L8 26.6582L10.2188 22.8145C9.53125 22.252 8.9375 21.5957 8.46875 20.877C8.3125 20.627 8.40625 20.3145 8.625 20.1582L9.5 19.6582C9.75 19.5332 10.0312 19.5957 10.1875 19.8145C10.4688 20.2832 10.8438 20.6895 11.2188 21.0332L13.375 17.3457C13.125 16.9395 13 16.4395 13 15.9082C13 14.252 14.3125 12.9082 16 12.9082C17.6562 12.9082 19 14.252 19 15.9082C19 16.4395 18.8438 16.9395 18.5938 17.3457L20.2188 20.1582C19.5 20.877 18.625 21.4082 17.6562 21.6895L16.0625 18.9082C16.0312 18.9082 16 18.9082 15.9688 18.9082C15.9688 18.9082 15.9375 18.9082 15.9062 18.9082L13.8125 22.5645C14.5 22.7832 15.25 22.9082 16 22.9082C18.375 22.9082 20.5938 21.7207 21.875 19.7207C22 19.502 22.2812 19.4082 22.5312 19.5332L23.4062 20.0332C23.6562 20.1582 23.75 20.502 23.5938 20.7207ZM16 14.9082C15.4375 14.9082 15 15.377 15 15.9082C15 16.4707 15.4375 16.9082 16 16.9082C16.5312 16.9082 17 16.4707 17 15.9082C17 15.377 16.5312 14.9082 16 14.9082Z" fill="#FDFDFD"/>
                        </svg>
                        
                      ) : (
                        <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.914062" width="37.1374" height="42.9448" rx="18.5687" fill="black"/>
                        <path d="M27.0625 23.6016L27.875 24.0703C27.9688 24.1016 28 24.2266 27.9688 24.3203C27.75 25.0078 27.4062 25.6016 26.9375 26.1328C26.875 26.1953 26.75 26.2266 26.6562 26.1641L25.8438 25.6953C25.5 25.9766 25.125 26.2266 24.6875 26.3516V27.2891C24.6875 27.4141 24.625 27.5078 24.5312 27.5078C23.8438 27.6641 23.1562 27.6641 22.4375 27.5078C22.3438 27.5078 22.2812 27.4141 22.2812 27.2891V26.3516C21.8438 26.2266 21.4688 25.9766 21.125 25.6953L20.3125 26.1641C20.2188 26.2266 20.0938 26.1953 20.0312 26.1328C19.5625 25.6016 19.1875 25.0078 19 24.3203C18.9688 24.2266 19 24.1016 19.0938 24.0703L19.9062 23.6016C19.8125 23.1641 19.8125 22.6953 19.9062 22.2578L19.0938 21.7891C19 21.7578 18.9688 21.6328 19 21.5391C19.1875 20.8516 19.5625 20.2578 20.0312 19.7266C20.0938 19.6641 20.2188 19.6328 20.3125 19.6953L21.125 20.1641C21.4688 19.8828 21.8438 19.6328 22.2812 19.5078V18.5703C22.2812 18.4453 22.3438 18.3516 22.4375 18.3516C23.125 18.1953 23.8125 18.1953 24.5312 18.3516C24.625 18.3516 24.6875 18.4453 24.6875 18.5703V19.5078C25.125 19.6328 25.5 19.8828 25.8438 20.1641L26.6562 19.6953C26.75 19.6328 26.875 19.6641 26.9375 19.7266C27.4062 20.2578 27.75 20.8516 27.9688 21.5391C28 21.6328 27.9688 21.7578 27.875 21.7891L27.0625 22.2578C27.1562 22.6953 27.1562 23.1641 27.0625 23.6016ZM23.5 24.4453C24.3125 24.4453 25 23.7578 25 22.9141C25 22.1016 24.3125 21.4141 23.5 21.4141C22.6562 21.4141 21.9688 22.1016 21.9688 22.9141C21.9688 23.7578 22.6562 24.4453 23.5 24.4453ZM11 19.9141C9.875 19.9141 9 19.0391 9 17.9141C9 16.8203 9.875 15.9141 11 15.9141C12.0938 15.9141 13 16.8203 13 17.9141C13 19.0391 12.0938 19.9141 11 19.9141ZM18 20.9141C16.0625 20.9141 14.5 19.3516 14.5 17.4141C14.5 15.5078 16.0625 13.9453 17.9688 13.9453C19.9062 13.9453 21.4688 15.5078 21.4688 17.4453C21.4688 17.9766 21.3438 18.4766 21.125 18.9453C21.0938 18.9453 21.0938 18.9453 21.0625 18.9766L20.8125 18.8203C20.625 18.7266 20.4062 18.6641 20.1875 18.6641C19.8438 18.6641 19.5312 18.8203 19.2812 19.0703C18.8125 19.6016 18.4062 20.2266 18.1562 20.9141C18.0938 20.9141 18.0312 20.9141 18 20.9141ZM21.2812 27.0078V27.2891C21.2812 27.5391 21.3438 27.7266 21.4688 27.9141H13.5C12.6562 27.9141 12 27.2578 12 26.4141V25.5391C12 23.5391 13.5938 21.9141 15.5938 21.9141H15.8438C16.5 22.2266 17.2188 22.4141 18 22.4141C18.0938 22.4141 18.1875 22.4141 18.2812 22.4141C18.375 22.5078 18.4688 22.6016 18.5938 22.6641L18.8438 22.8203C18.8438 22.8828 18.8438 22.9766 18.8438 23.0391C18.8125 23.0703 17.7188 23.5391 18.0312 24.6328C18.2812 25.4141 18.7188 26.1641 19.3125 26.7891C19.5312 27.0391 19.875 27.1953 20.1875 27.1953C20.5938 27.1953 20.8125 27.0391 21.0625 26.8828C21.125 26.9141 21.1875 26.9766 21.2812 27.0078ZM13.4062 21.5078C12.125 22.1953 11.25 23.4453 11.0312 24.9141H9C8.4375 24.9141 8 24.4766 8 23.9141V22.9141C8 21.8203 8.875 20.9141 10 20.9141H12C12.5312 20.9141 13.0312 21.1641 13.4062 21.5078Z" fill="#FDFDFD"/>
                        </svg>
                        
                      )
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Badges - Only shown for Mining Laboratory Services */}
            {activeService === "Mining Laboratory Services" && (
              <div className="flex flex-wrap md:flex-nowrap gap-4 mt-8 mb-8">
                <button className="flex items-center gap-2 border border-black rounded-2xl px-6 py-2 hover:bg-black/5 transition-colors">
                <svg width="24" height="23" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7734 9.01953L16.2109 10.4258C16.6484 10.832 16.4297 11.5508 15.8672 11.707L13.9297 12.207L14.4609 14.1445C14.6172 14.707 14.1172 15.207 13.5547 15.0508L11.6172 14.5195L11.1172 16.457C10.9609 17.0508 10.2422 17.2383 9.83594 16.8008L8.46094 15.3633L7.05469 16.8008C6.64844 17.207 5.92969 17.0508 5.77344 16.457L5.27344 14.5195L3.33594 15.0508C2.77344 15.207 2.27344 14.707 2.42969 14.1445L2.96094 12.207L1.02344 11.707C0.460938 11.5508 0.242188 10.832 0.679688 10.4258L2.11719 9.01953L0.679688 7.61328C0.242188 7.20703 0.460938 6.48828 1.02344 6.36328L2.96094 5.86328L2.42969 3.92578C2.27344 3.36328 2.77344 2.83203 3.33594 2.98828L5.27344 3.55078L5.77344 1.58203C5.89844 1.01953 6.64844 0.832031 7.05469 1.26953L8.46094 2.70703L9.83594 1.26953C10.2422 0.832031 10.9922 1.05078 11.1172 1.58203L11.6172 3.55078L13.5547 2.98828C14.1172 2.83203 14.6172 3.36328 14.4609 3.92578L13.9297 5.86328L15.8672 6.36328C16.4297 6.48828 16.6484 7.20703 16.2109 7.61328L14.7734 9.01953Z" fill="black"/>
</svg>

                  <span className="text-sm">ISO 9001 Certified</span>
                </button>
                <button className="flex items-center gap-2 border border-black rounded-2xl px-6 py-2 hover:bg-black/5 transition-colors">
                <svg width="23" height="22" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.46484 12.3438C3.87109 12.7812 4.46484 13 5.05859 13C5.46484 13 5.83984 12.9062 6.18359 12.7188L4.52734 16.7188C4.40234 17.0312 3.96484 17.125 3.71484 16.8438L2.58984 15.6562L0.933594 15.7188C0.589844 15.75 0.308594 15.375 0.464844 15.0312L1.87109 11.5625C2.12109 11.75 2.37109 11.9062 2.68359 11.9688C3.30859 12.1562 3.18359 12.0625 3.46484 12.3438ZM12.3711 15.0312C12.5273 15.375 12.2461 15.75 11.9023 15.7188L10.2461 15.6562L9.12109 16.8438C8.87109 17.125 8.43359 17.0312 8.30859 16.7188L6.65234 12.7188C6.99609 12.9062 7.37109 13 7.77734 13C8.37109 13 8.96484 12.7812 9.37109 12.3438C9.65234 12.0625 9.49609 12.1562 10.1836 11.9688C10.4648 11.9062 10.7148 11.75 10.9648 11.5625L12.3711 15.0312ZM8.65234 11.625C8.21484 12.0625 7.58984 12.125 7.08984 11.8125C6.90234 11.6875 6.65234 11.625 6.40234 11.625C6.18359 11.625 5.93359 11.6875 5.74609 11.8125C5.24609 12.125 4.62109 12.0625 4.21484 11.625C3.74609 11.1562 3.68359 11.1875 2.99609 11C2.55859 10.9062 2.21484 10.5625 2.08984 10.0938C1.87109 9.21875 1.93359 9.3125 1.27734 8.6875C0.964844 8.34375 0.839844 7.875 0.964844 7.4375C1.18359 6.5625 1.18359 6.6875 0.964844 5.78125C0.839844 5.34375 0.964844 4.875 1.27734 4.5625C1.93359 3.90625 1.87109 4 2.08984 3.125C2.21484 2.6875 2.55859 2.34375 2.99609 2.21875C3.87109 1.96875 3.74609 2.03125 4.40234 1.375C4.71484 1.0625 5.18359 0.9375 5.62109 1.0625C6.46484 1.28125 6.37109 1.28125 7.21484 1.0625C7.65234 0.9375 8.12109 1.0625 8.43359 1.375C9.08984 2.03125 8.96484 1.96875 9.83984 2.21875C10.2773 2.34375 10.6211 2.6875 10.7461 3.125C10.9648 4 10.9023 3.90625 11.5586 4.5625C11.8711 4.875 11.9961 5.34375 11.8711 5.78125C11.6523 6.6875 11.6523 6.5625 11.8711 7.4375C11.9961 7.875 11.8711 8.34375 11.5586 8.6875C10.9023 9.3125 10.9648 9.21875 10.7461 10.0938C10.6211 10.5625 10.2773 10.9062 9.83984 11C9.18359 11.1875 9.12109 11.1562 8.65234 11.625ZM3.46484 6.5C3.46484 8.15625 4.77734 9.5 6.43359 9.5C8.05859 9.5 9.37109 8.15625 9.37109 6.5C9.37109 4.84375 8.05859 3.5 6.43359 3.5C4.77734 3.5 3.46484 4.84375 3.46484 6.5Z" fill="black"/>
</svg>

                  <span className="text-sm">Nationally Accredited</span>
                </button>
                <button className="flex items-center gap-2 border border-black rounded-2xl px-6 py-2 hover:bg-black/5 transition-colorsx">
                <svg width="25" height="24" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.70117 1.5625C9.07617 0.8125 10.1387 0.84375 10.4824 1.5625L12.5449 5.71875L17.1074 6.375C17.9199 6.5 18.2324 7.5 17.6387 8.09375L14.3574 11.3125L15.1387 15.8438C15.2637 16.6562 14.3887 17.2812 13.6699 16.9062L9.60742 14.75L5.51367 16.9062C4.79492 17.2812 3.91992 16.6562 4.04492 15.8438L4.82617 11.3125L1.54492 8.09375C0.951172 7.5 1.26367 6.5 2.07617 6.375L6.66992 5.71875L8.70117 1.5625Z" fill="black"/>
</svg>

                  <span className="text-sm">Industry Standard Compliance</span>
                </button>
              </div>
            )}

            {/* Featured Gemstones - Only shown for Gemstone Production & Retail */}
            {activeService === "Gemstone Production & Retail" && (
              <>
                <h2 className="text-xl font-semibold mt-5 text-left">Featured Gemstones</h2>
                <div className="flex flex-wrap md:flex-nowrap gap-21 mt-4 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 relative mb-3">
                      <Image
                        src="/opal.svg"
                        alt="Ethiopian Opal"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-base">Ethiopian Opal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 relative mb-3">
                      <Image
                        src="/emerland.svg"
                        alt="Emerald"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-base">Emerald</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 relative mb-3">
                      <Image
                        src="/saphire.svg"
                        alt="Sapphire"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-base">Sapphire</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 relative mb-3">
                      <Image
                        src="/ruby.svg"
                        alt="Ruby"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <span className="text-base">Ruby</span>
                  </div>
                </div>
              </>
            )}

            {activeService === "Minerals Exploration & Development" && (
              <Link href="/contact">
                <Button className="mt-7 bg-black text-white px-7 py-6 rounded-2xl text-lg">
                  Request Exploration Services
                </Button>
              </Link>
            )}

            {activeService === "Mining Laboratory Services" && (
              <Link href="/contact">
                <Button className="bg-black text-white px-7 py-6 rounded-2xl text-lg">
               Request Laboratory Services
                </Button>
              </Link>
            )}

            {activeService === "Gemstone Production & Retail" && (
              <Link href="/contact">
                <Button className="bg-black text-white px-7 py-6 rounded-2xl text-lg">
                 Explore Gemstone Services
                </Button>
              </Link>
            )}

            {activeService === "Drilling & Consultancy Services" && (
              <Link href="/contact">
                <Button className="mt-7 bg-black text-white px-7 py-6 rounded-2xl text-lg">
                 Request Drilling Services
                </Button>
              </Link>
            )}
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={
                activeService === "Minerals Exploration & Development" ? "/servicecore.svg" :
                activeService === "Mining Laboratory Services" ? "/core2.svg" :
                activeService === "Gemstone Production & Retail" ? "/core4.svg" :
                activeService === "Drilling & Consultancy Services" ? "/core3.svg" :
                "/servicecore.svg"
              }
              alt={`${serviceDescriptions[activeService].title} illustration`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
       <h2 className="text-5xl md:text-8xl font-bold leading-tight max-w-none whitespace-nowrap ">
  <span>Our Methodology</span>
</h2>
        <p className="text-lg md:text-xl text-black max-w-md mt-6 md:mt-2">
          We follow a systematic approach to deliver exceptional results for all our mining and mineral services, ensuring quality, safety, and efficiency at every stage.
        </p>
      </div>

      {/* 4 Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {["Assessment", "Planning", "Execution", "Analysis & Reporting"].map((title, i) => (
          <div key={i} className="rounded-xl border p-6 text-center hover:shadow-lg transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-sm md:text-lg font-semibold">
              {i + 1}
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-3">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              {[
                "Thorough evaluation of project requirements, site conditions, and objectives to develop a tailored approach.",
                "Detailed project planning including resource allocation, timeline development, and risk assessment.",
                "Implementation of project plans with strict adherence to safety standards and quality control measures.",
                "Comprehensive data analysis and detailed reporting with actionable insights and recommendations."
              ][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Equipment & Technology */}
      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Equipment & Technology</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Exploration */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span role="img" aria-label="exploration">🧭</span> Exploration Technology
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "Advanced GPS and GIS mapping systems",
                "Ground-penetrating radar equipment",
                "Magnetometers and electromagnetic surveying tools",
                "Portable XRF analyzers for field testing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Laboratory */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span role="img" aria-label="lab">⚗️</span> Laboratory Equipment
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "X-ray diffraction (XRD) analyzers",
                "Atomic absorption spectrometers",
                "Scanning electron microscopes",
                "Fire assay furnaces and equipment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Drilling */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span role="img" aria-label="drill">🛠️</span> Drilling Equipment
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "Atlas Copco Diamec drilling rigs",
                "Schramm T450 RC drilling rigs",
                "Sandvik DE710 surface core drilling rigs",
                "Modern sampling and core processing equipment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>
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
<path d="M3.53125 11.4248C3.9375 11.8623 4.53125 12.0811 5.125 12.0811C5.53125 12.0811 5.83984 12.9062 6.18359 12.7188L4.52734 16.7188C4.40234 17.0312 3.96484 17.125 3.71484 16.8438L2.58984 15.6562L0.933594 15.7188C0.589844 15.75 0.308594 15.375 0.464844 15.0312L1.87109 11.5625C2.12109 11.75 2.37109 11.9062 2.68359 11.9688C3.30859 12.1562 3.18359 12.0625 3.46484 12.3438ZM12.3711 15.0312C12.5273 15.375 12.2461 15.75 11.9023 15.7188L10.2461 15.6562L9.12109 16.8438C8.87109 17.125 8.43359 17.0312 8.30859 16.7188L6.65234 12.7188C6.99609 12.9062 7.37109 13 7.77734 13C8.37109 13 8.96484 12.7812 9.37109 12.3438C9.65234 12.0625 9.49609 12.1562 10.1836 11.9688C10.4648 11.9062 10.7148 11.75 10.9648 11.5625L12.3711 15.0312ZM8.65234 11.625C8.21484 12.0625 7.58984 12.125 7.08984 11.8125C6.90234 11.6875 6.65234 11.625 6.40234 11.625C6.18359 11.625 5.93359 11.6875 5.74609 11.8125C5.24609 12.125 4.62109 12.0625 4.21484 11.625C3.74609 11.1562 3.68359 11.1875 2.99609 11C2.55859 10.9062 2.21484 10.5625 2.08984 10.0938C1.87109 9.21875 1.93359 9.3125 1.27734 8.6875C0.964844 8.34375 0.839844 7.875 0.964844 7.4375C1.18359 6.5625 1.18359 6.6875 0.964844 5.78125C0.839844 5.34375 0.964844 4.875 1.27734 4.5625C1.93359 3.90625 1.87109 4 2.08984 3.125C2.21484 2.6875 2.55859 2.34375 2.99609 2.21875C3.87109 1.96875 3.74609 2.03125 4.40234 1.375C4.71484 1.0625 5.18359 0.9375 5.62109 1.0625C6.46484 1.28125 6.37109 1.28125 7.21484 1.0625C7.65234 0.9375 8.12109 1.0625 8.43359 1.375C9.08984 2.03125 8.96484 1.96875 9.83984 2.21875C10.2773 2.34375 10.6211 2.6875 10.7461 3.125C10.9648 4 10.9023 3.90625 11.5586 4.5625C11.8711 4.875 11.9961 5.34375 11.8711 5.78125C11.6523 6.6875 11.6523 6.5625 11.8711 7.4375C11.9961 7.875 11.8711 8.34375 11.5586 8.6875C10.9023 9.3125 10.9648 9.21875 10.7461 10.0938C10.6211 10.5625 10.2773 10.9062 9.83984 11C9.18359 11.1875 9.12109 11.1562 8.65234 11.625ZM3.46484 6.5C3.46484 8.15625 4.77734 9.5 6.43359 9.5C8.05859 9.5 9.37109 8.15625 9.37109 6.5C9.37109 4.84375 8.05859 3.5 6.43359 3.5C4.77734 3.5 3.46484 4.84375 3.46484 6.5Z" fill="black"/>
</svg>

                    <span className="text-sm">Nationally Accredited</span>
                  </button>
                  <button className="flex items-center gap-2 border border-white rounded-full px-6 py-2 hover:bg-white/10 transition-colors">
                  <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.59375 1.64355C8.96875 0.893555 10.0312 0.924805 10.375 1.64355L12.4375 5.7998L17 6.45605C17.8125 6.58105 18.125 7.58105 17.5312 8.1748L14.25 11.3936L15.0312 15.9248C15.1562 16.7373 14.2812 17.2812 13.5625 16.9062L9.5 14.8311L5.40625 16.9873C4.6875 17.3623 3.8125 16.7373 3.9375 15.9248L4.71875 11.3936L1.4375 8.1748C0.84375 7.58105 1.15625 6.58105 1.96875 6.45605L6.5625 5.7998L8.59375 1.64355Z" fill="black"/>
</svg>

                    <span className="text-sm text-white">Industry Standard Compliance</span>
                  </button>
                </div>

                {/* CTA Button */}
                <Link href={"/contact"}>
                <button className="bg-white text-black px-8 py-3 rounded-full">
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
            <Link href={"/project/oromiagoldproject"}>
            <button className="flex items-center gap-2 text-black font-semibold group-hover:gap-4 transition-all whitespace-nowrap">
              View Case Study
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            </Link>
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
