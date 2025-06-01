
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Home, 
  Building, 
  Wrench, 
  ShieldCheck, 
  Lightbulb,
  Plug,
  Settings,
  AlertTriangle
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Instalações Residenciais",
      description: "Instalação completa de sistemas elétricos para residências, incluindo quadros, tomadas, interruptores e iluminação.",
      features: ["Projeto elétrico", "Instalação de quadros", "Pontos de luz", "Tomadas e interruptores"]
    },
    {
      icon: Building,
      title: "Instalações Comerciais",
      description: "Soluções elétricas para estabelecimentos comerciais com foco em segurança e eficiência energética.",
      features: ["Sistemas trifásicos", "Iluminação comercial", "Quadros de distribuição", "Automação"]
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção para evitar problemas e garantir o funcionamento seguro dos sistemas elétricos.",
      features: ["Inspeção de quadros", "Teste de disjuntores", "Verificação de aterramento", "Relatórios técnicos"]
    },
    {
      icon: AlertTriangle,
      title: "Reparos de Emergência",
      description: "Atendimento rápido para situações de emergência elétrica, disponível 24 horas por dia.",
      features: ["Atendimento 24h", "Diagnóstico rápido", "Reparo imediato", "Segurança garantida"]
    },
    {
      icon: Lightbulb,
      title: "Iluminação LED",
      description: "Modernização de sistemas de iluminação com tecnologia LED para economia de energia.",
      features: ["Projeto luminotécnico", "Instalação de LEDs", "Economia de energia", "Maior durabilidade"]
    },
    {
      icon: ShieldCheck,
      title: "Laudos e Certificações",
      description: "Emissão de laudos técnicos e certificações para adequação às normas de segurança.",
      features: ["Laudo técnico", "ART - Anotação de Responsabilidade", "Certificação ABNT", "Documentação completa"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Elétricas <span className="text-primary-500">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços elétricos com qualidade profissional, 
            segurança e garantia em todos os trabalhos realizados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa de um Orçamento?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para receber um orçamento personalizado e sem compromisso. 
              Estamos prontos para atender suas necessidades elétricas.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
