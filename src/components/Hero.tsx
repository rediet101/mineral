'use client'

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from './ui/button'


const Hero = () => {
  return (
    <div className="relative w-full h-[320] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.svg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Added pt-12 (or your desired padding) to create space between Navbar and content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 text-white pt-12">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Ethiopian Mineral Corporation
            </h1>
            <img src="ethiopia.svg" alt="" />
            <div className="flex justify-center items-center w-full px-4 -mt-10">
              <p className="text-lg max-w-2xl text-left">
                Ethiopian Minerals Corporation is a state-owned enterprise established in 1942,
                tasked with the exploration, development, processing, and marketing of mineral
                resources in Ethiopia.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mt-3">
            {/* Left side - Image at bottom left */}
            <div className="self-end">
              <Image 
                src="/gem.svg"
                alt="100+ Minerals"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>

           
          </div>
           
        </div>
    {/* Right side - Button and arrow */}
<div className="flex flex-col items-center md:items-end -mt-29 mr-10 gap-6">
  {/* SVG Arrow */}
  <div>
    <svg width="62" height="62" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="90" height="90" rx="45" stroke="white" strokeWidth="2"/>
      <path d="M48.0833 29.3333C48.0833 28.1827 47.1506 27.25 46 27.25C44.8494 27.25 43.9167 28.1827 43.9167 29.3333V58.6787L33.9315 48.6935C33.1179 47.8799 31.7988 47.8799 30.9852 48.6935C30.1716 49.5071 30.1716 50.8262 30.9852 51.6398L43.0537 63.7083C44.6809 65.3355 47.3191 65.3355 48.9463 63.7083L61.0148 51.6398C61.8284 50.8262 61.8284 49.5071 61.0148 48.6935C60.2012 47.8799 58.8821 47.8799 58.0685 48.6935L48.0833 58.6787V29.3333Z" fill="white"/>
    </svg>
  </div>

  {/* Button */}
  <Button 
    className="
      bg-white 
      text-black 
      font-semibold 
      px-20 py-5 
      rounded-full 
      hover:bg-white/90 
      transition
      border-2 
      border-black
      shadow-lg
      relative
      z-20
    "
  >
    Explore Ethiopia Minerals
  </Button>
</div>

      </div>
    </div>
  )
}

export default Hero