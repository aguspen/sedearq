'use client'
import React, { useState } from 'react'
import { FORMSPREE_ENDPOINTS } from '../config/formspree'

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch(FORMSPREE_ENDPOINTS.CONTACT, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass =
    'w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-600 focus:outline-none focus:border-black transition';

  return (
    <section className="w-full flex flex-col items-center justify-center mt-12 md:mt-24 mb-8 md:mb-12 px-4 md:px-0">
      <h2 className="text-center text-2xl md:text-3xl font-normal tracking-widest mb-6 md:mb-8 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
        CONTACTANOS
      </h2>
      <div className="w-full flex justify-center mb-8 md:mb-12">
        <div className="h-16 md:h-24 w-px bg-gray-400" />
      </div>
      <form className="w-full max-w-[calc(100%-32px)] md:max-w-3xl flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
            NOMBRE
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={inputClass}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
            MAIL
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            className={inputClass}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefono" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
            TELÉFONO
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className={inputClass}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="consulta" className="text-sm font-montserrat uppercase text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
            CONSULTA
          </label>
          <textarea
            id="consulta"
            name="consulta"
            className={inputClass + ' min-h-[120px] resize-none'}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 border border-black bg-white text-black font-montserrat uppercase tracking-widest py-3 transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
        >
          ENVIAR
        </button>
        {submitted && (
          <div className="text-green-600 text-center mt-4 font-montserrat">¡Gracias por tu consulta!</div>
        )}
      </form>
    </section>
  )
} 