import { MediaSection } from "@/components/media/MediaSection";

export default async function Page({ params }: { params: Promise<{ type: "movie" | "tv"; id: number }> }) {
  const { type, id } = await params;

  return (
    <main>
      <MediaSection type={type} id={id} />
    </main>
  );
}
