"use client"

import Image from 'next/image';
import Logo from '../assets/THEGOAT.png';
import {useState} from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {nome: 'INICIO', href: '#inicio'},
    {nome: 'SOBRE', href: '#about'},
    {nome: 'SERVIÇOS', href: '#servicos'},
    {nome: 'PORTFÓLIO', href: '#portfolio'},
    {nome: 'BLOG', href: '#portfolio'},
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setIsMenuOpen(false);
    }
  }
  return (
    <header className="bg-transparent fixed top-0 left-0 z-30 flex justify-between items-center w-full h-16 px-6   ">
      <Image 
      src={Logo}
      alt='logotipo'
      className='object-contain w-32 h-auto'
      />

      <nav className='border border-white w-auto rounded-full h-auto justify-evenly hidden md:flex items-center space-x-8 backdrop-blur-md'>
        {menuItems.map((item) => (
          <button
          key={item.nome}
          onClick={() => scrollToSection(item.href)}
          className=' pointer text-sm text-[#E7F2E9] mx-4 my-2 hover:underline font-light'
          >
            {item.nome}
          </button>
        ))}

      </nav>

      <button onClick={() => scrollToSection("#cta")} className=" pointer text-sm w-24 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 text-[#E7F2E9]">CONTATO</button>

      
    </header>
  );
}

export default Header;
  