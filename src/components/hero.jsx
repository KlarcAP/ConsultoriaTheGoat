import Image from 'next/image';
import objetoFlutuante from "../assets/objeto-hero.png";
import nature from "../assets/jeremy-bishop.jpg";

export default function Hero() {
    return (
      <section id="inicio" 
      className="object-contain relative overflow-hidden min-h-screen flex justify-center items-center"
      >
        <Image 
        src={nature}
        alt='nature'
        fill
        priority
        className="brightness-50 object-cover absolute inset-0 z-0"
        />

        <div className="container mx-auto z-20">
            <article className='grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-center'>
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-200 leading-tight font-roboto-condensed">
                        SUA {" "}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">
                            MARCA
                        </span>
                        , MAIS FORTE NO DIGITAL.
                    </h1>
                    <p className="mt-4 inline-block text-base text-gray-200">
                        Criamos marcas e experiências digitais que colocam o seu negócio no topo. Sem enrolação, só resultado.
                    </p>

                    <div className=' justify-center'>
                        <button className=' bg-gradient-to-r rounded-full from-purple-600 to-blue-400 text-[#E7F2E9] w-32 h-10 mt-8 inline-block'>
                            Descubra mais
                        </button>
                    </div>
                    
                </div>

                

            </article>
            
        </div>
        
      </section>
    );
}
  