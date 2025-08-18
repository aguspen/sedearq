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
                       <div className="text-sm md:text-base font-montserrat font-normal text-black/80 leading-relaxed text-center max-w-3xl mx-auto mb-4 md:mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              Para aquellos que quieran comenzar su proyecto, el siguiente formulario nos permite acercarles una propuesta personalizada y acorde a sus necesidades específicas.
            </div>
           <div className="w-full flex justify-center mb-8 md:mb-12">
             <div className="h-16 md:h-24 w-px bg-gray-400" />
           </div>
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="w-full max-w-[calc(100%-32px)] md:max-w-4xl flex flex-col gap-3"
            autoComplete="off"
          >
            {/* Row 1: Nombre y Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="nombre"
                placeholder="TU NOMBRE"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
            </div>

            {/* Row 2: Teléfono y Zona */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="tel"
                name="telefono"
                placeholder="TELÉFONO"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
              <input
                type="text"
                name="zona"
                placeholder="ZONA DONDE QUERÉS CONSTRUIR"
                className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                required
              />
            </div>

            {/* Row 3: Link de Google Maps */}
            <input
              type="text"
              name="ubicacion"
              placeholder="LINK DE GOOGLE MAPS O ESCRIBÍ LA UBICACIÓN"
              className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              required
            />

            {/* Row 4: Dueño del terreno y Cuándo construir */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <select
                name="dueno"
                className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.dueno ? 'filled' : ''}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                defaultValue=""
                onChange={(e) => handleSelectChange('dueno', e.target.value)}
                required
              >
                <option value="">¿SOS DUEÑO DEL TERRENO?</option>
                <option value="si">SI</option>
                <option value="no">NO</option>
              </select>
              <select
                name="tiempo"
                className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.tiempo ? 'filled' : ''}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                defaultValue=""
                onChange={(e) => handleSelectChange('tiempo', e.target.value)}
                required
              >
                <option value="">¿CUÁNDO QUERÉS CONSTRUIR?</option>
                <option value="lo-antes-posible">LO ANTES POSIBLE</option>
                <option value="en-3-meses">EN 3 MESES</option>
                <option value="en-6-meses">EN 6 MESES</option>
                <option value="en-un-ano-o-mas">EN UN AÑO O MÁS</option>
              </select>
            </div>

            {/* Row 5: Formato del proyecto y Rango de m2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <select
                name="formato"
                className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.formato ? 'filled' : ''}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                defaultValue=""
                onChange={(e) => handleSelectChange('formato', e.target.value)}
                required
              >
                <option value="">FORMATO DEL PROYECTO</option>
                <option value="modelo-predisennado">MODELO PREDISEÑADO</option>
                <option value="modelo-predisennado-con-modificaciones">MODELO PREDISEÑADO CON MODIFICACIONES</option>
                <option value="disenno-personalizado">DISEÑO PERSONALIZADO</option>
                <option value="reforma-refaccion-ampliacion">REFORMA/REFACCIÓN/AMPLIACIÓN</option>
              </select>
              <select
                name="rango"
                className={`w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase focus:outline-none focus:border-black transition appearance-none cursor-pointer ${filledSelects.rango ? 'filled' : ''}`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                defaultValue=""
                onChange={(e) => handleSelectChange('rango', e.target.value)}
                required
              >
                <option value="">RANGO DE M2 DE TU PROYECTO</option>
                <option value="20-50">DE 20M2 A 50M2</option>
                <option value="50-100">DE 50M2 A 100M2</option>
                <option value="100-150">DE 100M2 A 150M2</option>
                <option value="150-200">DE 150 A 200M2</option>
                <option value="mas-de-200">MÁS DE 200M2</option>
                <option value="mas-de-un-proyecto">MÁS DE UN PROYECTO</option>
              </select>
            </div>

            {/* Row 6: Contanos sobre tu idea */}
            <textarea
              name="idea"
              placeholder="CONTANOS SOBRE TU IDEA"
              className="w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-500 min-h-[120px] resize-none"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              required
            />

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
