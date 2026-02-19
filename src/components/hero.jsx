"use client";
import { motion } from "motion/react"

const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
}

export default function Hero() {
    return (
      <section id="inicio" 
      className="bg-[#ebebeb] object-contain relative overflow-hidden min-h-screen flex justify-center items-center"
      >
        <div className="container mx-auto z-20">
            <article className='grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-center'>
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <motion.h1 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold (800) tracking-tight text-black leading-tight font-sans">
                        Construímos presença digital que gera <span className="text-violet-600">resultado real.</span> 
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }} className="text-base sm:text-lg lg:text-xl mt-4 inline-block leading-relaxed
 font-normal text-black font-sans">
                        Estratégia, design e performance integrados para transformar marcas em referências no seu mercado.
                    </motion.p>

                    <div className=' justify-center'>
                        <motion.button initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => scrollToSection("#about")}
                        transition={{ duration: 1, delay: 0.3 }} className='mt-16 text-sm text-black tracking-wide hover:text-violet-600 animate-bounce transition'>
                            Ver como trabalhamos ↓ 
                        </motion.button>
                    </div>
                    
                </div>

                

            </article>
            
        </div>
        
      </section>
    );
}
  