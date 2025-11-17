'use client'
import { useEffect, useState } from 'react'
import { ObraDisplay } from './ObraDisplay'

interface Obra {
  nombre: string
  imagenes: string[]
}

interface EnObraSectionProps {
  obras: Obra[]
}

export const EnObraSection = ({ obras }: EnObraSectionProps) => {
  // Array de índices actuales para cada proyecto (todos empiezan en 0)
  const [currentIndices, setCurrentIndices] = useState<number[]>(
    obras.map(() => 0)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndices((prevIndices) => {
        // Encontrar el índice mínimo actual (la ronda en la que estamos)
        const minIndex = Math.min(...prevIndices)
        
        // Encontrar todos los proyectos que están en la ronda mínima
        // Incluimos tanto los que pueden avanzar como los que están en su máximo (para reiniciarlos)
        const availableProjects = prevIndices
          .map((idx, i) => ({ idx, i, maxIdx: obras[i].imagenes.length - 1 }))
          .filter(({ idx }) => idx === minIndex)
        
        // Si no hay proyectos disponibles, reiniciar todos a 0
        if (availableProjects.length === 0) {
          return obras.map(() => 0)
        }
        
        // Seleccionar aleatoriamente uno de los proyectos disponibles
        const randomProject = availableProjects[
          Math.floor(Math.random() * availableProjects.length)
        ]
        
        // Avanzar o reiniciar el proyecto seleccionado
        const newIndices = [...prevIndices]
        if (randomProject.idx < randomProject.maxIdx) {
          // Si no ha alcanzado el máximo, avanzar
          newIndices[randomProject.i] += 1
        } else {
          // Si está en su máximo, volver a 0
          newIndices[randomProject.i] = 0
        }
        
        return newIndices
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [obras])

  return (
    <div className="w-full max-w-[calc(100%-24px)] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
      {obras.map((obra, i) => (
        <ObraDisplay
          key={obra.nombre}
          nombre={obra.nombre}
          imagenes={obra.imagenes}
          currentIndex={currentIndices[i]}
        />
      ))}
    </div>
  )
}

