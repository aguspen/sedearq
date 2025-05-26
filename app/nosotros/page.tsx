import Image from 'next/image';

const NosotrosPage = () => {
  return (
    <main>
      <div className="w-full aspect-[3/1] relative pt-[50px]">
        <Image
          src="/equipo-sedearq.jpg"
          alt="SedeArq Equipo"
          fill
          className="object-cover grayscale"
          sizes="100vw"
          priority
        />
      </div>

      {/* Sección NOSOTROS */}
      <section className="w-full mt-12 mb-12 flex flex-col items-center">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-8 font-montserrat">NOSOTROS</h2>
        <div className="w-full flex justify-center mb-12">
          <div className="h-24 w-px bg-gray-400" />
        </div>

        {/* Team Members Grid */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">

          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image
                src="/mat-pic.png"
                alt="Arq. Mathieu Bacqué"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-normal text-xl font-sans tracking-widest mb-2">ARQ. MATHIEU BACQUÉ</h3>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">Nacido en el corazón de Recoleta, tiene muchas ganas de crear esta web y no viene a Zona norte ni a palos</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image
                src="/vicky-pic.png"
                alt="Arq. Victoria Gettas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-normal text-xl font-sans tracking-widest mb-2">ARQ. VICTORIA GETTAS</h3>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image
                src="/pablo-pic.png"
                alt="Arq. Pablo Canale"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-normal text-xl font-sans tracking-widest mb-2">ARQ. PABLO CANALE</h3>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.</p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default NosotrosPage; 