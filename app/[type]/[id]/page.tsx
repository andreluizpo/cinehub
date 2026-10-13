import { MediaSection } from "@/components/media/MediaSection";
import { getMediaDetails } from "@/lib/tmdb";

export default async function Page({ params }: { params: Promise<{ type: "movie" | "tv"; id: number }> }) {
  const { type, id } = await params;

  const media = await getMediaDetails(type, id);
  if (!media) return;

  return (
    <>
      <MediaSection media={media} />
    </>
  );
}
