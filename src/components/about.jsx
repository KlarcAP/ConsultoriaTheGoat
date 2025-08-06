import Image from "next/image";
import Conexoes from "../assets/conexoes.png";

export default function About() {
  return (
    <section id="about" className="bg-[#ebebeb] relative overflow-hidden min-h-screen flex items-center">
        
        <div className="container mx-auto">
            <article className="flex flex-col items-center gap-12 ">

                <h2 className="h-0 text-base text-purple-600 font-mono"> SOBRE NÓS </h2>

                {/* Texto de apresentação */}
                <div className="w-3/3 justify-center md:px-6 text-white space-y-6 z-10 px-4">
                    
                    <h1 className="text-xl text-center font-roboto-condensed lg:text-5xl font-bold leading-tight text-black ">
                        Na <span className="text-purple-500">The GOAT</span>, ser o “maior de todos os tempos” é ir além dos números. É inspirar, conectar e transformar marcas em histórias de sucesso duradouras, criando valor que se multiplica e deixa um legado.
                    </h1>

                    
                </div>

                <button className=' bg-transparent border border-black rounded-full text-black h-10 w-50 text-sm justify-center'>
                    MAIS SOBRE A EMPRESA ●
                </button>
            </article>
        </div>
    </section>
  );
}
