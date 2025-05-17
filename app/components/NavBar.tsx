'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
    <nav className="w-full border-b border-transparent px-6 py-2 flex items-center justify-between font-sans bg-white">
      {/* Logo */}
      <Link href="/" className="flex flex-col items-start select-none group">
        <span className="font-bold text-3xl leading-none tracking-widest font-montserrat border-b-4 border-black pb-1 pr-2">SEDE</span>
        <span className="text-xs font-normal tracking-widest font-montserrat ml-auto mt-1 group-hover:underline">ARQ</span>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 items-center text-black text-base font-montserrat">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`pb-1 transition-all ${pathname === link.href ? 'border-b-2 border-black font-semibold' : 'border-b-2 border-transparent hover:border-black'} `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-7 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-6 bg-white shadow-lg rounded-lg flex flex-col gap-6 p-6 z-50 md:hidden min-w-[200px] border border-gray-200 animate-fade-in">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block pb-1 text-lg ${pathname === link.href ? 'border-b-2 border-black font-semibold' : 'border-b-2 border-transparent hover:border-black'} `}
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