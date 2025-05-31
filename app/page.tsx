import Image from 'next/image'
import { ContactForm } from './components/ContactForm'
import { HeroCarousel } from './components/HeroCarousel'
import Link from 'next/link'

const images = [
  {
    src: '/Hero-image.jpg',
    alt: 'Hero 1',
    url: '/proyecto/hero-1',
  },
  {
    src: '/casa-dd-hero.jpg',
    alt: 'Fachada 22',
    url: '/proyecto/fachada-22',
  },
  {
    src: '/casa-jj-1.jpg',
    alt: 'Living 5',
    url: '/proyecto/living-5',
  },
  {
    src: '/casa-jj-2.jpg',
    alt: 'Cocina 6',
    url: '/proyecto/cocina-6',
  },
  {
    src: '/casa-jj-3.jpg',
    alt: 'Baño 5',
    url: '/proyecto/bano-5',
  },
]

const proyectos = [
  {
    nombre: 'CASA JJ',
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '228m² cubiertos - 59m² semicubiertos',
      'Estancias de Pilar, Pilar, Pcia. de Buenos Aires',
      '2022',
    ],
    img: '/casa-jj-1.jpg',
    imgAlt: 'Casa JJ',
  },
  {
    nombre: 'CASA JM',
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '228m² cubiertos - 59m² semicubiertos',
      'Estancias de Pilar, Pilar, Pcia. de Buenos Aires',
      '2022',
    ],
    img: '/casa-jj-2.jpg',
    imgAlt: 'Casa JM',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <HeroCarousel images={images} />
      {/* Sección Proyectos */}
      <section className="w-full mt-12 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-16 font-montserrat">PROYECTOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0 relative min-h-[810px]">
          {/* Arriba Izquierda: Imagen CASA JJ */}
          <Link href="/proyectos/casa-jj" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pl-0 overflow-hidden group">
            <Image src={proyectos[0].img} alt={proyectos[0].imgAlt} fill className="object-cover transition-all duration-300 group-hover:grayscale" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <span className="text-white text-lg font-montserrat tracking-widest">VER PROYECTO</span>
            </div>
          </Link>
          {/* Arriba Derecha: Texto CASA JJ */}
          <div className="flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pl-12 md:pr-0 relative md:h-[340px] md:flex md:items-center text-left">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-left" style={{ fontFamily: 'Arial, sans-serif' }}>{proyectos[0].nombre}</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-left">{proyectos[0].descripcion}</div>
            <div className="text-sm md:text-base font-montserrat text-black/80 leading-relaxed w-full text-left">
              {proyectos[0].detalles.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          </div>
          {/* Abajo Izquierda: Texto CASA JM */}
          <div className="flex flex-col items-end justify-center px-6 py-5 md:py-0 md:pr-12 md:pl-0 relative text-right md:h-[340px] md:flex md:items-center">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-right" style={{ fontFamily: 'Arial, sans-serif' }}>{proyectos[1].nombre}</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-right">{proyectos[1].descripcion}</div>
            <div className="text-sm md:text-base font-montserrat text-black/80 leading-relaxed w-full text-right">
              {proyectos[1].detalles.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          </div>
          {/* Abajo Derecha: Imagen CASA JM */}
          <Link href="/proyectos/casa-jm" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pr-0 overflow-hidden group">
            <Image src={proyectos[1].img} alt={proyectos[1].imgAlt} fill className="object-cover transition-all duration-300 group-hover:grayscale" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <span className="text-white text-lg font-montserrat tracking-widest">VER PROYECTO</span>
            </div>
          </Link>
          {/* Línea vertical central: desde arriba de la primera imagen hasta el final de la segunda imagen */}
          <div className="hidden md:block absolute left-1/2 top-[-50px] w-px h-[750px] bg-gray-400"></div>
        </div>
      </section>
      {/* Sección Reformas */}
      <section className="w-full mt-6 mb-6">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-16 font-montserrat">REFORMAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0 relative min-h-[810px]">
          {/* Arriba Izquierda: Imagen REFORMA CALLAO */}
          <Link href="/proyectos/reforma-callao" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pl-0 overflow-hidden group">
            <Image src={proyectos[0].img} alt={proyectos[0].imgAlt} fill className="object-cover transition-all duration-300 group-hover:grayscale" style={{objectPosition: 'center'}} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <span className="text-white text-lg font-montserrat tracking-widest">VER PROYECTO</span>
            </div>
          </Link>
          {/* Arriba Derecha: Texto REFORMA CALLAO */}
          <div className="flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pl-12 md:pr-0 relative md:h-[340px] md:flex md:items-center text-left">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-left" style={{ fontFamily: 'Arial, sans-serif' }}>REFORMA CALLAO</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-left">INTEGRAL</div>
            <div className="text-sm md:text-base font-montserrat text-black/80 leading-relaxed w-full text-left">
              <div>Cocina, baño y dormitorios</div>
              <div>Estancias de Pilar, Pilar, Pcia. de Buenos Aires</div>
              <div>2022</div>
            </div>
          </div>
          {/* Abajo Izquierda: Texto REFORMA TALCAHUANO */}
          <div className="flex flex-col items-end justify-center px-6 py-8 md:py-0 md:pr-12 md:pl-0 relative text-right md:h-[340px] md:flex md:items-center">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-right" style={{ fontFamily: 'Arial, sans-serif' }}>REFORMA TALCAHUANO</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-right">PARCIAL</div>
            <div className="text-sm md:text-base font-montserrat text-black/80 leading-relaxed w-full text-right">
              <div>Baño y cocina</div>
              <div>Estancias de Pilar, Pilar, Pcia. de Buenos Aires</div>
              <div>2022</div>
            </div>
          </div>
          {/* Abajo Derecha: Imagen REFORMA TALCAHUANO */}
          <Link href="/proyectos/reforma-talcahuano" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pr-0 overflow-hidden group">
            <Image src={proyectos[1].img} alt={proyectos[1].imgAlt} fill className="object-cover transition-all duration-300 group-hover:grayscale" style={{objectPosition: 'center'}} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <span className="text-white text-lg font-montserrat tracking-widest">VER PROYECTO</span>
            </div>
          </Link>
          {/* Línea vertical central: desde arriba de la primera imagen hasta el final de la segunda imagen */}
          <div className="hidden md:block absolute left-1/2 top-[-50px] w-px h-[750px] bg-gray-400"></div>
        </div>
      </section>
      {/* Sección OBRAS */}
      <section className="w-full mt-6 mb-6">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-8 font-montserrat">EN OBRA</h2>
        <div className="w-full flex justify-center mb-12">
          <div className="h-24 w-px bg-gray-400" />
        </div>
        {/* Obras Images Grid */}
        <div className="w-full max-w-[calc(100%-24px)] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative w-full aspect-[2/1.5] overflow-hidden group">
              <Image
                src="/obraprueba.jpg" 
                alt={`Obra ${i + 1}`}
                fill
                className="object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <span className="text-white text-lg font-montserrat tracking-widest">OBRA {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </main>
  )
} 