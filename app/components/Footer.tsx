import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-12 text-gray-800 text-sm font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {/* Column 1 */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <ul>
              <li className="mb-2"><Link href="/" className="hover:underline">INICIO</Link></li>
              <li className="mb-2"><Link href="/proyectos" className="hover:underline">PROYECTOS</Link></li>
              <li className="mb-2"><Link href="/nosotros" className="hover:underline">NOSOTROS</Link></li>
              <li className="mb-2"><Link href="/contacto" className="hover:underline">CONTACTO</Link></li>
              <li className="mb-2"><Link href="/empeza-tu-proyecto" className="hover:underline">EMPEZÁ TU PROYECTO</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <ul>
              <li className="mb-2"><Link href="https://www.instagram.com/sedearq/" target="_blank" rel="noopener noreferrer" className="hover:underline">INSTAGRAM</Link></li>
              <li className="mb-2"><Link href="https://www.linkedin.com/company/sedearq/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:underline">LINKEDIN</Link></li>
              <li className="mb-2"><Link href="https://wa.me/5491136543442" target="_blank" rel="noopener noreferrer" className="hover:underline">WHATSAPP</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-auto">
            <div className="mb-4">
              <div className="font-bold mb-1">DIRECCIÓN</div>
              <div>Juncal 1879 - PB "A"</div>
            </div>
            <div>
              <div className="font-bold mb-1">EMAIL</div>
              <div>estudio@sedearq.com</div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full flex justify-center my-8">
          <div className="w-24 h-px bg-gray-400" />
        </div>

        {/* Additional text */}
        <div className="text-center text-xs text-gray-500">
          <p>Est. 2020 - Estudio Sedearq</p>
          <p>Diseño web por Agustín Penzotti</p>
        </div>
      </div>
    </footer>
  );
}; 