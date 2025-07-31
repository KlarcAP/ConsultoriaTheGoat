import SiteEladioo from "../assets/dreladio.png";
import Risoflow from "../assets/risoflow.png";
import Beconect from "../assets/beconnect.png";
import Image from "next/image";

const projects = [
    {
        capa: SiteEladioo,
        title: "Site Institucional – Dr. Eládio Vitório (Advogado Criminalista)",
        description: "Desenvolvimento de site institucional para o Dr. Eládio Vitório, advogado especialista em Direito Penal, com mais de 15 anos de experiência na defesa de liberdades e direitos fundamentais. O projeto foi criado com foco em autoridade, clareza na comunicação e facilidade de contato.",
    },
    {
        capa: Beconect,
        title: "Beconect",
        description: "Plataforma de conexão entre empresas e prestadores de serviços, focada em facilitar a contratação e a gestão de profissionais. Desenvolvida com foco em usabilidade, integração de perfis, avaliações e painel de controle para clientes e prestadores.",
    },
    {
        capa: Risoflow,
        title: "Risoflow",
        description: "Sistema de gestão de fluxos internos para clínicas de radiologia e diagnóstico por imagem. Automatiza processos como agendamentos, laudos, e integração com PACS. Focado em eficiência operacional e compliance com normas de saúde.",
    },
]

export default function Portfolio() {
    return(
        <section id="portfolio" className="bg-[#100F10] relative overflow-hidden min-h-screen flex justify-center items-center py-16">
            <div className="container mx-auto px-4">
            
                <div className="text-left mb-20">
                    <h1 className="text-base text-purple-600 font-mono">// MELHORES PROJETOS</h1>
                </div> 

                <div className="container gap-8 grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-transparent border w-full h-56-center border-gray-800 rounded-3xl p-6    transition-all duration-300 hover:border-purple-500 hover:bg-gradient-to-b from-gray-900/30 to-[#100F10]">
                            
                            <Image 
                                src={project.capa}
                                alt="imagem do projeto"
                                className="object-contain rounded-2xl w-5xl z-10"
                                priority
                            />

                            <div className="flex items-center mr-15">
                                <h3 className="text-xl font-bold mt-5 text-white">{project.title}</h3>
                            </div>
                            
                            <p className="text-gray-400 text-justify mr-8 mb-5">{project.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute top-10 -left-20 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
        </section>
    )
}