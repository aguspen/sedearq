'use client';

import Image from 'next/image'
import Link from 'next/link'
import { proyectos } from './data'
import { ProjectPreview } from '@/app/components/ProjectPreview'

const ProyectosPage = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-0">
      <div className="w-full max-width-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {proyectos.map((proy, i) => (
          <ProjectPreview key={proy.slug} proyecto={proy} />
        ))}
      </div>
    </main>
  )
}

export default ProyectosPage 