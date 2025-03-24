import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
import './globals.css'

export const metadata = {
  title: 'Edgardoweb & System - Soluciones Tecnológicas',
  description: 'Soporte técnico especializado para sistemas administrativos Valery y cumplimiento con normativas SENIAT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >{children}</body>
    </html>
  )
}