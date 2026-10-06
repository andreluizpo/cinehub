export function MovieCarouselSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Carousel Heading */}
      <div className="flex items-center mb-6 w-full h-7 md:h-9 animate-pulse">
        <div className="bg-primary/15 rounded-2xl w-49 h-5 md:w-54 md:h-6"></div>
      </div>

      <div className="flex gap-3 pb-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary/15 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            {/* Movie Poster */}
            <div className="w-35 h-52.5 md:w-40 md:h-60 mb-2.5 rounded-2xl bg-primary/15"></div>

            {/* Movie Info */}
            <div>
              <div className="flex items-center w-full h-6 md:h-7">
                <div className="bg-primary/15 rounded-2xl w-30 h-4 md:h-5"></div>
              </div>

              <div className="flex justify-between mt-1">
                <div className="flex items-center w-7.5 h-4">
                  <div className="bg-primary/15 rounded-2xl w-7.5 h-3"></div>
                </div>
                <div>
                  <div className="flex items-center w-10 h-4">
                    <div className="bg-primary/15 rounded-2xl w-10 h-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
