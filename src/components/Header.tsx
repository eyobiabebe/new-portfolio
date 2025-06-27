'use client'

import Link from 'next/link'
import Image from 'next/image'  // <-- Import Image here
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="p-5 sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Title */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/images/EL.png"
              alt="Logo"
              width={32}        // specify width
              height={32}       // specify height
              className="rounded-full object-cover filter brightness-0 invert-0 sepia saturate-100 hue-rotate-200"
            />
            <span className="text-blue-500 font-extrabold text-2xl tracking-wide hover:text-blue-700 hover:underline transition-colors duration-300 cursor-pointer select-none">
              Eyobi.dev
            </span>
          </div>
        </Link>

        {/* Hamburger menu button (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-blue-600"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 
          absolute md:static top-20 left-0 w-full md:w-auto bg-white p-5 md:p-0 
          ${menuOpen ? 'flex' : 'hidden'} shadow-md md:shadow-none z-40`}
        >
          <Link href="#about" className="hover:text-blue-500 block">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-500 block">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-500 block">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/eyob-abebe-42b4b3311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-max px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  )
}
