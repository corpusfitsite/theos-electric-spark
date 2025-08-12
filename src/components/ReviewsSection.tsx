// src/components/ReviewsSection.tsx

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, MessageSquareQuote } from 'lucide-react';
// Import completo, apontando para o tipo que definimos no arquivo da API
import type { Review } from '@/pages/api';

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
  // Estados para guardar as avaliações, o status de carregamento e erros
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect será executado quando o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchReviews = async () => {
      try {
        // Chamando a NOSSA API route, não a do Google diretamente
        const response = await fetch('/api/google-reviews');
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados do servidor.');
        }
        const data: Review[] = await response.json();
        // A API do Google pode retornar mais de 5, então pegamos as 5 mais recentes
        setReviews(data.slice(0, 5));
      } catch (err: any) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Se estiver carregando, mostre uma mensagem
  if (isLoading) {
    return (
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">Carregando avaliações...</p>
        </div>
      </section>
    );
  }

  // Se der erro, mostre uma mensagem de erro
  if (error) {
    return (
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-red-500">
            Não foi possível carregar as avaliações no momento.
          </p>
        </div>
      </section>
    );
  }

  // Se tudo deu certo, renderize a seção completa
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
          {/* Mostra a nota média e o link apenas se houver avaliações carregadas */}
          {reviews.length > 0 && (
            <div className="flex justify-center items-center gap-3">
              <span className="text-2xl font-bold text-gray-800">5.0</span>
              <StarRating rating={5} />
              <a
                href="https://www.google.com/search?hl=pt-BR&authuser=0&sxsrf=AE3TifPTCGclzVYXsIoYCBlRErrYITgVaA%3A1752512834484&kgmid=%2Fg%2F11ldvqzqg5&q=THEOBALDO%20EL%C3%89TRICISTA%20BOA%20VIAGEM%20RECIFE&shndl=30&shem=lcuae%2Clstuoe3%2Csdl1p%2Cuaasie&kgs=c3e7c3471ba5f51e#lrd=0x7ab18a1d63d6b7b:0x5135111b157422b5,1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                (Baseado em 5+ avaliações)
              </a>
            </div>
          )}
        </div>

        {/* Carrossel de Avaliações */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="h-full flex flex-col justify-between border-0 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-start text-left">
                    <StarRating rating={review.rating} />
                    <p className="text-gray-700 my-4 flex-grow text-sm leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={review.profile_photo_url}
                        alt={`Foto de ${review.author_name}`}
                        className="w-12 h-12 rounded-full bg-gray-200 mr-4"
                      />
                      <div>
                        <p className="font-bold text-gray-900">
                          {review.author_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {review.relative_time_description}
                        </p>
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
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
