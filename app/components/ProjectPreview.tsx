'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Proyecto } from '../proyectos/data'; // Assuming data.ts is in the parent directory

interface ProjectPreviewProps {
  proyecto: Proyecto;
}

export const ProjectPreview = ({ proyecto }: ProjectPreviewProps) => {
  return (
    <Link key={proyecto.slug} href={`/proyectos/${proyecto.slug}`} className="aspect-square relative block group">
      <Image
        src={proyecto.hero}
        alt={proyecto.titulo}
        fill
        className="object-cover group-hover:grayscale group-hover:brightness-90 transition duration-300"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"
        style={{ pointerEvents: 'none' }}
      >
        <span
          className="text-white text-xl md:text-2xl font-sans font-normal tracking-widest uppercase text-center select-none"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {proyecto.titulo}
        </span>
      </span>
    </Link>
  );
}; 