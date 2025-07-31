"use client"

import Image from 'next/image';
import Logo from '../assets/THEGOAT.png';
import {useState} from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {nome: 'Inicio', href: '#inicio'},
    {nome: 'Sobre', href: '#about'},
    {nome: 'Serviços', href: '#servicos'},
    {nome: 'Portfólio', href: '#portfolio'},
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setIsMenuOpen(false);
    }
  }
  return (
    <header className="bg-transparent fixed top-0 left-0 z-30 flex justify-between items-center w-full h-16 px-6 border-b border-black backdrop-blur-md ">
      <Image 
      src={Logo}
      alt='logotipo'
      className='object-contain w-32 h-auto'
      />

      <nav className='hidden md:flex items-center space-x-8'>
        {menuItems.map((item) => (
          <button
          key={item.nome}
          onClick={() => scrollToSection(item.href)}
          className=' pointer text-sm text-[#E7F2E9] hover:underline font-light'
          >
            {item.nome}
          </button>
        ))}

        <button onClick={() => scrollToSection("#cta")} className=" pointer w-24 h-10 rounded-md bg-gradient-to-r from-purple-600 to-blue-400 text-[#E7F2E9]">Contato</button>
      </nav>

      
    </header>
  );
}

export default Header;
  