import { getMediaDetails } from "@/lib/tmdb";
import { HeroSection } from "./HeroSection";

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
    </>
  );
}
