import Image from 'next/image';
import { ContactForm } from '../components/ContactForm';

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
      <section className="w-full mt-12 mb-8 flex flex-col items-center">
        <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-8 font-montserrat">NOSOTROS</h2>
        <div className="w-full max-w-3xl mx-auto px-6 mb-12">
          <p className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
            Somos SEDE arquitectura, un estudio joven dedicado al diseño, desarrollo y construcción de proyectos arquitectónicos.
            <br /><br />
            Nos define una mirada integral: acompañamos cada etapa del proceso, desde las primeras ideas hasta los detalles finales de obra. Nos apasiona el diseño cuidado, la precisión en las terminaciones y la calidad de los espacios que imaginamos y materializamos junto a nuestros clientes.
            <br /><br />
            Creemos que la arquitectura es una herramienta para mejorar la calidad de vida de las personas, y trabajamos para que cada proyecto refleje esa búsqueda. Nos interesa que quienes confían en nosotros disfruten también del camino: pensar, proyectar, planificar y construir los espacios que luego harán propios.
            <br /><br />
            Nos motiva el trabajo en equipo y la posibilidad constante de seguir aprendiendo y creciendo con cada nueva experiencia.
          </p>
        </div>
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
            <p className="text-sm font-montserrat tracking-widest mb-2 uppercase">SOCIO</p>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">
              Egresó de la Facultad de Arquitectura, Diseño, y Urbanismo de la Universidad de Buenos Aires en 2017.
              <br /><br />
              En el mismo año empezó a trabajar en el estudio Matías Goyenechea Arquitectos, participando principalmente en todo el proceso de diseño de proyectos de vivienda unifamiliar, desde el inicio del proyecto hasta la conclusión de la obra.
              <br /><br />
              A mediados del año 2020 participa junto a Pablo Canale en el concurso para la Sede del CAPBA Distrito VIII obteniendo el segundo premio. A fines del mismo año funda junto a Victoria BACQUE - GETTAS ARQs. dando el inicio a lo que, un tiempo después, con la incorporación de Pablo, se convertiría en SEDE ARQUITECTURA.
              <br /><br />
              Desde el año 2022 se desempeña como docente en la materia Arquitectura I, Cátedra Dieguez de FADU - UBA.
            </p>
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
            <p className="text-sm font-montserrat tracking-widest mb-2 uppercase">SOCIA</p>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">
              Egresó de la Facultad de Arquitectura, Diseño, y Urbanismo de la Universidad de Buenos Aires en 2017.
              <br /><br />
              En 2016 realizó un intercambio académico en Sapienza – Università di Roma, donde cursó materias vinculadas a restauración y urbanismo.
              <br /><br />
              En 2018 trabajó en el Ministerio de Infraestructura de la Provincia de Buenos Aires, coordinando proyectos y obras en barrios populares y asentamientos.
              <br /><br />
              En 2020, luego de desarrollar proyectos de manera independiente, se asoció con Mathieu para fundar BACQUÉ - GETTAS ARQS. Estudio que más adelante, con la incorporación de Pablo, se convertiría en SEDE ARQUITECTURA.
              <br /><br />
              En 2023 se mudó a San Carlos de Bariloche, donde continúa el trabajo del estudio, ampliando su alcance y desarrollando nuevos proyectos en la región patagónica.
            </p>
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
            <p className="text-sm font-montserrat tracking-widest mb-2 uppercase">SOCIO</p>
            <p className="text-sm font-montserrat text-black/80 leading-relaxed px-4">
              Egresó de la Facultad de Arquitectura, Diseño, y Urbanismo de la Universidad de Buenos Aires en 2019.
              <br /><br />
              En 2018 realizó un intercambio académico en L'Universita degli studi di Padova, Padova, Italia, donde cursó materias vinculadas a diseño de proyectos de escala media y urbanismo.
              <br /><br />
              En 2021 cursó la maestría en sustentabilidad en arquitectura y urbanismo y en 2024 y un posgrado en desarrollo de proyectos inmobiliarios, ambos en la FADU-UBA.
              <br /><br />
              Fue docente y jefe de trabajos prácticos en la cátedra Solsona-Ledesma desde el año 2018 hasta el 2024.
              <br /><br />
              Comenzó su carrera profesional en el estudio Machado-Silvetti y luego en el estudio Mc Cormack asociados, participando en proyectos de usos mixtos, oficinas y viviendas multifamiliares.
              <br /><br />
              A mediados de 2021, se asocia junto a Mathieu y Victoria fundando SEDE ARQUITECTURA.
            </p>
          </div>

        </div>
      </section>

      {/* Sección CONTACTANOS */}
      <ContactForm />
    </main>
  );
};

export default NosotrosPage; 