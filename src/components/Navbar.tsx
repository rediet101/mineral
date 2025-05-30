'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4">
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
                className={`
                  border border-white 
                  rounded-full 
                  px-10 py-3 
                  transition duration-300 
                  hover:bg-white hover:text-black
                  ${pathname === href ? 'bg-white !text-black' : 'text-white'}
                `}
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