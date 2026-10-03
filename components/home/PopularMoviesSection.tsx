import { getPopularMovies } from "@/lib/tmdb";
import { MovieCarousel } from "../ui/MovieCarousel";

export async function PopularMoviesSection() {
  const popularMovies = await getPopularMovies();
  return <MovieCarousel heading="Filmes Populares" items={popularMovies} />;
}
