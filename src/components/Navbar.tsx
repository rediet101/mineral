'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Services' },
    { href: '/project', label: 'Project' },
    { href: '/contact/getintouch', label: 'Contact' },
    { href: '/about', label: 'About Us' },
    { href: '/news', label: 'News' },
  ]

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4">
        {/* Logo and Desktop Nav links - now together on left */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={20}
          />

          {/* Desktop Nav links - now on left with logo */}
          <div className="hidden md:flex text-sm lg:flex-row ml-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`
                  border border-white 
                  rounded-full 
                  px-10 py-3 
                  transition duration-300 
                  hover:bg-white hover:text-black
                  ${pathname === href || 
                    (href === '/service' && pathname?.startsWith('/service/')) || 
                    (href === '/contact/getintouch' && pathname?.startsWith('/contact')) ||
                    (href === '/news' && pathname?.startsWith('/news/')) ? 'bg-white !text-black' : 'text-white'}
                    
                `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile toggle button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu - now only covering top portion */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 z-50 shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    border border-white 
                    rounded-full 
                    px-6 py-3 
                    transition duration-300 
                    hover:bg-white hover:text-black
                    text-center
                    ${pathname === href || 
                      (href === '/service' && pathname?.startsWith('/service/')) || 
                      (href === '/contact/getintouch' && pathname?.startsWith('/contact')) ||
                      (href === '/news' && pathname?.startsWith('/news/')) ? 'bg-white !text-black' : 'text-white'}
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar