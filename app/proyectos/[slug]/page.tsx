'use client';

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { use } from 'react'
import { proyectos } from '../data'
import { ContactForm } from '@/app/components/ContactForm'
import { ImageCarouselOverlay } from '@/app/components/ImageCarouselOverlay'
import { ProjectPreview } from '@/app/components/ProjectPreview'
// We will create this component next
// import { ImageCarouselOverlay } from '@/app/components/ImageCarouselOverlay'

interface Props {
  params: Promise<{ slug: string }>
}

const ProyectoPage = ({ params }: Props) => {
  const unwrappedParams = use(params)
  const currentSlug = unwrappedParams.slug

  const proyecto = proyectos.find(p => p.slug === currentSlug)
  const otherProyectos = proyectos.filter(p => p.slug !== currentSlug).slice(0, 3) // Get up to 3 other projects

  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!proyecto) return notFound()

  // Use first 4 images for the gallery, repeat if less than 4
  const galleryImages = Array.from({ length: 4 }, (_, i) => proyecto.imagenes[i % proyecto.imagenes.length])

  const openCarousel = (index: number) => {
    setCurrentImageIndex(index)
    setIsCarouselOpen(true)
  }

  const closeCarousel = () => {
    setIsCarouselOpen(false)
  }

  // Placeholder for carousel navigation logic (will be in the overlay component)
  // const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % proyecto.imagenes.length)
  // const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + proyecto.imagenes.length) % proyecto.imagenes.length)

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Main Project Image */}
      <div className="w-full aspect-[3/1] relative mb-12">
        <Image
          src={proyecto.hero}
          alt={proyecto.titulo}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Project Details Text */}
      <div className="w-full max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-2xl md:text-3xl font-normal tracking-widest mb-4 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>{proyecto.titulo}</h1>
        <div className="text-base md:text-xl font-montserrat tracking-widest mb-6 uppercase text-black/80">{proyecto.descripcion || ''}</div>
        <div className="text-sm md:text-base font-montserrat text-black/70 leading-relaxed">
          {(proyecto.detalles || []).map((d: string, i: number) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      </div>

      {/* 4-Image Gallery */}
      <div className="w-full max-w-[calc(100%-24px)] mx-auto grid grid-cols-2 gap-4 mb-12">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-[2/1.2] relative cursor-pointer" onClick={() => openCarousel(i)}>
            <Image
              src={img}
              alt={`${proyecto.titulo} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 50vw"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* OTROS PROYECTOS Section */}
      <section className="w-full flex flex-col items-center justify-center mt-12 mb-12 px-0">
        <h2 className="text-center text-3xl font-normal tracking-widest mb-8 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          OTROS PROYECTOS
        </h2>
        <div className="w-full flex justify-center mb-12">
          <div className="h-24 w-px bg-gray-400" />
        </div>
        {/* Project Previews */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {otherProyectos.map((proy) => (
             <ProjectPreview key={proy.slug} proyecto={proy} />
          ))}
        </div>
      </section>

      {/* CONTACTANOS Section */}
      <ContactForm />

      {/* Carousel Overlay */}
       {isCarouselOpen && proyecto.imagenes && proyecto.imagenes.length > 0 && (
         <ImageCarouselOverlay
           images={proyecto.imagenes}
           initialIndex={currentImageIndex}
           onClose={closeCarousel}
         />
       )}
    </main>
  )
}

export default ProyectoPage 