export function MovieCarouselSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Carousel Heading */}
      <div className="flex items-center mb-6 w-full h-7 md:h-9 animate-pulse">
        <div className="bg-primary/15 rounded-2xl w-49 h-5 md:w-54 md:h-6"></div>
      </div>

      <div className="flex gap-3 pb-4 overflow-hidden">
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

export function HeroTrendingSkeleton() {
  return (
    <section className="relative w-full h-auto md:h-[80vh] lg:h-[90vh] overflow-hidden animate-pulse">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Image */}
        <div className="w-full h-full bg-primary/10" />

        {/* Gradients */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative px-4 mb-6 h-125 md:h-[60vh] lg:h-[80vh] flex flex-col justify-end lg:justify-center">
        <div className="space-y-4 md:max-w-[50vw] xl:max-w-[40vw]">
          {/* title */}
          <div className="flex items-center w-full h-10 md:h-15">
            <div className="h-8 md:h-13 w-70 md:w-90 rounded-full bg-primary/15"></div>
          </div>

          <div className="flex gap-2.5">
            {/* Badge mediaType */}
            <div className="h-7 flex items-center">
              <div className="h-5 w-14 rounded-full bg-primary/15"></div>
            </div>

            {/* Badge year */}
            <div className="h-7 flex items-center">
              <div className="h-5 w-14 rounded-full bg-primary/15"></div>
            </div>

            {/* Badge voteAverage */}
            <div className="h-7 flex items-center">
              <div className="h-5 w-14 rounded-full bg-primary/15"></div>
            </div>
          </div>

          {/* overview */}
          <div className="flex flex-col gap-2 h-20">
            <div className="h-3 md:h-5 w-[full] rounded-full bg-primary/15"></div>
            <div className="h-3 md:h-5 w-[85%] rounded-full bg-primary/15"></div>
            <div className="h-3 md:h-5 w-[90%] rounded-full bg-primary/15"></div>
            <div className="h-3 md:h-5 w-[50%] rounded-full bg-primary/15"></div>
          </div>

          <div className="flex gap-3">
            {/* Button more info */}
            <div className="h-9 w-44 rounded-xl bg-primary/15"></div>

            {/* Button add to list*/}
            <div className="h-9 w-9 rounded-xl bg-primary/15"></div>

            {/* Button add to favorites */}
            <div className="h-9 w-9 rounded-xl bg-primary/15"></div>

            {/* Button mark as watched */}
            <div className="h-9 w-9 rounded-xl bg-primary/15"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
