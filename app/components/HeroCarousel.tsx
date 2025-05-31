'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeroCarouselProps {
  images: { src: string; alt: string; url: string }[]
}

export const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const total = images.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 3500)
    return () => clearInterval(timer)
  }, [total])

  const goTo = (idx: number) => setCurrent(idx)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <div className="relative w-full h-[50vh] md:h-[74vh] max-h-[870px] flex items-center justify-center overflow-hidden bg-black">
      {images.map((img, idx) => (
        <Link
          href={img.url}
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-label={img.alt}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={idx === 0}
            sizes="100vw"
          />
        </Link>
      ))}
      {/* Flecha Izquierda */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-0 m-0 bg-transparent border-none focus:outline-none"
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg opacity-80 hover:opacity-100 transition"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      {/* Flecha Derecha */}
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-0 m-0 bg-transparent border-none focus:outline-none"
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg opacity-80 hover:opacity-100 transition"><polyline points="9 6 15 12 9 18" /></svg>
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full border border-white/60 transition ${idx === current ? 'bg-white/90' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
} 