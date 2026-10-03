import { MediaItem, Movie, TVShow } from "@/types/tmdb";

const TMDB_API_ACCESS_TOKEN = process.env.TMDB_API_ACCESS_TOKEN;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_IMAGE_BASE = process.env.TMDB_IMAGE_BASE;

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}` },
};

async function fetchTMDB<T>(route: string): Promise<T | null> {
  // Verifica se existe um token de acesso
  if (!TMDB_API_ACCESS_TOKEN) return null;

  try {
    // Tenta fazer a busca na API
    const res = await fetch(`${TMDB_BASE_URL}${route}?language=pt-BR`, options);

    // Se o resultado não for sucesso, lança um erro
    if (!res.ok) throw new Error("Erro ao buscar");

    // Retorna o resultado como JSON
    return res.json();
  } catch (error: unknown) {
    // Se ocorrer um erro, verifica se é uma instância de Error e exibe a mensagem
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(`Erro desconhecido: ${error}`);
    }

    return null;
  }
}

export function getPosterURL(
  path: string | null,
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original",
) {
  if (!path) return "";

  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export async function getTrending() {
  const data = await fetchTMDB<{ results: MediaItem[] }>("/trending/all/day");
  return data?.results ?? [];
}

export async function getPopularMovies() {
  const data = await fetchTMDB<{ results: Movie[] }>("/movie/popular");
  return data?.results.map((item) => ({ ...item, media_type: "movie" as const })) ?? [];
}

export async function getPopularTVShow() {
  const data = await fetchTMDB<{ results: TVShow[] }>("/tv/popular");
  return data?.results.map((item) => ({ ...item, media_type: "tv" as const })) ?? [];
}
