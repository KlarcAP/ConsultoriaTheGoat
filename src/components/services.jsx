'use client';

import Image from 'next/image';
import blacksmoke from "../assets/black-smoke.jpg";
import n8nImage from "../assets/n8n.png";
import BrandingImage from "../assets/branding.jpg";
import DesignImage from "../assets/design.jpg";
import WebsiteImage from "../assets/website.png";
import SocialImage from "../assets/socialmedia.png";
import VideoImage from "../assets/edicaoVideo.jpg";
import TrafegoImage from "../assets/trafego.jpg";
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
      imagem: BrandingImage,
    }, 
    { 
      icone: <PiPaintBrushBold/>,
      title: "DESIGN", 
      description: "Visual que fala mais alto que mil palavras. Desenvolvemos peças impactantes e consistentes, do logotipo às redes sociais, para que cada detalhe reforce sua credibilidade e gere conexão imediata.",
      imagem: DesignImage,
    },
    { 
      icone: <FaLaptopCode/>,
      title: "WEBSITE", 
      description: "Seu site é sua vitrine — e nós criamos vitrines que convertem. Design moderno, carregamento rápido, experiência intuitiva e otimização para SEO, transformando visitantes em clientes fiéis.",
      imagem: WebsiteImage,
    },
    { 
      icone: <BsInstagram/>,
      title: "SOCIAL MEDIA", 
      description: "Planejamento estratégico, conteúdo criativo e execução afiada. Criamos presença digital consistente, que atrai, engaja e fideliza seu público nas plataformas certas.",
      imagem: SocialImage, 
    },
    { 
      icone: <HiOutlineVideoCamera/>,
      title: "EDIÇÃO DE VÍDEOS", 
      description: "Histórias que prendem a atenção. Transformamos imagens e gravações em vídeos profissionais, prontos para encantar e gerar impacto em qualquer plataforma.",
      imagem: VideoImage, 
    },
    { 
      icone: <FaGoogle/>,
      title: "TRÁFEGO PAGO", 
      description: "Criamos e gerenciamos campanhas inteligentes no Google, Meta Ads e outras plataformas digitais. Nosso foco é otimizar cada investimento para atrair visitantes qualificados, gerar conversões reais e garantir um retorno consistente para o seu negócio.",
      imagem: TrafegoImage, 
    },
    { 
      icone: <SiN8N/>,
      title: "Automação com n8n", 
      description: "Transforme tarefas manuais em processos automáticos e inteligentes. Conectamos ferramentas como WhatsApp, e-mail, planilhas e sistemas de gestão para que tudo trabalhe de forma integrada. ",
      imagem: n8nImage,
    },
  ];

  return (
    <section
      id="servicos"
      className="relative bg-[#ebebeb] min-h-screen flex items-center py-16"
    >
      {/* Fundo smoky 
      <div className="absolute inset-0 z-0 ">
        <Image
          src={blacksmoke}
          alt=""
          fill
          priority
          className="object-cover px-5 py-5 rounded-[5rem] brightness-50"
        />
      </div> */}

      <div className="container mx-auto  p-6 sm:p-6 max-w-6xl z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <h2 className="text-base text-purple-700 font-mono">NOSSOS SERVIÇOS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mt-4">
            Ferramentas para Transformar sua{" "}
            <span className="text-purple-700">Marca em Lenda</span>
          </h3>
        </div>

        {/* Grid de serviços */}
        <div className="gap-8">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={service.title}
                className={`
                  flex flex-col md:flex-row gap-10 items-center mb-20
                  ${isReversed ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* TEXTO */}
                <div className="space-y-4 text-black md:w-1/2">
                  <div className="text-purple-500 text-4xl">{service.icone}</div>
                  <h4 className="text-2xl font-bold">{service.title}</h4>
                  <p className="text-black leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="text-sm text-black space-y-1 mt-4">
                    <li>• Briefing</li>
                    <li>• Criação</li>
                    <li>• Validação</li>
                    <li>• Entrega</li>
                  </ul>
                </div>

                {/* IMAGEM / VÍDEO */}
                <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl bg-black/20">
                  {service.imagem ? (
                    <Image
                      src={service.imagem}
                      alt={service.title}
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="w-full h-64 bg-white/10 flex items-center justify-center text-white/40 text-sm">
                      Mídia em breve
                    </div>
                  )}
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
