'use client'
import React, { useState } from 'react'

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch('https://formspree.io/f/xyzwobap', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass =
    'w-full border border-gray-300 bg-[#FAFAFA] px-4 py-3 text-base font-montserrat uppercase text-gray-700 focus:outline-none focus:border-black transition placeholder:font-montserrat placeholder:uppercase placeholder:text-gray-600';

  return (
    <section className="w-full flex flex-col items-center justify-center mt-24 mb-12 px-0">
      <h2 className="text-center text-3xl font-normal tracking-widest mb-8 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
        CONTACTANOS
      </h2>
      <div className="w-full flex justify-center mb-12">
        <div className="h-24 w-px bg-gray-400" />
      </div>
      <form className="w-full max-w-3xl flex flex-col gap-3" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="nombre"
          placeholder="NOMBRE"
          className={inputClass}
          required
        />
        <input
          type="email"
          name="mail"
          placeholder="MAIL"
          className={inputClass}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="TELÉFONO"
          className={inputClass}
          required
        />
        <textarea
          name="consulta"
          placeholder="CONSULTA"
          className={inputClass + ' min-h-[120px] resize-none'}
          required
        />
        <button
          type="submit"
          className="w-full mt-2 border border-black bg-white text-black font-montserrat uppercase tracking-widest py-3 transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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