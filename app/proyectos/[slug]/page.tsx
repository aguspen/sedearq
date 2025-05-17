import { notFound } from 'next/navigation'
import Image from 'next/image'
import { proyectos } from '../data'

interface Props {
  params: { slug: string }
}

const ProyectoPage = ({ params }: Props) => {
  const proyecto = proyectos.find(p => p.slug === params.slug)
  if (!proyecto) return notFound()

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto relative aspect-[2/1] mb-12">
        <Image
          src={proyecto.hero}
          alt={proyecto.titulo}
          fill
          className="object-cover rounded-none"
          priority
          sizes="100vw"
        />
      </div>
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {proyecto.imagenes.map((img, i) => (
          <div key={i} className="aspect-square relative">
            <Image
              src={img}
              alt={`${proyecto.titulo} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default ProyectoPage 