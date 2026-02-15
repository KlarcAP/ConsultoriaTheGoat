import Image from 'next/image';
import Logo from '../assets/logo-footer.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Coluna 1 - Identidade */}
        <div className="space-y-6">
          <Image 
            src={Logo}
            alt="Logotipo The Goat"
            className="w-36 h-auto"
          />
          <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
            Consultoria estratégica digital focada em posicionamento,
            clareza de proposta e geração consistente de oportunidades.
          </p>
        </div>

        {/* Coluna 2 - Navegação Estratégica */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-4 tracking-wide">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-purple-600 transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-purple-600 transition">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600 transition">Estudos de Caso</a></li>
            <li><a href="/diagnostico" className="hover:text-purple-600 transition">Diagnóstico Estratégico</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato Institucional */}
        <div>
          <h4 className="text-sm font-semibold text-black mb-4 tracking-wide">
            Contato
          </h4>
          <p className="text-sm text-gray-600">
            Atendimento sob agendamento.
          </p>

          <div className="flex gap-4 text-xl mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Rodapé Inferior */}
      <div className="text-center text-xs text-gray-500 mt-12 pt-6 border-t border-gray-200">
        © {new Date().getFullYear()} The Goat Consultoria Digital.
        <span className="mx-2">|</span>
        <a href="/privacidade" className="hover:text-purple-600 transition">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}
