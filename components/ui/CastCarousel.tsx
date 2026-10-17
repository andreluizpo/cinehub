import { getProfileURL } from "@/lib/tmdb";
import { Cast } from "@/types/tmdb";
import Image from "next/image";

type CastCarouselProps = {
  heading: string;
  casts: Cast[];
};

export function CastCarousel({ heading, casts }: CastCarouselProps) {
  return (
    <section className="container mx-auto px-4 py-10 animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
      <h2 className="font-title text-xl md:text-3xl font-bold mb-6">{heading}</h2>

      <div className="flex gap-3 px-1 py-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary/15 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary">
        {casts.map((cast) => (
          <article key={cast.id} className="max-w-35 md:max-w-40 group">
            {/* Cast Profile */}
            <div className="relative aspect-2/3 w-35 md:w-40 mb-2.5 rounded-2xl overflow-hidden transition-all group-hover:ring-3 group-hover:ring-primary group-hover:drop-shadow-2xl group-hover:drop-shadow-primary/25">
              <Image
                src={getProfileURL(cast.profile_path, "w185")}
                alt={cast.name}
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:animate-scale"
              />
            </div>

            {/* Cast Details */}
            <div>
              <p className="font-bold text-center">{cast.name}</p>
              <p className="text-sm text-muted-foreground text-center">{cast.character}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
