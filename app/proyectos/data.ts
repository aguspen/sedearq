export interface Proyecto {
  slug: string;
  titulo: string;
  hero: string;
  imagenes: string[];
  descripcion?: string;
  detalles?: string[];
}

export const proyectos: Proyecto[] = [
  {
    slug: 'casa-jj',
    titulo: 'CASA JJ',
    hero: '/1. Sede Arq Casa Estancias- Fachada 22.jpg',
    imagenes: ['/1. Sede Arq Casa Estancias- Fachada 22.jpg'],
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '228m² cubiertos - 59m² semicubiertos',
      'Estancias de Pilar, Pilar, Pcia. de Buenos Aires',
      '2022',
    ],
  },
  {
    slug: 'casa-jm',
    titulo: 'CASA JM',
    hero: '/3. Sede Arq Casa Estancias- Living 5.jpg',
    imagenes: ['/3. Sede Arq Casa Estancias- Living 5.jpg'],
    descripcion: 'PROYECTO, DIRECCIÓN Y CONSTRUCCIÓN',
    detalles: [
      '228m² cubiertos - 59m² semicubiertos',
      'Estancias de Pilar, Pilar, Pcia. de Buenos Aires',
      '2022',
    ],
  },
  {
    slug: 'casa-aa',
    titulo: 'CASA AA',
    hero: '/6. Sede Arq Casa Estancias- Cocina 6 EDITADA.jpg',
    imagenes: ['/6. Sede Arq Casa Estancias- Cocina 6 EDITADA.jpg'],
  },
  {
    slug: 'casa-bb',
    titulo: 'CASA BB',
    hero: '/13. Sede Arq Casa Estancias- Baño 5.jpg',
    imagenes: ['/13. Sede Arq Casa Estancias- Baño 5.jpg'],
  },
  {
    slug: 'casa-cc',
    titulo: 'CASA CC',
    hero: '/1. Sede Arq Casa Estancias- Fachada 22.jpg',
    imagenes: ['/1. Sede Arq Casa Estancias- Fachada 22.jpg'],
  },
  {
    slug: 'casa-dd',
    titulo: 'CASA DD',
    hero: '/17. Sede Arq Casa Estancias- Contrafrente 4.jpg',
    imagenes: ['/17. Sede Arq Casa Estancias- Contrafrente 4.jpg'],
  },
  {
    slug: 'reforma-callao',
    titulo: 'REFORMA CALLAO',
    hero: '/18. Sede Arq Casa Estancias- Arq 9.jpg',
    imagenes: ['/18. Sede Arq Casa Estancias- Arq 9.jpg'],
  },
  {
    slug: 'reforma-talcahuano',
    titulo: 'REFORMA TALCAHUANO',
    hero: '/3. Sede Arq Casa Estancias- Living 5.jpg',
    imagenes: ['/3. Sede Arq Casa Estancias- Living 5.jpg'],
  },
  {
    slug: 'reforma-calle-a',
    titulo: 'REFORMA CALLE A',
    hero: '/6. Sede Arq Casa Estancias- Cocina 6.jpg',
    imagenes: ['/6. Sede Arq Casa Estancias- Cocina 6.jpg'],
  },
  {
    slug: 'reforma-calle-b',
    titulo: 'REFORMA CALLE B',
    hero: '/10. Sede Arq Casa Estancias- Baño 1.jpg',
    imagenes: ['/10. Sede Arq Casa Estancias- Baño 1.jpg'],
  },
  {
    slug: 'reforma-calle-c',
    titulo: 'REFORMA CALLE C',
    hero: '/16. Sede Arq Casa Estancias- Galeria 15.jpg',
    imagenes: ['/16. Sede Arq Casa Estancias- Galeria 15.jpg'],
  },
  {
    slug: 'reforma-calle-d',
    titulo: 'REFORMA CALLE D',
    hero: '/1. Sede Arq Casa Estancias- Fachada 2.jpg',
    imagenes: ['/1. Sede Arq Casa Estancias- Fachada 2.jpg'],
  },
]; 