import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, MessageSquareQuote } from 'lucide-react';

// Você pode adicionar ou remover avaliações aqui.
// Usei algumas do seu perfil do Google como exemplo.
const reviews = [
  {
    author: "Andre Lira",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXqxxxx", // Substitua por URLs de avatar ou use iniciais
    rating: 5,
    text: "Excelente profissional! Pontual, atencioso e resolveu o problema do meu chuveiro elétrico com rapidez e eficiência. Recomendo muito!",
    time: "2 meses atrás"
  },
  {
    author: "Renata Lacerda",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWxxxxx",
    rating: 5,
    text: "Serviço impecável! Theobaldo foi muito profissional e cuidadoso ao instalar as novas luminárias do meu apartamento. O resultado ficou incrível.",
    time: "4 meses atrás"
  },
  {
    author: "Carlos Silva",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjYxxxxx",
    rating: 5,
    text: "Contratei para um reparo de emergência e fui atendido prontamente. Preço justo e trabalho de alta qualidade. Virou meu eletricista de confiança.",
    time: "1 mês atrás"
  },
    {
    author: "Juliana Mendes",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjZxxxxx",
    rating: 5,
    text: "Profissional extremamente competente e honesto. Fez a troca do quadro de disjuntores da minha casa e explicou cada detalhe do serviço.",
    time: "3 semanas atrás"
  },
];

// Componente para renderizar as estrelas de avaliação
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-16 animate-fade-in">
           <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquareQuote className="w-4 h-4 mr-2" />
            Avaliações de Clientes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-primary-500">clientes dizem</span>
          </h2>
          <div className="flex justify-center items-center gap-3">
            <span className="text-2xl font-bold text-gray-800">5.0</span>
            <StarRating rating={5} />
            <a 
              href="https://www.google.com/search?hl=pt-BR&authuser=0&sxsrf=AE3TifPTCGclzVYXsIoYCBlRErrYITgVaA%3A1752512834484&kgmid=%2Fg%2F11ldvqzqg5&q=THEOBALDO%20EL%C3%89TRICISTA%20BOA%20VIAGEM%20RECIFE&shndl=30&shem=lcuae%2Clstuoe3%2Csdl1p%2Cuaasie&kgs=c3e7c3471ba5f51e#lrd=0x7ab18a1d63d6b7b:0x5135111b157422b5,1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              (Baseado em {reviews.length}+ avaliações)
            </a>
          </div>
        </div>

        {/* Carrossel de Avaliações */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col justify-between border-0 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-start text-left">
                    <StarRating rating={review.rating} />
                    <p className="text-gray-700 my-4 flex-grow">"{review.text}"</p>
                    <div className="flex items-center mt-auto">
                        {/* Imagem de Avatar - idealmente, use URLs reais se tiver */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                           <span className="text-lg font-bold text-gray-600">{review.author.charAt(0)}</span>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{review.author}</p>
                            <p className="text-sm text-gray-500">{review.time}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        {/* Botão para ver mais no Google */}
         <div className="text-center mt-12">
           <a 
             href="https://www.google.com/search?hl=pt-BR&authuser=0&sxsrf=AE3TifPTCGclzVYXsIoYCBlRErrYITgVaA%3A1752512834484&kgmid=%2Fg%2F11ldvqzqg5&q=THEOBALDO%20EL%C3%89TRICISTA%20BOA%20VIAGEM%20RECIFE&shndl=30&shem=lcuae%2Clstuoe3%2Csdl1p%2Cuaasie&kgs=c3e7c3471ba5f51e#lrd=0x7ab18a1d63d6b7b:0x5135111b157422b5,1"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
             Ver mais avaliações no Google
           </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
