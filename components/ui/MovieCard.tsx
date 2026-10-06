import { StarIcon } from "@solar-icons/react/bold/star";
import { getPosterURL } from "@/lib/tmdb";
import Image from "next/image";
import { MediaItem } from "@/types/tmdb";

type MovieCardProps = {
  isUpcoming?: boolean;
  item: MediaItem;
};

export function MovieCard({ isUpcoming = false, item }: MovieCardProps) {
  const posterURL = getPosterURL(item.poster_path, "w342");
  const title = item.media_type === "movie" ? item.title : item.name;
  const date = item.media_type === "movie" ? item.release_date : item.first_air_date;
  const year = isUpcoming
    ? new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : new Date(date).getFullYear();
  const voteAverage = item.vote_average.toFixed(1);

  return (
    <article className="max-w-35 md:max-w-40 group">
      {/* Movie Poster */}
      <div className="relative aspect-2/3 w-35 md:w-40 mb-2.5 rounded-2xl overflow-hidden transition-all group-hover:ring-3 group-hover:ring-primary group-hover:drop-shadow-2xl group-hover:drop-shadow-primary/25">
        <Image
          src={posterURL}
          alt={title}
          fill
          sizes="(max-width: 768px) 140px, 160px"
          className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:animate-scale"
        />
      </div>

      {/* Movie Info */}
      <div>
        <h3 className="font-title font-bold text-base md:text-lg truncate transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <div className="flex justify-between mt-1">
          <span className="font-text text-xs font-medium text-muted-foreground">{year}</span>
          {!isUpcoming && (
            <span className="text-xs font-bold text-primary flex items-center gap-1 [&_svg]:size-4">
              <StarIcon /> {voteAverage}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
