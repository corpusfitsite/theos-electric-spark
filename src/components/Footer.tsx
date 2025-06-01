
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TH Eletricista</h3>
                <p className="text-sm text-gray-400">Theobaldo Cordeiro</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Eletricista profissional com mais de 5 anos de experiência, 
              oferecendo serviços elétricos de qualidade e segurança para 
              residências e comércios.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center text-xs">
                    ⭐
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">100+ clientes satisfeitos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Serviços', href: '#services' },
                { name: 'Sobre Nós', href: '#about' },
                { name: 'Galeria', href: '#gallery' },
                { name: 'Contato', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Nossos Serviços</h4>
            <ul className="space-y-3">
              {[
                'Instalações Residenciais',
                'Instalações Comerciais',
                'Manutenção Preventiva',
                'Reparos de Emergência',
                'Iluminação LED',
                'Laudos Técnicos'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="text-white font-medium">(11) 99999-9999</p>
                  <p className="text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="text-white font-medium">contato@theletricista.com</p>
                  <p className="text-sm text-gray-400">Resposta em até 2h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="text-white font-medium">São Paulo - SP</p>
                  <p className="text-sm text-gray-400">Região Metropolitana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <div>
                  <p className="text-white font-medium">Seg-Sex: 7h-18h</p>
                  <p className="text-sm text-gray-400">Emergência 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; {currentYear} TH Eletricista - Theobaldo Cordeiro. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Desenvolvido com ⚡ para oferecer a melhor experiência ao cliente.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm font-medium">
            🚨 Emergência Elétrica? Ligue agora: (11) 99999-9999 - Atendimento 24h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
