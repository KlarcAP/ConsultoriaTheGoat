'use client'

import Image from 'next/image';
import blacksmoke from "../assets/black-smoke.jpg";
import { useState } from "react";
import BrandingImage from "../assets/brandingImage.jpg";

export default function Services() {
  const [open, setOpen] = useState(null);

  const toggleItem = (index) => {
    setOpen(open === index ? null : index);
  };

  const services = [
    { 
      title: "BRANDING", 
      description: "Criamos identidades visuais que não apenas representam sua marca, mas a elevam a um patamar lendário. Do conceito à aplicação, entregamos um posicionamento sólido, memorável e impossível de ignorar.", 
      photo: BrandingImage 
    }, 
    { 
      title: "DESIGN", 
      description: "Visual que fala mais alto que mil palavras. Desenvolvemos peças impactantes e consistentes, do logotipo às redes sociais, para que cada detalhe reforce sua credibilidade e gere conexão imediata.", 
      photo: BrandingImage 
    },
    { 
      title: "WEBSITE", 
      description: "Seu site é sua vitrine — e nós criamos vitrines que convertem. Design moderno, carregamento rápido, experiência intuitiva e otimização para SEO, transformando visitantes em clientes fiéis.", 
      photo: BrandingImage 
    },
    { 
      title: "SOCIAL MEDIA", 
      description: "Planejamento estratégico, conteúdo criativo e execução afiada. Criamos presença digital consistente, que atrai, engaja e fideliza seu público nas plataformas certas.", 
      photo: BrandingImage 
    },
    { 
      title: "EDIÇÃO DE VÍDEOS", 
      description: "Histórias que prendem a atenção. Transformamos imagens e gravações em vídeos profissionais, prontos para encantar e gerar impacto em qualquer plataforma.", 
      photo: BrandingImage 
    },
  ];

  return (
    <section
      id="servicos"
      className="relative bg-[#ebebeb]  overflow-hidden min-h-screen flex justify-center items-center py-16"
    >
      
      <div className="container w-80 mx-auto z-20 px-4">
        <Image
        src={blacksmoke}
        alt="black-smoke"
        fill
        priority
        className="object-cover px-7 py-7 rounded-[5rem] inset-0 brightness-50 z-0"
        />
        <div className="text-left mb-20">
          <h2 className="text-base text-purple-600 font-mono">NOSSOS SERVIÇOS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Ferramentas para Transformar sua{" "}
            <span className="text-purple-500">Marca em Lenda</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent border w-full transition-all duration-300 hover:border-purple-500 hover:bg-purple-500 hover:text-black"
            >
              
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
