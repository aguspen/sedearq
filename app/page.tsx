import Image from 'next/image'
import { ContactForm } from './components/ContactForm'
import { HeroCarousel } from './components/HeroCarousel'
import { EnObraSection } from './components/EnObraSection'
import Link from 'next/link'

const images = [
  {
    src: '/CASA-JM-0.jpg',
    alt: 'Casa JM',
    url: '/proyectos/casa-jm',
    objectPosition: 'center 65%',
  },
  {
    src: '/CASAGOLFRENDER-003.JPG',
    alt: 'Casa Golf',
    url: '/proyectos/casa-golf',
    objectPosition: 'center',
  },
  {
    src: '/CASA-JJ-0.jpg',
    alt: 'Casa JJ',
    url: '/proyectos/casa-jj',
    objectPosition: 'center 50%',
  },
  {
    src: '/CASA-G-0.jpg',
    alt: 'Casa G',
    url: '/proyectos/casa-g',
    objectPosition: 'center 55%',
  },
  {
    src: '/RF-CALLAO-0.jpg',
    alt: 'Reforma Callao',
    url: '/proyectos/reforma-callao',
    objectPosition: 'center 50%',
  },
  {
    src: '/RF-ARCOS-0.JPEG',
    alt: 'Reforma Arcos',
    url: '/proyectos/reforma-arcos',
    objectPosition: 'center 50%',
  },
]

const proyectos = [
  {
    nombre: 'CASA JJ',
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '275m² - Vivienda unifamiliar',
      'Estancias de Pilar, Pilar, Pcia. de Buenos Aires',
      '2022',
    ],
    img: '/CASA-JJ-0.jpg',
    imgAlt: 'Casa JJ',
  },
  {
    nombre: 'CASA JM',
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '301 m2 - Vivienda unifamiliar',
      'Barrio: El Ocho - Pilar, Prov. de Buenos Aires',
      '2022',
    ],
    img: '/CASA-JM-0.jpg',
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
            <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed w-full text-left" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              {proyectos[0].detalles.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          </div>
          {/* Abajo Izquierda: Texto CASA JM */}
          <div className="flex flex-col items-end justify-center px-6 py-5 md:py-0 md:pr-12 md:pl-0 relative text-right md:h-[340px] md:flex md:items-center">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-right" style={{ fontFamily: 'Arial, sans-serif' }}>{proyectos[1].nombre}</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-right">{proyectos[1].descripcion}</div>
            <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed w-full text-right" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              {proyectos[1].detalles.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          </div>
          {/* Abajo Derecha: Imagen CASA JM */}
          <Link href="/proyectos/casa-jm" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pr-0 overflow-hidden group">
            <Image src={proyectos[1].img} alt={proyectos[1].imgAlt} fill className="object-cover transition-all duration-300 group-hover:grayscale" style={{objectPosition: 'bottom'}} />
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
            <Image src="/RF-CALLAO-0.jpg" alt="Reforma Callao" fill className="object-cover transition-all duration-300 group-hover:grayscale" style={{objectPosition: 'center'}} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
              <span className="text-white text-lg font-montserrat tracking-widest">VER PROYECTO</span>
            </div>
          </Link>
          {/* Arriba Derecha: Texto REFORMA CALLAO */}
          <div className="flex flex-col items-start justify-center px-6 py-8 md:py-0 md:pl-12 md:pr-0 relative md:h-[340px] md:flex md:items-center text-left">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-left" style={{ fontFamily: 'Arial, sans-serif' }}>REFORMA CALLAO</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-left">INTEGRAL</div>
            <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed w-full text-left" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              <div>Recoleta, Ciudad Autónoma de Buenos Aires</div>
            </div>
          </div>
          {/* Abajo Izquierda: Texto REFORMA TALCAHUANO */}
          <div className="flex flex-col items-end justify-center px-6 py-8 md:py-0 md:pr-12 md:pl-0 relative text-right md:h-[340px] md:flex md:items-center">
            <h3 className="font-normal text-xl md:text-2xl font-sans tracking-widest mb-2 w-full text-right" style={{ fontFamily: 'Arial, sans-serif' }}>REFORMA TALCAHUANO</h3>
            <div className="text-sm md:text-base font-montserrat tracking-widest mb-4 uppercase w-full text-right">PARCIAL</div>
            <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed w-full text-right" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              <div>Recoleta, Ciudad Autónoma de Buenos Aires</div>
            </div>
          </div>
          {/* Abajo Derecha: Imagen REFORMA TALCAHUANO */}
          <Link href="/proyectos/reforma-talcahuano" className="relative w-full h-64 md:h-[340px] md:rounded-none md:pr-0 overflow-hidden group">
            <Image src="/RF-TALCAHUANO-0.JPEG" alt="Reforma Talcahuano" fill className="object-cover transition-all duration-300 group-hover:grayscale" style={{objectPosition: 'center'}} />
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
        <EnObraSection
          obras={[
            {
              nombre: 'CASA 1E4',
              imagenes: [
                '/CASA 1E4 - EN OBRA 1.JPEG',
                '/CASA 1E4 - EN OBRA 2.JPEG',
              ],
            },
            {
              nombre: 'CASA AB',
              imagenes: [
                '/CASA AB - EN OBRA 1.jpeg',
                '/CASA AB - EN OBRA 2.jpg',
                '/CASA AB - EN OBRA 3.jpg',
                '/CASA AB - EN OBRA 4.jpg',
                '/CASA AB - EN OBRA 5.jpg',
              ],
            },
            {
              nombre: 'CASA CS',
              imagenes: [
                '/CASA CS - EN OBRA 1.jpg',
                '/CASA CS - EN OBRA 2.jpg',
              ],
            },
            {
              nombre: 'CASA FC',
              imagenes: [
                '/CASA FC - EN OBRA 1.JPEG',
                '/CASA FC - EN OBRA 2.JPEG',
                '/CASA FC - EN OBRA 3.JPEG',
              ],
            },
            {
              nombre: 'CASA GOLF',
              imagenes: [
                '/CASA GOLF - EN OBRA 1.jpeg',
                '/CASA GOLF - EN OBRA 2.jpeg',
                '/CASA GOLF - EN OBRA 3.jpeg',
                '/CASA GOLF - EN OBRA 4.jpeg',
                '/CASA GOLF - EN OBRA 5.jpeg',
                '/CASA GOLF - EN OBRA 6.jpeg',
                '/CASA GOLF - EN OBRA 7.jpeg',
                '/CASA GOLF - EN OBRA 8.jpeg',
                '/CASA GOLF - EN OBRA 9.jpeg',
                '/CASA GOLF - EN OBRA 10.JPEG',
                '/CASA GOLF - EN OBRA 11.JPEG',
              ],
            },
            {
              nombre: 'CASA JM',
              imagenes: [
                '/CASA JM - EN OBRA 1.JPEG',
                '/CASA JM - EN OBRA 2.jpeg',
                '/CASA JM - EN OBRA 3.jpeg',
                '/CASA JM - EN OBRA 4.jpeg',
              ],
            },
          ]}
        />
      </section>
      <ContactForm />
    </main>
  )
} 