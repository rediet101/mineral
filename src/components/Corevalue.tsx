'use client'
import { useState } from 'react';

import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link';

export default function Corevalue() {
     const [activeIndex, setActiveIndex] = useState(0);
     const [activeService, setActiveService] = useState('Minerals Exploration & Development');
  return (
 
    <main className="min-h-screen text-gray-800 bg-white">
      {/* Header Section */}
      <header className="py-8 md:py-16 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Explore heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 px-4 md:px-0">
              Explore; <br />
              Ethiopia as the <br />
              land of plenty
            </h1>
            <p className="text-sm text-gray-600 w-full">
              with resources found in abundance throughout its huge and diverse land mass in our product range.
            </p>
          </div>

          {/* Middle column - Logo */}
          <div className="flex items-center justify-center my-8 md:my-0">
            <img 
              src="/logo2.svg" 
              alt="Ethiopian Mineral Corporation" 
              className="w-65 md:w-65"
            />
          </div>

          {/* Right column - Experience text */}
          <div className="flex flex-col justify-center md:-ml-20">
            <p className="text-2xl md:text-3xl font-semibold  leading-[1.4]">
              Through experiences and expertise gained we know mining in Ethiopia. We consult parties interested in working in the mining sector in Ethiopia.
            </p>
          </div>
        </div>
      </header>

      {/* Core Services Section */}
      <section id="minerals-section" className="pt-25 md:py-12 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-12">
            Our Core Services
          </h2>

          {/* Decorative Gemstones Image */}
          <div className="absolute right-0 top-0 -translate-y-1/2">
            <img 
              src="/bg1.svg" 
              alt="" 
              className="w-[300px] md:w-[400px] object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-16 relative">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <Button 
                variant="outline" 
                className={`rounded-full px-4 md:px-6 py-3 text-base whitespace-normal md:whitespace-nowrap ${
                  activeService === 'Minerals Exploration & Development' 
                    ? 'bg-black text-white hover:bg-black/90 hover:text-white' 
                    : 'border-2 border-black bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => setActiveService('Minerals Exploration & Development')}
              >
                Minerals Exploration & Development
              </Button>
              
              <Button 
                variant="outline" 
                className={`rounded-full px-4 md:px-6 py-3 text-base whitespace-normal md:whitespace-nowrap ${
                  activeService === 'Mining Laboratory Services' 
                    ? 'bg-black text-white hover:bg-black/90 hover:text-white' 
                    : 'border-2 border-black bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => setActiveService('Mining Laboratory Services')}
              >
                Mining Laboratory Services
              </Button>
              
              <Button 
                variant="outline" 
                className={`rounded-full px-4 md:px-6 py-3 text-base whitespace-normal md:whitespace-nowrap ${
                  activeService === 'Gemstone Production & Retail' 
                    ? 'bg-black text-white hover:bg-black/90 hover:text-white' 
                    : 'border-2 border-black bg-white text-black hover:bg-black hover:text-white'
                }`}
                onClick={() => setActiveService('Gemstone Production & Retail')}
              >
                Gemstone Production & Retail
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              className={`rounded-full px-4 md:px-6 py-3 text-base whitespace-normal md:whitespace-nowrap md:ml-auto ${
                activeService === 'See All' 
                  ? 'bg-black text-white hover:bg-black/90 hover:text-white' 
                  : 'border-2 border-black bg-white text-black hover:bg-black hover:text-white'
              }`}
              onClick={() => setActiveService('See All')}
            >
              See All
            </Button>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gold Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white transition-all duration-300 hover:scale-105 hover:z-10 group">
              <div className="relative w-full h-[400px]">
                <img 
                  src="/gold.svg" 
                  alt="Gold mineral"
                  className="absolute inset-0 w-full h-full object-cover md:grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-bold">Gold</h3>
                  <div className="bg-white rounded-full p-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="mt-auto mb-8 text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <img src="/pipe.svg" alt="" className="w-12 h-12" />
                    <span>Piperaceae</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quartz Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white transition-all duration-300 hover:scale-105 hover:z-10 group">
              <div className="relative w-full h-[400px]">
                <img 
                  src="/quartz.svg" 
                  alt="Quartz mineral"
                  className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-bold">Quartz</h3>
                  <div className="bg-white rounded-full p-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="mt-auto mb-8 text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <img src="/arcade.svg" alt="" className="w-12 h-12" />
                    <span>Arcadaceae</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feldspar Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white transition-all duration-300 hover:scale-105 hover:z-10 group">
              <div className="relative w-full h-[400px]">
                <img 
                  src="/fiels.svg" 
                  alt="Feldspar mineral"
                  className="absolute inset-0 w-full h-full object-cover md:grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-bold">Feldspar</h3>
                  <div className="bg-white rounded-full p-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="mt-auto mb-8 text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <img src="/mora.svg" alt="" className="w-12 h-12" />
                    <span>Moraceae</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Minerals Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-12">
            <h2 className="text-5xl md:text-8xl font-bold mb-4 md:mb-0">Featured Minerals</h2>
            <p className="text-lg w-full md:max-w-md">
              Discover our diverse range of
              high-quality minerals
              extracted and processed with
              sustainable practices and
              cutting-edge technology.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gold Card */}
              <div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setActiveIndex(0)}
              >
                <div className="relative w-full h-[300px]">
                  <img 
                    src="/goldbar.svg" 
                    alt="Gold mineral" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white text-black p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-4xl font-bold">Gold</h3>
                    <button className="bg-black rounded-full p-4 transition-transform hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-500/90">
                    High-purity gold extracted using sustainable methods from our Ethiopian mines.
                  </p>
                </div>
              </div>

              {/* Kaolin Card */}
              <div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setActiveIndex(1)}
              >
                <div className="relative w-full h-[300px]">
                  <img 
                    src="/salt.svg" 
                    alt="Kaolin mineral" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white text-black p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-4xl font-bold">Kaolin</h3>
                    <button className="bg-black rounded-full p-4 transition-transform hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-500/90">
                    Premium white kaolin clay with excellent purity and consistency.
                  </p>
                </div>
              </div>

              {/* Dolomite Card */}
              <div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setActiveIndex(2)}
              >
                <div className="relative w-full h-[300px]">
                  <img 
                    src="/dol.svg" 
                    alt="Dolomite mineral" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white text-black p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-4xl font-bold">Dolomite</h3>
                    <button className="bg-black rounded-full p-4 transition-transform hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-500/90">
                    Pure dolomite with excellent chemical properties for various industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View mineral ${index + 1}`}
                />
              ))}
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
    </main>
  )
}
