import { getPopularTVShow } from "@/lib/tmdb";
import { MovieCarousel } from "../ui/MovieCarousel";

export async function PopularTVShowSection() {
  const popularTvShow = await getPopularTVShow();
  return <MovieCarousel heading="Séries Populares" items={popularTvShow} />;
}
