export default function About() {
  return (
    <section
      id="about"
      className="bg-white relative py-24 px-6 lg:px-0"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Headline principal */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-sm tracking-[0.3em] uppercase text-violet-600">
            SOBRE
          </h2>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-black">
            Presença digital não é projeto.
            <br />
            É{" "}
            <span className="text-violet-600">
              construção contínua.
            </span>
          </h1>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Muitas empresas criam um site apenas para “estar online”.
            Mas estar online não é o mesmo que estar bem posicionado.
            Sem estratégia, clareza e acompanhamento, a presença digital
            vira apenas um cartão de visita caro.
          </p>
        </div>

        {/* Método */}
        <div className="mt-24 grid md:grid-cols-3 gap-16">

          {/* Item 01 */}
          <div className="space-y-4">
            <span className="text-5xl font-bold text-violet-100 select-none">
              01
            </span>

            <h3 className="text-xl font-semibold text-black">
              Diagnóstico estratégico
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Entendimento profundo do seu negócio, público e objetivos
              antes de qualquer decisão visual ou técnica.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-4">
            <span className="text-5xl font-bold text-violet-100 select-none">
              02
            </span>

            <h3 className="text-xl font-semibold text-black">
              Estrutura orientada à conversão
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Organização clara da informação, hierarquia visual estratégica
              e jornada pensada para transformar visitantes em contatos.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-4">
            <span className="text-5xl font-bold text-violet-100 select-none">
              03
            </span>

            <h3 className="text-xl font-semibold text-black">
              Evolução contínua
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Ajustes, melhorias e direcionamento conforme sua empresa
              cresce e suas metas evoluem.
            </p>
          </div>

        </div>

        {/* Encerramento */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-2xl font-semibold text-black leading-relaxed">
            Crescimento digital não acontece por acaso.
            <br />
            Ele é construído, ajustado e aprimorado ao longo do tempo.
          </p>
        </div>

      </div>
    </section>
  );
}
