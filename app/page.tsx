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
    </main>
  );
}
