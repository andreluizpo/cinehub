import { getMediaDetails } from "@/lib/tmdb";
import { HeroSection } from "./HeroSection";
import { CastCarousel } from "../ui/CastCarousel";

type MediaSectionProps = {
  id: number;
  type: "movie" | "tv";
};

export async function MediaSection({ type, id }: MediaSectionProps) {
  const media = await getMediaDetails(type, id);

  if (!media) return;

  return (
    <>
      <HeroSection media={media} />
      <CastCarousel heading="Elenco" casts={media.credits.cast} />
    </>
  );
}
