import Image from "next/image";
import Conexoes from "../assets/conexoes.png";

export default function About() {
  return (
    <section id="about" className="bg-[#100F10] relative overflow-hidden min-h-screen flex items-center">
        
        <div className="container mx-auto">
            
            <article className="grid md:grid-cols-2 gap-12 items-center">

                <div className="hidden md:block z-10">
                    
                    <Image
                    src={Conexoes}
                    alt="Bode estiloso com óculos"
                    className="object-contain w-5xl z-10"
                    priority
                    />
                </div>

                {/* Texto de apresentação */}
                <div className="w-full md:px-6 text-white space-y-6 z-10 px-4">
                    <h2 className="h-0 text-base text-purple-600 font-mono">// SOBRE NÓS</h2>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white ">
                    Na <span className="text-purple-500">The GOAT</span>, acreditamos que ser o "maior de todos os tempos" vai além de entregar resultados.
                    </h1>

                    <p className="text-base font-light leading-relaxed text-justify indent-8">
                    Somos uma agência digital jovem, mas com atitude de veterano. Unimos design estratégico, tecnologia inteligente e visão de futuro para transformar ideias em experiências memoráveis. Do planejamento à execução, cada projeto que passa por aqui carrega nossa assinatura: autenticidade, excelência e personalidade.
                    </p>

                    <p className="text-base font-light leading-relaxed text-justify indent-8">
                     Do branding à performance, da identidade visual às campanhas de tráfego pago — estamos aqui para elevar a sua marca ao nível <span className="font-bold">GOAT</span>.
                    </p>
                </div>
            </article>
        </div>

        <div className="absolute top-20 -right-20 w-96 h-96 z-0 bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 z-0 bg-purple-700/30 rounded-full blur-3xl"></div>
    </section>
  );
}
