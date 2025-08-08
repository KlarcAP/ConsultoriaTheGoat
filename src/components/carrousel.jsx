"use client"; // Garante execução no lado do cliente no Next.js

import { useEffect, useRef } from "react";

export default function Carrrosel() {

    const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    let speed = 0.5;
    let animationFrame;

    function scrollCarousel() {
      position -= speed;
      if (Math.abs(position) >= carousel.scrollWidth / 2) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(scrollCarousel);
    }

    // Inicia o movimento
    scrollCarousel();

    // Pausa ao passar o mouse
    carousel.addEventListener("mouseenter", () => {
      cancelAnimationFrame(animationFrame);
    });

    // Retoma quando o mouse sai
    carousel.addEventListener("mouseleave", () => {
      scrollCarousel();
    });

    // Cleanup quando o componente desmontar
    return () => {
      cancelAnimationFrame(animationFrame);
    };
    }, []);

    return(
      <div className="w-full bg-[#ebebeb]  overflow-hidden">
        <div ref={carouselRef} id="carousel" className="flex whitespace-nowrap h-auto">
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Desenvolvimento Web
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Branding
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Design
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            UX/UI
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Marketing
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">SEO</span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            E-commerce
          </span>

          {/* Repetição para efeito infinito */}
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Desenvolvimento Web
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Branding
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Design
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            UX/UI
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            Marketing
          </span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">SEO</span>
          <span className="mx-8 text-6xl font-semibold text-purple-700">
            E-commerce
          </span>
        </div>
      </div>
    )
}