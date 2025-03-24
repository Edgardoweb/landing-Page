// components/Carousel.js
"use client"; // Esto es necesario porque usamos hooks y Framer Motion
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const logos = [
  "/logos/samsung.png",
  "/logos/microsoft.png",
  "/logos/valery.jpeg",
  "/logos/linux.png",
  "/logos/bematech.png",
  "/logos/epson.png",
  "/logos/okidata.png",
  "/logos/hasar.png",
  "/logos/ibm.png",
  "/logos/honeywell.png",
  "/logos/star.png",
];

export default function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const totalLogos = logos.length;
      const cloneLogos = [...logos, ...logos]; // Duplicamos los logos para crear un bucle infinito
      let offset = 0;

      const animate = () => {
        offset -= 1; // Velocidad del desplazamiento (puedes ajustar este valor)
        if (offset <= -container.offsetWidth / 2) {
          offset = 0; // Reiniciamos el offset para crear el efecto infinito
        }
        container.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 mx-4"
          >
            <img
              src={logo}
              alt={`Logo ${(index % logos.length) + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
