
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Zap, Home, Building } from 'lucide-react';

const GallerySection = () => {
  const projects = [
    {
      category: "Residencial",
      title: "Instalação Elétrica Completa",
      description: "Projeto residencial com modernização completa do sistema elétrico",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      icon: Home
    },
    {
      category: "Comercial",
      title: "Quadro de Distribuição",
      description: "Instalação de quadro elétrico para estabelecimento comercial",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      icon: Building
    },
    {
      category: "Manutenção",
      title: "Manutenção Preventiva",
      description: "Serviço de manutenção e teste de sistemas elétricos",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      icon: Zap
    },
    {
      category: "Automação",
      title: "Sistema de Automação",
      description: "Implementação de sistema automatizado para residência",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      icon: Zap
    },
    {
      category: "Iluminação",
      title: "Projeto de Iluminação LED",
      description: "Modernização com sistema de iluminação LED eficiente",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      icon: Home
    },
    {
      category: "Infraestrutura",
      title: "Cabeamento Estruturado",
      description: "Instalação de infraestrutura elétrica e de dados",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      icon: Building
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Nossos Projetos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeria de <span className="text-primary-500">Trabalhos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos projetos realizados com qualidade e excelência. 
            Cada trabalho é executado com atenção aos detalhes e total segurança.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary-500 p-2 rounded-full">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gostou dos Nossos Trabalhos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido com base nas necessidades específicas 
              do cliente. Entre em contato para discutirmos seu próximo projeto.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
