'use client'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/quergedruckt_logo.svg"
            alt="Quergedruckt Logo"
            className="invert opacity-80"
            width={100}
            height={100}
            priority
          />
          <span className="font-bold text-lg ml-4">QUERGEDRUCKT</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
