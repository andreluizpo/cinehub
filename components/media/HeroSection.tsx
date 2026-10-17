import { AddIcon } from "@solar-icons/react/linear/add";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { EyeIcon } from "@solar-icons/react/bold/eye";
import { CalendarIcon } from "@solar-icons/react/bold/calendar";
import { StarIcon } from "@solar-icons/react/bold/star";
import { TvIcon } from "@solar-icons/react/bold/tv";
import { ClapperboardIcon } from "@solar-icons/react/bold/clapperboard";
import { ClockCircleIcon } from "@solar-icons/react/bold/clock-circle";
import { PlayIcon } from "@solar-icons/react/bold/play";
import { LayersIcon } from "@solar-icons/react/bold/layers";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MediaItem } from "@/types/tmdb";
import { getBackdropURL, getPosterURL } from "@/lib/tmdb";

type HeroSectionProps = {
  media: MediaItem;
};

export async function HeroSection({ media }: HeroSectionProps) {
  const posterUrl = getPosterURL(media.poster_path, "w342");
  const backdropUrl = getBackdropURL(media.backdrop_path, "w1280");
  const title = media.media_type === "movie" ? media.title : media.name;
  const mediaTypeIcon = media.media_type === "movie" ? <ClapperboardIcon /> : <TvIcon />;
  const mediaType = media.media_type === "movie" ? "Filme" : "Série";
  const year = new Date(media.media_type === "movie" ? media.release_date : media.first_air_date).getFullYear();
  const duration = media.media_type === "movie" && `${Math.floor(media.runtime / 60)}h ${media.runtime % 60}m`;
  const numberOfSeasons = media.media_type === "tv" && media.number_of_seasons;
  const voteAverage = media.vote_average.toFixed(1);
  const overview = media.overview;
  const tagline = media.tagline;
  const genres = media.genres;
  const featuredJobs = ["Director", "Writer", "Screenplay", "Story", "Characters"];
  const featuredCrew =
    media.media_type === "movie" ? media.credits.crew.filter((person) => featuredJobs.includes(person.job)) : null;
  const createdBy = media.media_type === "tv" ? media.created_by : null;

  return (
    <section className="relative w-full h-auto lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Backdrop Image */}
        <Image
          src={backdropUrl}
          alt={title}
          fill
          fetchPriority="high"
          loading="eager"
          className="object-cover object-top animate-fade-in animate-duration-1000 animate-fill-mode-both"
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto relative flex flex-col items-center gap-8 lg:flex-row lg: mt-30 p-4">
        {/* Poster */}
        <div className="relative aspect-2/3 w-50 lg:w-75 lg:h-112.5 animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
          <Image
            src={posterUrl}
            alt={title}
            fill
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 200px, 300px"
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative mb-6 h-auto md:flex flex-col lg:justify-center">
          <div className="flex flex-col items-center lg:items-start gap-4 xl:max-w-[60vw] animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
            {/* Title */}
            <h1 className="font-title text-4xl text-center lg:text-left md:text-6xl font-extrabold">{title}</h1>

            {/* Tagline */}
            <p className="text-primary md:text-xl font-medium italic">{tagline}</p>

            {/* Info */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {/* Media Type */}
              <Badge variant="secondary">
                {mediaTypeIcon}
                {mediaType}
              </Badge>

              {/* Year */}
              <Badge variant="secondary">
                <CalendarIcon />
                {year}
              </Badge>

              <Badge variant="secondary">
                {/* Duration */}
                {duration && (
                  <>
                    <ClockCircleIcon />
                    {duration}
                  </>
                )}

                {/* Duration */}
                {numberOfSeasons && (
                  <>
                    <LayersIcon />
                    {numberOfSeasons > 1 ? `${numberOfSeasons} Temporadas` : `${numberOfSeasons} Temporada`}
                  </>
                )}
              </Badge>

              {/* Vote average */}
              <Badge>
                <StarIcon />
                {voteAverage}
              </Badge>
            </div>

            {/* Genres */}
            <div className="flex gap-2.5">
              {genres.map((genre) => (
                <Badge key={genre.id} variant="light">
                  {genre.name}
                </Badge>
              ))}
            </div>

            {/* Overview */}
            <p className="text-sm text-center lg:text-left md:text-base text-muted-foreground">{overview}</p>

            {/* Crew */}
            {featuredCrew && (
              <div className="grid grid-cols-3 gap-3 mb-4">
                {featuredCrew.map((crew) => (
                  <div key={crew.id} className="text-[12px] md:text-sm text-center lg:text-left lg:mr-8 lg:mb-3">
                    <p className="font-bold">{crew.name}</p>
                    <p className="text-[10px] md:text-[12px]">{crew.job}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Created By */}
            {createdBy && (
              <div className="grid mb-4">
                {createdBy.map((creator) => (
                  <div key={creator.id} className="text-[12px] md:text-sm text-center lg:text-left lg:mr-8 lg:mb-3">
                    <p className="font-bold">{creator.name}</p>
                    <p className="text-[10px] md:text-[12px]">Criação</p>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button>
                <PlayIcon />
                Assistir Trailer
              </Button>

              <Button variant="secondary" size="icon">
                <AddIcon />
                <span className="hidden md:flex">Adicionar a lista</span>
              </Button>

              <Button variant="secondary" size="icon">
                <HeartIcon />
              </Button>

              <Button variant="secondary" size="icon">
                <EyeIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
