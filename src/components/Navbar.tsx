'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4">
        {/* Combined logo and nav links in one flex container */}
        <div className="flex items-center gap-0">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={20}
          />

          {/* Nav links */}
          <div className="flex text-sm lg:flex-row ml-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/service', label: 'Services' },
              { href: '/project', label: 'Project' },
              { href: '/contact', label: 'Contact' },
              { href: '/about', label: 'About Us' }
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="border border-white text-white rounded-4xl px-10 py-3 transition duration-300 hover:bg-white hover:text-black"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
