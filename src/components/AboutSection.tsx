
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "100+",
      label: "Clientes Atendidos",
      description: "Clientes satisfeitos com nossos serviços"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Anos de Experiência",
      description: "Experiência sólida no mercado elétrico"
    },
    {
      icon: Award,
      number: "100%",
      label: "Trabalhos Garantidos",
      description: "Garantia em todos os serviços prestados"
    },
    {
      icon: Shield,
      number: "24h",
      label: "Atendimento",
      description: "Disponível para emergências"
    }
  ];

  const qualities = [
    "Certificação profissional atualizada",
    "Uso de materiais de qualidade",
    "Cumprimento rigoroso das normas NBR",
    "Pontualidade e compromisso",
    "Orçamentos transparentes",
    "Atendimento personalizado"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Sobre Nós
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça <span className="text-primary-500">Theobaldo Cordeiro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissional qualificado com anos de experiência oferecendo soluções 
            elétricas seguras e eficientes para você e sua família.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Experiência e Qualificação Profissional
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sou Theobaldo Cordeiro, eletricista profissional com mais de 5 anos de experiência 
                no mercado. Especializado em instalações residenciais e comerciais, sempre priorizando 
                a segurança e qualidade em cada projeto.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Mantenho-me sempre atualizado com as normas técnicas e novas tecnologias do setor, 
                garantindo que meus clientes recebam o melhor serviço possível com total segurança 
                e eficiência.
              </p>
            </div>

            {/* Qualities List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Nossos Diferenciais:</h4>
              <div className="grid grid-cols-1 gap-3">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{quality}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary-500 mb-2">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-gray-900 mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary-500 to-primary-600 border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
                <p className="text-xl text-primary-100 leading-relaxed">
                  "Oferecer serviços elétricos de excelência, priorizando sempre a segurança, 
                  qualidade e satisfação dos nossos clientes. Nosso compromisso é proporcionar 
                  soluções elétricas confiáveis e duradouras, contribuindo para o bem-estar e 
                  tranquilidade de cada família e empresa atendida."
                </p>
                <div className="mt-8 text-right">
                  <div className="font-semibold text-accent-300">- Theobaldo Cordeiro</div>
                  <div className="text-primary-200">TH Eletricista</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
