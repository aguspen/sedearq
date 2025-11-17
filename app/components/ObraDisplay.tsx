'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ObraDisplayProps {
  nombre: string
  imagenes: string[]
  currentIndex: number
}

export const ObraDisplay = ({ nombre, imagenes, currentIndex }: ObraDisplayProps) => {
  const [isHovered, setIsHovered] = useState(false)

  if (imagenes.length === 0) return null

  return (
    <div
      className="relative w-full aspect-[2/1.5] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imagenes.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`${nombre} - Imagen ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      ))}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/30 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white text-lg font-montserrat tracking-widest">
          {nombre}
        </span>
      </div>
    </div>
  )
}

