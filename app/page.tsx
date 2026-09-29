import { getPosterURL, getTrending } from "@/lib/tmdb";
import Image from "next/image";

export default async function Home() {
  const trending = await getTrending();

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-5">CineHub</h1>

      <h2 className="text-3xl font-bold mb-3">Tendências</h2>
      <div className="grid grid-cols-3">
        {trending.map((item) => (
          <div key={item.id} className="mb-2">
            <div className="relative aspect-2/3 w-50">
              <Image
                src={getPosterURL(item.poster_path, "w500")}
                alt={item.media_type === "movie" ? item.title : item.name}
                fill
              />
            </div>
            <h3 className="text-2xl font-bold">{item.media_type === "movie" ? item.title : item.name}</h3>
            <span>⭐{item.vote_average.toFixed(2)}</span>
            <p>Sinopse: {item.overview}</p>
            <p>Data: {item.media_type === "movie" ? item.release_date : item.first_air_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}
