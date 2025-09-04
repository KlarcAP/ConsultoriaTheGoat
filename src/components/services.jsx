'use client';

import Image from 'next/image';
import blacksmoke from "../assets/black-smoke.jpg";
import BrandingImage from "../assets/brandingImage.jpg";
import { BsInstagram } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa6';
import { PiPaintBrushBold } from 'react-icons/pi';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { MdCampaign} from "react-icons/md";
import { FaGoogle} from "react-icons/fa";
import { SiN8N } from 'react-icons/si';



export default function Services() {
  const services = [
    { 
      icone: <MdCampaign/>,
      title: "BRANDING", 
      description: "Criamos identidades visuais que não apenas representam sua marca, mas a elevam a um patamar lendário. Do conceito à aplicação, entregamos um posicionamento sólido, memorável e impossível de ignorar.", 
    }, 
    { 
      icone: <PiPaintBrushBold/>,
      title: "DESIGN", 
      description: "Visual que fala mais alto que mil palavras. Desenvolvemos peças impactantes e consistentes, do logotipo às redes sociais, para que cada detalhe reforce sua credibilidade e gere conexão imediata.", 
    },
    { 
      icone: <FaLaptopCode/>,
      title: "WEBSITE", 
      description: "Seu site é sua vitrine — e nós criamos vitrines que convertem. Design moderno, carregamento rápido, experiência intuitiva e otimização para SEO, transformando visitantes em clientes fiéis.", 
    },
    { 
      icone: <BsInstagram/>,
      title: "SOCIAL MEDIA", 
      description: "Planejamento estratégico, conteúdo criativo e execução afiada. Criamos presença digital consistente, que atrai, engaja e fideliza seu público nas plataformas certas.", 
    },
    { 
      icone: <HiOutlineVideoCamera/>,
      title: "EDIÇÃO DE VÍDEOS", 
      description: "Histórias que prendem a atenção. Transformamos imagens e gravações em vídeos profissionais, prontos para encantar e gerar impacto em qualquer plataforma.", 
    },
    { 
      icone: <FaGoogle/>,
      title: "TRÁFEGO PAGO", 
      description: "Criamos e gerenciamos campanhas inteligentes no Google, Meta Ads e outras plataformas digitais. Nosso foco é otimizar cada investimento para atrair visitantes qualificados, gerar conversões reais e garantir um retorno consistente para o seu negócio.", 
    },
    { 
      icone: <SiN8N/>,
      title: "Automação com n8n", 
      description: "Transforme tarefas manuais em processos automáticos e inteligentes. Conectamos ferramentas como WhatsApp, e-mail, planilhas e sistemas de gestão para que tudo trabalhe de forma integrada. ", 
    },
  ];

  return (
    <section
      id="servicos"
      className="relative bg-[#ebebeb] min-h-screen flex items-center py-16"
    >
      {/* Fundo smoky */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={blacksmoke}
          alt=""
          fill
          priority
          className="object-cover px-5 py-5 rounded-[5rem] brightness-50"
        />
      </div>

      <div className="container mx-auto  p-6 sm:p-6 max-w-6xl z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <h2 className="text-base text-purple-700 font-mono">NOSSOS SERVIÇOS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Ferramentas para Transformar sua{" "}
            <span className="text-purple-700">Marca em Lenda</span>
          </h3>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-transparent rounded-[2rem] backdrop-blur-lg p-6 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/90"
            >
              
              <h2 className="text-lg text-white font-bold mb-3 group-hover:text-black">
                {service.icone}{service.title} 
              </h2>
              <p className="text-base text-white group-hover:text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
