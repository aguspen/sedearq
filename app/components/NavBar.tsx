'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { name: 'INICIO', href: '/' },
  { name: 'PROYECTOS', href: '/proyectos' },
  { name: 'NOSOTROS', href: '/nosotros' },
  { name: 'CONTACTO', href: '/contacto' },
  { name: 'EMPEZÁ TU PROYECTO', href: '/empeza-tu-proyecto' },
]

export const NavBar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full border-b border-transparent px-4 md:px-6 py-2 flex items-center justify-between font-sans bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center select-none">
        <Image
          src="/logosedeweb.png"
          alt="SedeArq Logo"
          width={100}
          height={32}
          className="object-contain md:w-[120px] md:h-[40px]"
        />
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 lg:gap-12 items-center text-black text-sm md:text-base font-montserrat">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`pb-1 transition-all ${pathname === link.href ? 'border-b-2 border-black' : 'border-b-2 border-transparent hover:border-black'} `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-14 right-4 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-4 z-50 md:hidden min-w-[180px] border border-gray-200 animate-fade-in">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block pb-1 text-base ${pathname === link.href ? 'border-b-2 border-black' : 'border-b-2 border-transparent hover:border-black'} `}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
} 