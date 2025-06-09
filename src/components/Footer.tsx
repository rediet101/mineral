import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-8 md:py-12 rounded-2xl md:rounded-4xl" id='bottom'>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
       <div className="relative my-10 md:my-20">
        <div className="flex items-center justify-center">
          {/* Left line segment - visible on all screens */}
          <div className="absolute left-0 right-[calc(50%+2rem)] md:right-[calc(50%+3rem)] h-[1px] bg-gradient-to-r from-transparent from-10% via-gray-400 to-gray-400"></div>
          
          {/* Right line segment - visible on all screens */}
          <div className="absolute right-0 left-[calc(50%+2rem)] md:left-[calc(50%+3rem)] h-[1px] bg-gradient-to-l from-transparent from-10% via-gray-400 to-gray-400"></div>
          
          {/* Logo with clear space around it */}
          <div className="relative z-10 px-3 md:px-6">
            <img 
              src="/blurlogo.svg" 
              alt="EMC Logo" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>
      </div>

        {/* Contact US Title */}
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-8 md:mb-16 mx-auto max-w-4xl">Contact US</h2>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 text-center">
          {/* Address */}
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Address</h3>
            <p className="text-xs md:text-base">Bole Sub-city, 22 Mazoria</p>
            <p className="text-xs md:text-base">Behind Awararis Hotel</p>
            <p className="text-xs md:text-base">Addis Ababa - Ethiopia</p>
          </div>

          {/* Phone */}
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Phone</h3>
            <p className="text-xs md:text-base">Office : +251 11 869 9842</p>
          </div>

          {/* Online */}
          <div className="space-y-1 md:space-y-2">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Online</h3>
            <p className="text-xs md:text-base">info@ethiopianminerals.gov.et</p>
            <p className="text-xs md:text-base">www.ethiopianminerals.gov.et</p>
          </div>
        </div>

        {/* White Rounded Container */}
        <div className="bg-white text-black rounded-[20px] md:rounded-[40px] px-4 md:px-12 py-6 md:py-12">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <button className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Instagram
            </button>
            <button className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Twitter
            </button>
            <button className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Linkedin
            </button>
            <button className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Whatsapp
            </button>
            <button className="text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Pintrest
            </button>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-200 mb-6 md:mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
            <img src="/logo2.svg" alt="EMC Logo" className="h-10 md:h-13" />
            <p className="text-xs md:text-sm">©2025, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}