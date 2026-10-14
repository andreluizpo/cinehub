import { MediaItem, Movie, TVShow } from "@/types/tmdb";

const TMDB_API_ACCESS_TOKEN = process.env.TMDB_API_ACCESS_TOKEN;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const NEXT_PUBLIC_TMDB_IMAGE_BASE = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE;

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}` },
};

async function fetchTMDB<T>(route: string, params: Record<string, string> = {}): Promise<T | null> {
  // Verifica se existe um token de acesso
  if (!TMDB_API_ACCESS_TOKEN) return null;

  const searchParams = new URLSearchParams({
    language: "pt-BR",
    ...params,
  });

  try {
    // Tenta fazer a busca na API
    const res = await fetch(`${TMDB_BASE_URL}${route}?${searchParams}`, options);

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

  return `${NEXT_PUBLIC_TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getBackdropURL(path: string | null, size: "w300" | "w780" | "w1280" | "original") {
  return `${NEXT_PUBLIC_TMDB_IMAGE_BASE}/${size}${path}`;
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

// Buscar os detalhes de um filme ou série pelo ID
export async function getMediaDetails(type: "movie" | "tv", id: number): Promise<MediaItem | null> {
  if (type === "movie") {
    const data = await fetchTMDB<Movie>(`/movie/${id}`, { append_to_response: "videos,credits" });
    return data ? { ...data, media_type: "movie" } : null;
  }

  const data = await fetchTMDB<TVShow>(`/tv/${id}`);
  console.log(data);
  return data ? { ...data, media_type: "tv" } : null;
}
