import { MovieCarousel } from "@/components/ui/MovieCarousel";
import { getTrending } from "@/lib/tmdb";

export default async function Home() {
  const trending = await getTrending();

  return (
    <main>
      <h1 className="text-4xl font-extrabold mb-5">CineHub</h1>

      <MovieCarousel heading="Tendências" items={trending} />
    </main>
  );
}
