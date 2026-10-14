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
  videos: Video[];
  credits: {
    cast: Cast[];
    crew: Crew[];
  };
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
  videos: Video[];
  credits: {
    cast: Cast[];
    crew: Crew[];
  };
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path: string;
  }[];
  number_of_seasons: number;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
  published_at: string;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: false;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export type MediaItem = Movie | TVShow;
