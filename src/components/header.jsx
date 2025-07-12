import Image from 'next/image';
import Logo from '../assets/THEGOAT.png';

export default function Header() {
    return (
      <header className="bg-transparent fixed top-0 left-0 z-20 flex justify-evenly items-center w-full h-16 px-6 border-b border-black backdrop-blur-md ">
        <Image 
        src={Logo}
        alt='logotipo'
        className='object-contain w-32 h-auto'
        />
  
        <nav>
          <ul className="flex gap-6">
            <li><a href="#inicio" className="text-[#E7F2E9] hover:underline font-light">Início</a></li>
            <li><a href="#sobre" className="text-[#E7F2E9] hover:underline font-light">Sobre</a></li>
            <li><a href="#servicos" className="text-[#E7F2E9] hover:underline font-light">Serviços</a></li>
            <li><a href="#portfolio" className="text-[#E7F2E9] hover:underline font-light">Portfólio</a></li>
          </ul>
        </nav>
  
        <button className="w-24 h-10 rounded-md bg-gradient-to-r from-purple-600 to-blue-400 text-[#E7F2E9]">Contato</button>
      </header>
    );
  }
  