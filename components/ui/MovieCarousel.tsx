import { MediaItem } from "@/types/tmdb";
import { MovieCard } from "./MovieCard";

type MovieCarouselProps = {
  heading: string;
  items: MediaItem[];
};

export function MovieCarousel({ heading, items }: MovieCarouselProps) {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl md:text-3xl font-bold mb-6">{heading}</h2>
      <div className="flex gap-3 pb-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary/15 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary">
        {items.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
