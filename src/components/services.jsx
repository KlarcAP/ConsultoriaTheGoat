import Image from 'next/image';
import blacksmoke from "../assets/black-smoke.jpg";

export default function Services() {
    const services = [
      {
        title: "BRANDING",
        description: "Construção de identidade visual poderosa que diferencia sua marca",
        tags: ["Identidade", "Posicionamento"]
      },
      {
        title: "DESIGN",
        description: "Criação de símbolos memoráveis que comunicam sua essência",
        tags: ["Logo", "Marca"]
      },
      {
        title: "DESENVOLVIMENTO WEB",
        description: "Sites de alto desempenho otimizados para conversão",
        tags: ["Sites", "E-commerce"]
      },
      {
        title: "SOCIAL MEDIA",
        description: "Conteúdo visual que engaja e domina algoritmos",
        tags: ["Instagram", "LinkedIn"]
      },
      {
        title: "EDIÇÃO DE VIDEOS",
        description: "Conteúdo audiovisual cativante para redes sociais",
        tags: ["Reels", "Shorts"]
      },
    ];
  
    return(
        <section id="servicos" className="relative overflow-hidden min-h-screen flex justify-center items-center py-16 ">

          <Image
            src={blacksmoke}
            alt='black-smoke'
            fill
            priority
            className='object-cover inset-0 absolute brightness-50 z-0'
          />
          <div className="container mx-auto z-20 px-4">
                <div className="text-left mb-20">
                    <h2 className="text-base text-purple-600 font-mono">NOSSOS SERVIÇOS</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
                        Ferramentas para Transformar sua <span className="text-purple-500">Marca em Lenda</span>
                    </h3>
                </div>
                
                <div className="grid grid-cols-1">
                    {services.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-transparent border-b w-full h-56-center border-gray-200  transition-all duration-300 hover:border-purple-500 hover:bg-purple-500 hover:text-black "
                    >
                        <div className="flex items-center mr-15">
                        
                            <ul>
                              <li className="text-5xl lg:text-7xl font-extrabold text-white hover:text-black">{service.title}</li>
                            </ul>
                        </div>
                        
                    </div>
                    ))}
                </div>
            </div>    
        </section>
    )
  }