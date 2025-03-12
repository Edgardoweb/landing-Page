"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-8">
          <Link
            href="#inicio"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            className="text-lg font-medium hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-lg font-medium hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.open(
                "https://wa.me/584261549006?text=Hola,%20me%20gustaría%20contactarlos.",
                "_blank"
              );
            }}
          >
            Contacto
          </Link>
          <Button
            className="mt-4"
            onClick={() => {
              setOpen(false);
              window.open(
                "https://wa.me/584261549006?text=Hola,%20necesito%20soporte%20técnico.",
                "_blank"
              );
            }}
          >
            Solicitar Soporte
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
