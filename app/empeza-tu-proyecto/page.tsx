'use client';

import { useState } from 'react';

export default function EmpezaTuProyectoPage() {
  const [filledSelects, setFilledSelects] = useState({
    dueno: false,
    tiempo: false,
    formato: false,
    rango: false
  });

  const handleSelectChange = (name: string, value: string) => {
    setFilledSelects(prev => ({
      ...prev,
      [name]: value !== ''
    }));
  };

  return (
    <div className="min-h-screen bg-white">
             {/* Header Section */}
       <div className="container mx-auto px-4 py-16" style={{ paddingTop: 'calc(4rem - 80px)' }}>
         <div className="text-center mb-12">
         </div>

                 {/* Form Section */}
         <div className="w-full flex flex-col items-center justify-center mt-12 md:mt-24 mb-8 md:mb-12 px-4 md:px-0">
           <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-6 md:mb-8 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
             EMPEZÁ TU PROYECTO
           </h2>
                       <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed text-center max-w-3GITxl mx-auto mb-4 md:mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              Para aquellos que quieran comenzar su proyecto, el siguiente formulario nos permite acercarles una propuesta personalizada y acorde a sus necesidades específicas.
            </div>
           <div className="w-full flex justify-center mb-8 md:mb-12">
             <div className="h-16 md:h-24 w-px bg-gray-400" />
           </div>
          <form 
            action="https://formspree.io/f/xqalovyw" 
            method="POST"
            className="w-full max-w-[calc(100%-32px)] md:max-w-4xl flex flex-col gap-6"
            autoComplete="off"
          >
            {/* Row 1: Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="nombre" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  TU NOMBRE
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  required
                />
              </div>
            </div>

            {/* Row 2: Teléfono y Zona */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="telefono" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  TELÉFONO
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zona" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  ZONA DONDE QUERÉS CONSTRUIR
                </label>
                <input
                  type="text"
                  id="zona"
                  name="zona"
                  className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  required
                />
              </div>
            </div>

            {/* Row 3: Link de Google Maps */}
            <div className="flex flex-col">
              <label htmlFor="ubicacion" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                LINK DE GOOGLE MAPS O ESCRIBÍ LA UBICACIÓN
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
            </div>

            {/* Row 4: Dueño del terreno y Cuándo construir */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="dueno" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  ¿SOS DUEÑO DEL TERRENO?
                </label>
                <select
                  id="dueno"
                  name="dueno"
                  className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.dueno ? 'filled' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  defaultValue=""
                  onChange={(e) => handleSelectChange('dueno', e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="si">SI</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="tiempo" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  ¿CUÁNDO QUERÉS CONSTRUIR?
                </label>
                <select
                  id="tiempo"
                  name="tiempo"
                  className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.tiempo ? 'filled' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  defaultValue=""
                  onChange={(e) => handleSelectChange('tiempo', e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="lo-antes-posible">LO ANTES POSIBLE</option>
                  <option value="en-3-meses">EN 3 MESES</option>
                  <option value="en-6-meses">EN 6 MESES</option>
                  <option value="en-un-ano-o-mas">EN UN AÑO O MÁS</option>
                </select>
              </div>
            </div>

            {/* Row 5: Formato del proyecto y Rango de m2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="formato" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  FORMATO DEL PROYECTO
                </label>
                <select
                  id="formato"
                  name="formato"
                  className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.formato ? 'filled' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  defaultValue=""
                  onChange={(e) => handleSelectChange('formato', e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="modelo-predisennado">MODELO PREDISEÑADO</option>
                  <option value="modelo-predisennado-con-modificaciones">MODELO PREDISEÑADO CON MODIFICACIONES</option>
                  <option value="disenno-personalizado">DISEÑO PERSONALIZADO</option>
                  <option value="reforma-refaccion-ampliacion">REFORMA/REFACCIÓN/AMPLIACIÓN</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="rango" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  RANGO DE M2 DE TU PROYECTO
                </label>
                <select
                  id="rango"
                  name="rango"
                  className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.rango ? 'filled' : ''}`}
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  defaultValue=""
                  onChange={(e) => handleSelectChange('rango', e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="20-50">DE 20M2 A 50M2</option>
                  <option value="50-100">DE 50M2 A 100M2</option>
                  <option value="100-150">DE 100M2 A 150M2</option>
                  <option value="150-200">DE 150 A 200M2</option>
                  <option value="mas-de-200">MÁS DE 200M2</option>
                  <option value="mas-de-un-proyecto">MÁS DE UN PROYECTO</option>
                </select>
              </div>
            </div>

            {/* Row 6: Contanos sobre tu idea */}
            <div className="flex flex-col">
              <label htmlFor="idea" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                CONTANOS SOBRE TU IDEA
              </label>
              <textarea
                id="idea"
                name="idea"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition min-h-[120px] resize-none"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 border border-black bg-white text-black font-montserrat uppercase tracking-widest py-3 transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
