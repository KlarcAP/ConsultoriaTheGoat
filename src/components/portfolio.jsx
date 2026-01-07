"use client";

import teennager from "../assets/teenager-outdoors-using-smartphone.jpg";
import laptop from "../assets/close-up-hands-holding-laptop.jpg";
import placa from "../assets/placa.jpg";
import giftcard from "../assets/gift-card.jpg";
import ecobag from "../assets/ecobag.jpg"
import Image from "next/image";
import { motion } from "motion/react";

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
                    <h2 className="text-3xl md:text-4xl font-bold text-black mt-4">Cada projeto, uma nova <span className="text-purple-700">história de sucesso</span></h2>
                </div> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                        key={index}
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            relative cursor-pointer will-change-transform
                            transition-shadow duration-200 ease-out
                            hover:shadow-[0_1.125rem_2.5rem_rgba(0,0,0,0.35)]
                            rounded-2xl
                        "
                        >
                        <div
                            className="
                            absolute inset-0 overflow-hidden
                            border border-white/30 rounded-2xl
                            [transform-style:preserve-3d]
                            [transform-origin:50%_50%]
                            transition-[transform] duration-150 ease-out
                            "
                            style={{
                            transform:
                                "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--s,1))"
                            }}
                        />

                        <div className="relative z-10 p-6">
                            <Image
                            src={project.capa}
                            alt="imagem do projeto"
                            width={600}
                            height={400}
                            placeholder="blur"
                            className="object-cover rounded-xl"
                            />

                            <h3 className="text-xl font-bold mt-5 text-black">
                            {project.title}
                            </h3>

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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}