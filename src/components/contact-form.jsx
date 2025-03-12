"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: "Por favor complete todos los campos",
      })
      return
    }

    // Opción 1: Enviar por correo
    try {
      setStatus({ loading: true, success: false, error: null })

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setStatus({
        loading: false,
        success: true,
        error: null,
      })

      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error:", error)
      setStatus({
        loading: false,
        success: false,
        error: error.message,
      })
    }
  }

  // Opción 2: Abrir WhatsApp como alternativa
  const handleWhatsApp = () => {
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`
    window.open(`https://wa.me/584261549006?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      <h3 className="text-xl font-semibold mb-4">Envíenos un mensaje</h3>

      {status.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-4">
          <p className="font-medium">¡Mensaje enviado con éxito!</p>
          <p className="text-sm mt-1">Nos pondremos en contacto con usted lo antes posible.</p>
        </div>
      ) : null}

      {status.error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4">
          <p className="font-medium">Error al enviar el mensaje</p>
          <p className="text-sm mt-1">{status.error}</p>
        </div>
      ) : null}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="Su nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="Su correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="Asunto de su mensaje"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md text-sm min-h-[120px]"
            placeholder="Escriba su mensaje aquí..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="flex-1" disabled={status.loading}>
            {status.loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </Button>
          <Button type="button" variant="outline" className="flex-1" onClick={handleWhatsApp}>
            Contactar por WhatsApp
          </Button>
        </div>
      </form>
    </div>
  )
}

