'use client';

export default function Services() {
  const services = [
    {
      title: "Site Institucional Estratégico",
      description:
        "Estrutura digital sólida para posicionar sua empresa com clareza, autoridade e profissionalismo."
    },
    {
      title: "Landing Pages de Conversão",
      description:
        "Páginas orientadas à ação, projetadas para transformar visitantes em contatos qualificados."
    },
    {
      title: "Evolução e Otimização Contínua",
      description:
        "Acompanhamento estratégico para melhorar performance e adaptar sua presença digital ao crescimento do negócio."
    }
  ];

  return (
    <section id="servicos" className="bg-[#f7f7f7] py-28 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Cabeçalho */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-600 mb-6">
            SERVIÇOS
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Especialização em estrutura digital
            para pequenas empresas.
          </h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service) => (
            <div
              key={service.title}
              className="border border-neutral-200 p-8 bg-white hover:border-violet-600 transition duration-300"
            >
              <div className="w-10 h-[2px] bg-violet-600 mb-6"></div>

              <h4 className="text-xl font-semibold text-black mb-4">
                {service.title}
              </h4>

              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
