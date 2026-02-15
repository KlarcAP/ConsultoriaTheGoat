"use client";

import teennager from "../assets/teenager-outdoors-using-smartphone.jpg";
import laptop from "../assets/close-up-hands-holding-laptop.jpg";
import placa from "../assets/placa.jpg";
import giftcard from "../assets/gift-card.jpg";
import Image from "next/image";
import { motion } from "motion/react";

const projects = [
  {
    capa: laptop,
    title: "Beconnect",
    niche: "SaaS B2B",
    challenge: "Baixa conversão e posicionamento genérico no mercado.",
    strategy: "Reposicionamento estratégico + arquitetura focada em geração de leads.",
    impact: "Aumento na taxa de conversão e clareza de proposta de valor.",
  },
  {
    capa: teennager,
    title: "PetWalk",
    niche: "Startup Mobile",
    challenge: "Produto validado, mas sem estrutura digital consistente.",
    strategy: "Definição de proposta de valor + UX orientada à ativação.",
    impact: "Melhora na retenção e experiência inicial do usuário.",
  },
  {
    capa: placa,
    title: "Risoflow",
    niche: "Marca Local",
    challenge: "Presença digital fraca e comunicação inconsistente.",
    strategy: "Construção de identidade + site institucional estratégico.",
    impact: "Fortalecimento da autoridade e geração de oportunidades.",
  },
  {
    capa: giftcard,
    title: "Brand X",
    niche: "Comércio Local",
    challenge: "Baixa diferenciação no mercado competitivo.",
    strategy: "Clareza de posicionamento + experiência digital otimizada.",
    impact: "Aumento da percepção de valor da marca.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white relative min-h-screen flex justify-center items-center py-24"
    >
      <div className="container mx-auto px-6">

        {/* Cabeçalho Estratégico */}
        <div className="mb-24 max-w-3xl">
          <p className="text-sm text-purple-600 font-mono">
            ESTUDOS DE CASO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 leading-tight">
            Projetos desenvolvidos com foco em{" "}
            <span className="text-purple-700">estratégia, clareza e impacto real</span>.
          </h2>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Imagem */}
              <div>
                <Image
                  src={project.capa}
                  alt={`Imagem do projeto ${project.title}`}
                  width={600}
                  height={400}
                  placeholder="blur"
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Conteúdo Estratégico */}
              <div className="space-y-4">
                <p className="text-sm text-purple-600 font-medium">
                  {project.niche}
                </p>

                <h3 className="text-2xl font-bold text-black">
                  {project.title}
                </h3>

                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Desafio:</strong> {project.challenge}
                  </p>
                  <p>
                    <strong>Estratégia:</strong> {project.strategy}
                  </p>
                  <p>
                    <strong>Impacto:</strong> {project.impact}
                  </p>
                </div>

                <button className="mt-4 border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
                  VER ESTUDO COMPLETO →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
