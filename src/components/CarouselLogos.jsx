import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// Configure Swiper to use the required modules
SwiperCore.use([Pagination, Navigation]);

const CarouselLogos = () => {
  const logos = [
    {
      id: 1,
      src: "/logos/samsung.png",
      alt: "Samsung Logo",
    },
    {
      id: 2,
      src: "/logos/microsoft.png",
      alt: "Microsoft Logo",
    },
    {
      id: 3,
      src: "/logos/linux.png",
      alt: "Linux Logo",
    },
    {
      id: 4,
      src: "/logos/hp.png",
      alt: "HP Logo",
    },
    {
      id: 5,
      src: "/logos/bematech.png",
      alt: "Bematech Logo",
    },
    {
      id: 6,
      src: "/logos/epson.png",
      alt: "Epson Logo",
    },
    {
      id: 7,
      src: "/logos/valery.png",
      alt: "Valery Logo",
    },
    {
      id: 8,
      src: "/logos/okidata.png",
      alt: "OKI Data Logo",
    },
    {
      id: 9,
      src: "/logos/hasar.png",
      alt: "Hasar Logo",
    },
    {
      id: 10,
      src: "/logos/ibm.png",
      alt: "IBM Logo",
    },
    {
      id: 11,
      src: "/logos/honeywell.png",
      alt: "Honeywell Logo",
    },
    {
      id: 12,
      src: "/logos/star.png",
      alt: "Star Micronics Logo",
    },
  ];

  return (
    <div className="carousel-logos">
      <Swiper
        spaceBetween={30}
        slidesPerView={5} // Número de logos visibles a la vez
        navigation={true} // Botones de navegación
        pagination={{ clickable: true }} // Indicadores de página
        breakpoints={{
          // Configuración responsive
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <img src={logo.src} alt={logo.alt} className="logo-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselLogos;