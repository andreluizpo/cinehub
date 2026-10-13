export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  media_type: "movie";
  original_language: string;
  genres: {
    id: number;
    name: string;
  }[];
  popularity: number;
  release_date: string;
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  tagline: string;
}

export interface TVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  media_type: "tv";
  original_language: string;
  genres: {
    id: number;
    name: string;
  }[];
  popularity: number;
  first_air_date: string;
  softcore: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  tagline: string;
}

export type MediaItem = Movie | TVShow;
