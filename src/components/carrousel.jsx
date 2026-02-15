"use client";
import { useEffect, useRef } from "react";

export default function Carrossel() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    function createCarousel(carousel, speed) {
      if (!carousel) return;
      let position = 0;
      let animationFrame;

      function scrollCarousel() {
        position += speed; // positivo → direita | negativo → esquerda
        if (Math.abs(position) >= carousel.scrollWidth / 2) {
          position = 0;
        }
        carousel.style.transform = `translateX(${position}px)`;
        animationFrame = requestAnimationFrame(scrollCarousel);
      }

      scrollCarousel();

      carousel.addEventListener("mouseenter", () => {
        cancelAnimationFrame(animationFrame);
      });

      carousel.addEventListener("mouseleave", () => {
        scrollCarousel();
      });
    }

    createCarousel(carouselRef1.current, -0.5); // Esquerda
    createCarousel(carouselRef2.current, 0.5);  // Direita
  }, []);

  const items = [
    "Desenvolvimento Web",
    "Branding",
    "Design",
    "UX/UI",
    "Marketing",
    "SEO",
    "E-commerce",
    "Social Media",
  ];

  const renderItems = () => (
    <>
      {items.map((text, i) => (
        <span
          key={i}
          className="mx-8 text-6xl font-semibold text-purple-700"
        >
          {text}
        </span>
      ))}
      {items.map((text, i) => (
        <span
          key={i + "repeat"}
          className="mx-8 text-6xl font-semibold text-purple-700"
        >
          {text}
        </span>
      ))}
    </>
  );

  return (
    <div className="w-full bg-[#ebebeb] overflow-hidden space-y-4 -rotate-z-6">
      {/* Carrossel Esquerda */}
      <div ref={carouselRef1} className="flex whitespace-nowrap h-auto">
        {renderItems()}
      </div>
    </div>
  );
}
