import { PopularMoviesSection } from "@/components/home/PopularMoviesSection";
import { PopularTVShowSection } from "@/components/home/PopularTVShowSection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { MovieCarouselSkeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold mb-5">CineHub</h1>

      <Suspense fallback={<MovieCarouselSkeleton />}>
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
