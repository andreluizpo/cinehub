import { PopularMoviesSection } from "@/components/home/PopularMoviesSection";
import { PopularTVShowSection } from "@/components/home/PopularTVShowSection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { HeroTrendingSkeleton, MovieCarouselSkeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<HeroTrendingSkeleton />}>
        <TrendingSection />
      </Suspense>

      <Suspense fallback={<MovieCarouselSkeleton />}>
        <PopularMoviesSection />
      </Suspense>

      <Suspense fallback={<MovieCarouselSkeleton />}>
        <PopularTVShowSection />
      </Suspense>
    </main>
  );
}
