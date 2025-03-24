"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Monitor, Server, Code, Shield, Database, ArrowRight } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ContactForm } from "@/components/contact-form"
import Carousel from "@/components/Carousel"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logos/edgardowebsinletras.png"
              alt="Edgardoweb & System Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">Edgardoweb & System</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                window.open("https://wa.me/584261549006?text=Hola,%20me%20gustaría%20contactarlos.", "_blank")
              }}
            >
              Contacto
            </Link>
            <Button
              onClick={() =>
                window.open("https://wa.me/584261549006?text=Hola,%20necesito%20soporte%20técnico.", "_blank")
              }
            >
              Solicitar Soporte
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Soluciones tecnológicas para su negocio
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Mantenga su negocio al día con las normativas del SENIAT con nuestro soporte especializado para
                  sistemas administrativos Valery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                        "_blank",
                      )
                    }
                  >
                    Contáctenos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline"
                    onClick={() =>
                      window.open(
                        "#servicios", "_blank",
                      )
                    }
                  >
                    Ver servicios
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src="/valery.jpeg"
                  alt="Servicios tecnológicos"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos soluciones tecnológicas integrales para mantener su negocio funcionando de manera óptima.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte técnico de PC y laptop</h3>
                <p className="text-muted-foreground mb-4">
                  Mantenimiento preventivo y correctivo para mantener sus equipos funcionando de manera óptima.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Service 2 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sistema Administrativo Valery Software</h3>
                <p className="text-muted-foreground mb-4">
                  Implementación, soporte y actualización para cumplir con las normativas del SENIAT.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Service 3 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diseño Páginas Web</h3>
                <p className="text-muted-foreground mb-4">
                  Creación de sitios web profesionales y responsivos para mejorar su presencia digital.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Service 4 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vigila tus Intereses: Cámaras de Seguridad</h3>
                <p className="text-muted-foreground mb-4">
                  Venta e instalación de sistemas de vigilancia para proteger su negocio.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Service 5 */}
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Administrador de Servidores</h3>
                <p className="text-muted-foreground mb-4">
                  Gestión de servidores Windows y Linux, virtualización con Vmware y Proxmox.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* SENIAT Compliance */}
              <div className="bg-primary/5 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cumplimiento con SENIAT</h3>
                <p className="text-muted-foreground mb-4">
                  Mantenga su sistema Valery actualizado con las últimas normativas fiscales y tributarias.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-medium"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Más información <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <Carousel />
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="nosotros" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src="/team.jpg"
                  alt="Nuestro equipo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">¿Por qué elegirnos?</h2>
                <p className="text-lg text-muted-foreground">
                  En Edgardoweb & System nos especializamos en brindar soluciones tecnológicas integrales para empresas
                  que utilizan el sistema administrativo Valery.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Experiencia</h4>
                      <p className="text-muted-foreground">
                        Años de experiencia brindando soporte técnico especializado.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Especialistas en Valery</h4>
                      <p className="text-muted-foreground">
                        Conocemos a fondo el sistema administrativo Valery y sus requerimientos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="h-3 w-3 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Soluciones integrales</h4>
                      <p className="text-muted-foreground">
                        Ofrecemos un servicio completo desde hardware hasta software.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20su%20empresa.",
                      "_blank",
                    )
                  }
                >
                  Conozca más sobre nosotros
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">¿Listo para optimizar su sistema Valery?</h2>
              <p className="text-xl opacity-90">
                Mantenga su negocio al día con las normativas del SENIAT y optimice sus operaciones con nuestro soporte
                especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20gustaría%20solicitar%20una%20consulta%20sobre%20sus%20servicios.",
                      "_blank",
                    )
                  }
                >
                  Solicitar una consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                  onClick={() =>
                    window.open(
                      "https://wa.me/584261549006?text=Hola,%20me%20gustaría%20conocer%20los%20planes%20de%20soporte%20disponibles.",
                      "_blank",
                    )
                  }
                >
                  Ver planes de soporte
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Contáctenos</h2>
                <p className="text-lg text-muted-foreground">
                  Estamos listos para ayudarle con todas sus necesidades tecnológicas. Póngase en contacto con nosotros
                  hoy mismo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10C20 14.4183 16.4183 18 12 18C11.0039 18 10.0039 17.8337 9 17.5C5 19.5 2 19.5 2 19.5C2 19.5 4.5 17 5.5 13.5C4.5 12.5 4 11.5 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Correo electrónico</h4>
                      <p className="text-muted-foreground">info@edgardoweb.com.ve</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Horario de atención</h4>
                      <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 3L15 9M15 9V4M15 9H20M21 21L15 15M15 15V20M15 15H20M3 21L9 15M9 15H4M9 15V20M3 3L9 9M9 9H4M9 9V4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Teléfono</h4>
                      <p className="text-muted-foreground">+58 (0426) -154 90 06</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 3L15 9M15 9V4M15 9H20M21 21L15 15M15 15V20M15 15H20M3 21L9 15M9 15H4M9 15V20M3 3L9 9M9 9H4M9 9V4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Dirección</h4>
                      <p className="text-muted-foreground">Urbanización La Concordia calle 06 local 53</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/logos/edgardowebsinletras.png"
                  alt="Edgardoweb & System Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-bold">Edgardoweb & System</span>
              </div>
              <p className="text-muted-foreground">Soluciones tecnológicas integrales para su negocio.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Soporte técnico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sistema Valery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Diseño Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cámaras de seguridad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Servidores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sobre nosotros
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Clientes
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Testimonios
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Edgardoweb & System. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

