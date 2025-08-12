// src/pages/api/google-reviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Definindo um tipo para as avaliações para melhor organização
export type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

type GoogleApiResponse = {
  result?: {
    reviews?: Review[];
  };
  status: string;
  error_message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // O Place ID do seu negócio
  const placeId = 'ChIJq4odY7JwxwcRVRM1EWES5Vt'; 
  // Sua chave de API, vinda do arquivo .env.local (seguro)
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'A chave da API do Google não está configurada.' });
  }

  // A URL da API do Google Places
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=pt_BR&key=${apiKey}`;

  try {
    const googleRes = await fetch(url);
    const data: GoogleApiResponse = await googleRes.json();

    if (data.status === 'OK' && data.result?.reviews) {
      // Se a resposta for bem-sucedida, envie as avaliações
      res.status(200).json(data.result.reviews);
    } else {
      // Se o Google retornar um erro
      throw new Error(data.error_message || `Erro no status da API do Google: ${data.status}`);
    }
  } catch (error) {
    console.error('Erro ao buscar avaliações do Google:', error);
    res.status(500).json({ error: 'Falha ao buscar as avaliações do Google.' });
  }
}
