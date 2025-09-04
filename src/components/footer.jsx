import Image from 'next/image';
import Logo from '../assets/logo-footer.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#ebebeb] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between content-center items-start gap-8 px-6">
        
        {/* Coluna Esquerda */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <Image 
            src={Logo}
            alt="Logotipo The Goat"
            className="w-40 h-auto"
          />
          <p className="text-black text-sm md:text-base leading-relaxed max-w-md">
            Criamos estratégias que fortalecem a sua marca e potencializam seus resultados. 
            Estamos prontos para ser <strong>o maior de todos os tempos</strong> ao seu lado.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purple-600 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-black hover:text-purple-600 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full md:w-1/2 align-center">
          <ul className="text-black space-y-2 text-sm md:text-base">
            <li><a href="#" className="hover:text-purple-600 transition">Início</a></li>
            <li><a href="#sobre" className="hover:text-purple-600 transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-purple-600 transition">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600 transition">Portfólio</a></li>
            <li><a href="#contato" className="hover:text-purple-600 transition">Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="text-center text-xs text-purple-500 mt-8 border-t border-purple-300 pt-4">
        © {new Date().getFullYear()} The Goat. Todos os direitos reservados.
      </div>
    </footer>
  );
}
