import './globals.css'

export const metadata = {
  title: 'Edgardoweb & System - Soluciones Tecnológicas',
  description: 'Soporte técnico especializado para sistemas administrativos Valery y cumplimiento con normativas SENIAT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}