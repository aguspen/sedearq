import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from './components/NavBar'

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
      </body>
    </html>
  )
} 