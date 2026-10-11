"use client";

import { InfoCircleIcon } from "@solar-icons/react/bold/info-circle";
import { AddIcon } from "@solar-icons/react/linear/add";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { EyeIcon } from "@solar-icons/react/bold/eye";
import { CalendarIcon } from "@solar-icons/react/bold/calendar";
import { StarIcon } from "@solar-icons/react/bold/star";
import { TvIcon } from "@solar-icons/react/bold/tv";
import { ClapperboardIcon } from "@solar-icons/react/bold/clapperboard";
import { getBackdropURL } from "@/lib/tmdb";
import { MediaItem } from "@/types/tmdb";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { useEffect, useState } from "react";

type HeroSectionProps = {
  items: MediaItem[];
};

export function HeroSection({ items }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredMovie = items[currentIndex];

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [items.length]);

  if (!featuredMovie) return;

  const backdropUrl = getBackdropURL(featuredMovie.backdrop_path, "w1280");
  const title = featuredMovie.media_type === "movie" ? featuredMovie.title : featuredMovie.name;
  const mediaType = featuredMovie.media_type === "movie" ? "Filme" : "Série";
  const icon = featuredMovie.media_type === "movie" ? <ClapperboardIcon /> : <TvIcon />;
  const year = new Date(
    featuredMovie.media_type === "movie" ? featuredMovie.release_date : featuredMovie.first_air_date,
  ).getFullYear();
  const voteAverage = featuredMovie.vote_average.toFixed(1);
  const overview = featuredMovie.overview;

  return (
    <section className="relative w-full h-auto md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
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

      {/* Content */}
      <div className="container mx-auto relative px-4 mb-6 h-125 md:h-[60vh] lg:h-[80vh] flex flex-col justify-end lg:justify-center">
        <div className="space-y-4 md:max-w-[50vw] xl:max-w-[40vw] animate-fade-in-up animate-duration-1000 animate-fill-mode-both">
          <h1 className="font-title text-4xl md:text-6xl font-extrabold">{title}</h1>

          <div className="flex gap-2.5">
            <Badge variant="secondary">
              {icon}
              {mediaType}
            </Badge>

            <Badge variant="secondary">
              <CalendarIcon />
              {year}
            </Badge>

            <Badge>
              <StarIcon />
              {voteAverage}
            </Badge>
          </div>
          <p className="text-sm md:text-base text-muted-foreground line-clamp-4">{overview}</p>

          <div className="flex gap-3">
            <Button>
              <InfoCircleIcon />
              Mais Informações
            </Button>

            <Button variant="secondary" size="icon">
              <AddIcon />
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

      {/* Carousel Indicators */}
      <div className="container mx-auto relative md:static px-4 my-4 animate-fade-in animate-duration-1000 animate-fill-mode-both">
        {items.length > 1 && (
          <div className="md:absolute md:bottom-0 md:right-0 md:left-0 flex justify-center gap-1">
            {items.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "h-2 w-10 bg-primary" : "h-2 w-4 bg-primary/15"}`}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
