import { HeroCarousel } from './components/HeroCarousel'
import Image from 'next/image'

const images = [
  {
    src: '/Hero-image.jpg',
    alt: 'Hero 1',
    url: '/proyecto/hero-1',
  },
  {
    src: '/1. Sede Arq Casa Estancias- Fachada 22.jpg',
    alt: 'Fachada 22',
    url: '/proyecto/fachada-22',
  },
  {
    src: '/4. Sede Arq Casa Estancias- Comedor 5.jpg',
    alt: 'Comedor 5',
    url: '/proyecto/comedor-5',
  },
  {
    src: '/6. Sede Arq Casa Estancias- Cocina 6 EDITADA.jpg',
    alt: 'Cocina 6',
    url: '/proyecto/cocina-6',
  },
  {
    src: '/13. Sede Arq Casa Estancias- Baño 5.jpg',
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
    img: '/casajj.jpg',
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
    img: '/casanojj.jpg',
    imgAlt: 'Casa JM',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <HeroCarousel images={images} />
      {/* Sección Proyectos */}
      <section className="w-full mt-12 mb-32">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-16 font-montserrat">PROYECTOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0 relative min-h-[810px]">
          {/* Arriba Izquierda: Imagen CASA JJ */}
          <div className="relative w-full h-64 md:h-[340px] md:rounded-none md:pl-0 overflow-hidden">
            <Image src={proyectos[0].img} alt={proyectos[0].imgAlt} fill className="object-cover" />
          </div>
          {/* Arriba Derecha: Texto CASA JJ */}
          <div className="flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pl-12 md:pr-0 relative md:h-[340px] md:flex md:items-center text-left">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-left" style={{ fontFamily: 'Arial, sans-serif' }}>{proyectos[0].nombre}</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-left">{proyectos[0].descripcion}</div>
            <div className="text-sm md:text-base font-montserrat text-black/80 leading-relaxed w-full text-left">
              {proyectos[0].detalles.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            {/* Línea vertical */}
            <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-px h-[60px] bg-neutral-300"></div>
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
          <div className="relative w-full h-64 md:h-[340px] md:rounded-none md:pr-0 overflow-hidden">
            <Image src={proyectos[1].img} alt={proyectos[1].imgAlt} fill className="object-cover" />
          </div>
          {/* Línea vertical central */}
          <div className="hidden md:block absolute left-1/2 top-[-39px] w-px" style={{ background: '#282828', height: 'calc(340px * 2 + 25px)' }}></div>
        </div>
      </section>
    </main>
  )
} 