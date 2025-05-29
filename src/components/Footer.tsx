import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 rounded-4xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
       <div className="relative my-20">
  <div className="flex items-center justify-center">
    {/* Left line segment - clearly visible approaching logo */}
    <div className="absolute left-0 right-[calc(50%+3rem)] h-[1px] bg-gradient-to-r from-transparent from-10% via-gray-400 to-gray-400"></div>
    
    {/* Right line segment - clearly visible approaching logo */}
    <div className="absolute right-0 left-[calc(50%+3rem)] h-[1px] bg-gradient-to-l from-transparent from-10% via-gray-400 to-gray-400"></div>
    
    {/* Logo with clear space around it */}
    <div className="relative z-10  px-6">
      <img 
        src="/blurlogo.svg" 
        alt="EMC Logo" 
        className="w-16 h-16"
      />
    </div>
  </div>
</div>

        {/* Contact US Title */}
        <h2 className="text-8xl font-bold text-center mb-16">Contact US</h2>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>Bole Sub-city, 22 Mazoria</p>
            <p>Behind Awararis Hotel</p>
            <p>Addis Ababa - Ethiopia</p>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Phone</h3>
            <p>Office : +251 11 869 9842</p>
          </div>

          {/* Online */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Online</h3>
            <p>info@ethiopianminerals.gov.et</p>
            <p>www.ethiopianminerals.gov.et</p>
          </div>
        </div>

        {/* White Rounded Container */}
        <div className="bg-white text-black rounded-[40px] px-12 py-12">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Instagram
            </button>
            <button className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Twitter
            </button>
            <button className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Linkedin
            </button>
            <button className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Whatsapp
            </button>
            <button className="px-6 py-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors">
              Pintrest
            </button>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-200 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            <img src="/logo2.svg" alt="EMC Logo" className="h-13" />
            <p className="text-sm">©2025, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}