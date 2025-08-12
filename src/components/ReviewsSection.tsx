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
import type { Review } from '@/pages/api/google-reviews'; // Importando o tipo que criamos

// Componente para renderizar as estrelas de avaliação (sem mudanças)
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
                <p className="text-lg text-red-500">Não foi possível carregar as avaliações no momento.</p>
            </div>
        </section>
    );
  }

  // Se tudo deu certo, renderize a seção completa
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          {/* ... (código do header igual ao anterior) ... */}
        </div>

        {/* Carrossel de Avaliações */}
        <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col justify-between border-0 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-start text-left">
                    <StarRating rating={review.rating} />
                    <p className="text-gray-700 my-4 flex-grow text-sm leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={review.profile_photo_url}
                        alt={`Foto de ${review.author_name}`}
                        className="w-12 h-12 rounded-full bg-gray-200 mr-4"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{review.author_name}</p>
                        <p className="text-xs text-gray-500">{review.relative_time_description}</p>
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
            {/* ... (código do botão igual ao anterior) ... */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
