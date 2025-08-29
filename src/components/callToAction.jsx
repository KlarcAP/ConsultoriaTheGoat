export default function CallToFuntionc(){
    return(
        <section id="cta" className="bg-[#ebebeb] relative overflow-hidden min-h-screen flex justify-center items-center px-5">
            <div className="bg-[#100F10] object-cover rounded-[5rem] content-center justify-center text-center w-full h-100">
                <h1 className="text-5xl md:text-7xl font-medium text-slate-200 leading-tight">
                    Vamos tirar <span className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">sua ideia</span> do papel? 🚀
                </h1>
                <p className="text-base text-slate-200">Nos conte o que você tem em mente, nós cuidamos da parte técnica e entregamos com qualidade.</p>
                <button className="pointer w-58 h-10 mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 text-[20px] text-[#E7F2E9]">
                    <a href="https://wa.me/5511916141235?text=Olá!%20Quero%20saber%20sobre%20seus%20produtos.">Agendar reunião</a>
                </button>
            </div>
        </section>
    )
}