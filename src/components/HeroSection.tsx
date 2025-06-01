
import { Button } from '@/components/ui/button';
import { Zap, Shield, Clock, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Eletricista Profissional
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Serviços Elétricos de 
                <span className="text-primary-500"> Qualidade</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sou Theobaldo Cordeiro, eletricista com anos de experiência oferecendo 
                soluções elétricas seguras e eficientes para residências e comércios.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Trabalho Seguro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Pontualidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Qualidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Eficiência</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg"
                size="lg"
              >
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                className="border-primary-500 text-primary-500 hover:bg-primary-50 px-8 py-3 text-lg"
                size="lg"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">100+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <div className="absolute top-4 right-4">
                <Zap className="w-8 h-8 text-accent-400" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Theobaldo Cordeiro</h3>
                <p className="text-primary-100">
                  Eletricista qualificado com especialização em instalações 
                  residenciais e comerciais. Comprometido com a segurança 
                  e qualidade em cada projeto.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Certificado Profissional</div>
                    <div className="text-sm text-primary-200">Qualificação Técnica</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
