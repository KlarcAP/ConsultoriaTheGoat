import teennager from "../assets/teenager-outdoors-using-smartphone.jpg";
import laptop from "../assets/close-up-hands-holding-laptop.jpg";
import placa from "../assets/placa.jpg";
import giftcard from "../assets/gift-card.jpg";
import ecobag from "../assets/ecobag.jpg"
import Image from "next/image";

const projects = [
    {
        capa: laptop,
        title: "Beconnect",
        tags: ["Sistema", "Desenvolvimento Web"],
    },
    {
        capa: teennager,
        title: "PetWalk",
        tags: ["Desenvolvimento Mobile", "App", "UI/UX"],
    },
    {
        capa: placa,
        title: "Risoflow",
        tags: [],
    },
    {
        capa: giftcard,
        title: "Risoflow",
        tags: [],
    },
]

export default function Portfolio() {
    return(
        <section id="portfolio" className="bg-[#ebebeb] relative overflow-hidden min-h-screen flex justify-center items-center py-16">
            <div className="container mx-auto px-4">
            
                <div className="text-center mb-20">
                    <h1 className="text-md text-purple-600 font-mono">MELHORES PROJETOS</h1>
                </div> 

                <div className="container gap-8 grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-transparent w-full h-56-center rounded-3xl p-6 transition-all duration-300">
                            
                            <Image 
                                src={project.capa}
                                alt="imagem do projeto"
                                className="object-contain rounded-2xl z-10"
                                priority
                            />

                            <div className="flex items-center mr-15">
                                <h3 className="text-xl font-bold mt-5 text-black">{project.title}</h3>
                            </div>

                            {project.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-purple-100 border border-black text-purple-700 text-sm font-medium px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}