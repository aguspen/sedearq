import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'SedeArq',
  description: 'SedeArq - Tu plataforma de arquitectura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="5491136543442" />
      </body>
    </html>
  )
} 