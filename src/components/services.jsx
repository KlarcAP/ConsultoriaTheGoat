export default function Services() {
    const services = [
      {
        title: "Branding Estratégico",
        description: "Construção de identidade visual poderosa que diferencia sua marca",
        tags: ["Identidade", "Posicionamento"]
      },
      {
        title: "Design de Logotipo",
        description: "Criação de símbolos memoráveis que comunicam sua essência",
        tags: ["Logo", "Marca"]
      },
      {
        title: "Desenvolvimento Web",
        description: "Sites de alto desempenho otimizados para conversão",
        tags: ["Sites", "E-commerce"]
      },
      {
        title: "Criação de Posts",
        description: "Conteúdo visual que engaja e domina algoritmos",
        tags: ["Instagram", "LinkedIn"]
      },
      {
        title: "Edição de Vídeo",
        description: "Conteúdo audiovisual cativante para redes sociais",
        tags: ["Reels", "Shorts"]
      },
      {
        title: "Pacote Integrado",
        description: "Solução completa: Branding + Site + Conteúdo",
        tags: ["Completo", "Economia"]
      }
    ];
  
    return(
        <section className="bg-[#100F10] relative overflow-hidden min-h-screen flex justify-center items-center py-16">
            <div className="container mx-auto px-4">
                <div className="text-left mb-20">
                    <h2 className="text-base text-purple-600 font-mono">// NOSSOS SERVIÇOS</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
                        Ferramentas para Transformar sua <span className="text-purple-500">Marca em Lenda</span>
                    </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-transparent border w-full h-56-center border-gray-800 rounded-3xl p-6 transition-all duration-300 hover:border-purple-500 hover:bg-gradient-to-b from-gray-900/30 to-[#100F10]"
                    >
                        <div className="flex items-center mr-15">
                            <div className="bg-purple-500/10 p-2 rounded-lg mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                        
                        <p className="text-gray-400 mr-8 mb-5">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-2">
                        {service.tags.map((tag, tagIndex) => (
                            <span 
                            key={tagIndex}
                            className="bg-purple-900/30 text-purple-400 text-xs font-medium px-3 py-1 rounded-full"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>
                        
                        <a 
                        href="#" 
                        className="inline-flex items-center text-sm font-medium text-purple-500 hover:text-purple-300 group"
                        >
                        Saiba mais
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 -left-20 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
        </section>
    )
  }