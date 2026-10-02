import { getTrending } from "@/lib/tmdb";
import { MovieCarousel } from "../ui/MovieCarousel";

export async function TrendingSection() {
  const trending = await getTrending();

  return <MovieCarousel heading="Tendências" items={trending} />;
}
