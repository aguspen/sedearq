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
  
  // Shuffle function to randomize projects
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  const otherProyectos = shuffleArray(proyectos.filter(p => p.slug !== currentSlug)).slice(0, 3) // Get up to 3 random other projects

  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!proyecto) return notFound()

  // Dynamic gallery logic: show all images if ≤4, max 8 if more
  const totalImages = proyecto.imagenes.length;
  let galleryImages;
  let gridLayout;

  if (totalImages <= 4) {
    // Show ALL images (1-4) without empty spaces
    galleryImages = proyecto.imagenes;
    gridLayout = totalImages === 1 ? "grid-cols-1" : 
                 totalImages === 2 ? "grid-cols-1 sm:grid-cols-2" :
                 totalImages === 3 ? "grid-cols-1 sm:grid-cols-2" :
                 "grid-cols-1 sm:grid-cols-2"; // 4 images
  } else if (totalImages === 6) {
    // Show exactly 6 images in a 2x3 grid
    galleryImages = proyecto.imagenes.slice(0, 6);
    gridLayout = "grid-cols-2 sm:grid-cols-3"; // 2x3 grid for 6 images
  } else if (currentSlug === 'casa-golf') {
    // Special case for CASA GOLF: show exactly 6 images in 2x3 grid
    galleryImages = proyecto.imagenes.slice(0, 6);
    gridLayout = "grid-cols-2 sm:grid-cols-3"; // 2x3 grid for CASA GOLF
  } else {
    // Show maximum 8 images for projects with many photos
    galleryImages = proyecto.imagenes.slice(0, 8);
    gridLayout = "grid-cols-2 sm:grid-cols-4"; // Fixed grid for 8 images
  }

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
          style={{ 
            objectPosition: currentSlug === 'casa-golf' ? 'center' : currentSlug === 'casa-jm' ? 'center 65%' : currentSlug === 'casa-g' ? 'center 55%' : (currentSlug === 'casa-sj' || currentSlug === 'casa-bg') ? 'center 78%' : currentSlug === 'casa-rz' ? 'center 55%' : (currentSlug === 'reforma-arcos' || currentSlug === 'reforma-callao' || currentSlug === 'reforma-ayacucho' || currentSlug === 'reforma-talcahuano' || currentSlug === 'reforma-pena-a') ? 'center 60%' : 'bottom'
          }}
          priority
          sizes="100vw"
        />
      </div>

      {/* Project Details Text */}
      <div className="w-full max-w-5xl mx-auto text-center mb-8 md:mb-12 px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-normal tracking-widest mb-3 md:mb-4 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>{proyecto.titulo}</h1>
        <div className="text-sm md:text-base lg:text-xl font-montserrat tracking-widest mb-4 md:mb-6 uppercase text-black/80">{proyecto.descripcion || ''}</div>
        <div className="text-xs md:text-sm lg:text-base font-montserrat text-black/70 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          {(proyecto.detalles || []).map((d: string, i: number) => (
            <div key={i}>{d}</div>
          ))}
        </div>
      </div>

      {/* Dynamic Gallery */}
      <div className={`w-full max-w-[calc(100%-32px)] md:max-w-[calc(100%-48px)] mx-auto grid ${gridLayout} gap-3 md:gap-4 mb-8 md:mb-12`}>
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-[2/1.2] relative cursor-pointer" onClick={() => openCarousel(i)}>
            <Image
              src={img}
              alt={`${proyecto.titulo} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* OTROS PROYECTOS Section */}
      <section className="w-full flex flex-col items-center justify-center mt-8 md:mt-12 mb-8 md:mb-12 px-4 md:px-0">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-6 md:mb-8 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          OTROS PROYECTOS
        </h2>
        <div className="w-full flex justify-center mb-8 md:mb-12">
          <div className="h-16 md:h-24 w-px bg-gray-400" />
        </div>
        {/* Project Previews */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
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