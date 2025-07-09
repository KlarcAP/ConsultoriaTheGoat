import Image from 'next/image';
import objetoFlutuante from "../assets/objeto-hero.png";

export default function Hero() {
    return (
      <section className="bg-[#100F10] relative overflow-hidden min-h-screen flex justify-center items-center">
        <div className="container mx-auto py-16 px-4">
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                <div className="max-w-5xl mx-auto px-6 py-20 ">
                    <h1 className="text-5xl md:text-7xl font-medium text-slate-200 leading-tight">
                        Transformando desafios em{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">
                            Sucesso
                        </span>
                    </h1>
                    <p className="mt-4 inline-block text-base text-gray-200">
                        Criamos marcas e experiências digitais que colocam o seu negócio no topo. Sem enrolação, só resultado.
                    </p>
                    <button className='bg-gradient-to-r from-purple-600 to-blue-400 text-[#E7F2E9] w-32 h-10 rounded-md mt-4 inline-block'>
                        Descubra mais
                    </button>
                </div>

                <div className="hidden md:block h-full">
                    <Image 
                        src={objetoFlutuante}
                        alt=''
                        className='object-contain'
                    />
                </div>

            </article>
            
        </div>

      </section>
    );
}
  