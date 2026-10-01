import { MovieCard } from "@/components/ui/MovieCard";
import { getTrending } from "@/lib/tmdb";

export default async function Home() {
  const trending = await getTrending();

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-5">CineHub</h1>

      <h2 className="text-3xl font-bold mb-3">Tendências</h2>
      <div className="flex gap-3">
        {trending.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
