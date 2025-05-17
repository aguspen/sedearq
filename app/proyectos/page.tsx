import Image from 'next/image'

const images = [
  '/1. Sede Arq Casa Estancias- Fachada 22.jpg',
  '/4. Sede Arq Casa Estancias- Comedor 5.jpg',
  '/6. Sede Arq Casa Estancias- Cocina 6 EDITADA.jpg',
  '/13. Sede Arq Casa Estancias- Baño 5.jpg',
  '/16. Sede Arq Casa Estancias- Galeria 1.jpg',
  '/17. Sede Arq Casa Estancias- Contrafrente 4.jpg',
  '/18. Sede Arq Casa Estancias- Arq 9.jpg',
  '/3. Sede Arq Casa Estancias- Living 5.jpg',
  '/6. Sede Arq Casa Estancias- Cocina 6.jpg',
  '/10. Sede Arq Casa Estancias- Baño 1.jpg',
  '/16. Sede Arq Casa Estancias- Galeria 15.jpg',
  '/1. Sede Arq Casa Estancias- Fachada 2.jpg',
]

const ProyectosPage = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-0">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {images.map((src, i) => (
          <div key={i} className="aspect-square relative">
            <Image
              src={src}
              alt={`Proyecto ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default ProyectosPage 