'use client'

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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

        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 text-white">
          <div className="md:mt-12">
            {/* Centered heading for mobile, left-aligned for desktop */}
            <h1 className="text-5xl sm:text-5xl md:text-5xl font-bold mb-4 text-center md:text-left">
              Ethiopian Mineral Corporation
            </h1>
            <img src="ethiopia.svg" alt="" className="mx-auto md:mx-0" />
            <div className="flex justify-center items-center w-full px-4 md:-mt-10">
              <p className="text-sm md:text-lg max-w-2xl text-center md:text-left mt-6 md:mt-0">
                Ethiopian Minerals Corporation is a state-owned enterprise established in 1942,
                tasked with the exploration, development, processing, and marketing of mineral
                resources in Ethiopia.
              </p>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex flex-col items-center space-y-4 mt-8">
            <Image 
              src="/gem.svg"
              alt="100+ Minerals"
              width={200}
              height={100}
              className="object-contain"
            />
            
            <Button
              onClick={() =>
                document
                  .getElementById("minerals-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                w-[80%]
                px-8 py-4 
                text-black 
                font-semibold 
                bg-white 
                rounded-full 
                hover:bg-white/90 
                transition 
                border-2 
                border-black 
                shadow-lg 
                relative 
                z-20
                mt-8
              "
            >
              Explore Ethiopia Minerals
            </Button>
          </div>

          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="flex justify-between items-end">
              <Image 
                src="/gem.svg"
                alt="100+ Minerals"
                width={300}
                height={150}
                className="object-contain"
              />
              
              <div className="flex flex-col items-end mt-15">
                <svg width="62" height="62" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="90" height="90" rx="45" stroke="white" strokeWidth="2"/>
                  <path d="M48.0833 29.3333C48.0833 28.1827 47.1506 27.25 46 27.25C44.8494 27.25 43.9167 28.1827 43.9167 29.3333V58.6787L33.9315 48.6935C33.1179 47.8799 31.7988 47.8799 30.9852 48.6935C30.1716 49.5071 30.1716 50.8262 30.9852 51.6398L43.0537 63.7083C44.6809 65.3355 47.3191 65.3355 48.9463 63.7083L61.0148 51.6398C61.8284 50.8262 61.8284 49.5071 61.0148 48.6935C60.2012 47.8799 58.8821 47.8799 58.0685 48.6935L48.0833 58.6787V29.3333Z" fill="white"/>
                </svg>
                
                <Button
                  onClick={() =>
                    document
                      .getElementById("minerals-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
                    px-10 py-4 
                    text-black 
                    font-semibold 
                    bg-white 
                    rounded-full 
                    hover:bg-white/90 
                    transition 
                    border-2 
                    border-black 
                    shadow-lg 
                    relative 
                    z-20
                    mt-5
                  "
                >
                  Explore Ethiopia Minerals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero