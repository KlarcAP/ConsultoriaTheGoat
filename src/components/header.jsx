"use client"

import Image from 'next/image';
import Logo from '../components/logo';
import {useState} from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {nome: 'INICIO', href: '#inicio'},
    {nome: 'SOBRE', href: '#about'},
    {nome: 'SERVIÇOS', href: '#servicos'},
    {nome: 'PORTFÓLIO', href: '#portfolio'},
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setIsMenuOpen(false);
    }
  }
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {menuItems.map((item) => (
            <button
              key={item.nome}
              onClick={() => scrollToSection(item.href)}
              className="hover:text-black transition-colors"
            >
              {item.nome}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("#cta")}
          className=" bg-violet-600 hover:bg-violet-700 hidden md:inline-flex items-center px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition"
        >
          Agendar conversa
        </button>

      </div>
    </header>

  );
}

export default Header;
  