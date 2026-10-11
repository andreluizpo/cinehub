import { getTrending } from "@/lib/tmdb";
import { HeroSection } from "./HeroSection";

export async function TrendingSection() {
  const trending = await getTrending();

  return <HeroSection items={trending} />;
}
