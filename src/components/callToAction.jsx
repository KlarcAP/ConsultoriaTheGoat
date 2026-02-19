export default function CallToFunction() {
  return (
    <section
      id="cta"
      className="bg-white relative py-32 px-6 flex justify-center items-center"
    >
      <div className="bg-[#100F10] rounded-[4rem] w-full max-w-5xl px-10 py-24 text-center">

        <p className="text-sm text-purple-500 font-mono tracking-wide">
          PRÓXIMO PASSO
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold text-slate-100 leading-tight mt-6">
          Se sua empresa está pronta para crescer com{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">
            estratégia digital estruturada
          </span>,
          vamos conversar.
        </h2>

        <p className="text-lg text-slate-300 mt-8 max-w-2xl mx-auto">
          Trabalhamos com negócios que enxergam o digital como ativo estratégico,
          não como custo operacional.
        </p>

        <div className="mt-12">
          <a
            href="https://wa.me/5511916141235?text=Olá!%20Analisei%20seu%20trabalho%20e%20tenho%20interesse%20em%20passar%20por%20um%20diagnóstico%20estratégico%20para%20avaliar%20oportunidades%20digitais%20no%20meu%20negócio."
            className="inline-flex items-center justify-center rounded-full px-12 py-4 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-400 text-white hover:opacity-90 transition"
          >
            Solicitar diagnóstico estratégico →
          </a>
        </div>

      </div>
    </section>
  );
}
