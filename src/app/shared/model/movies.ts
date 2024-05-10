export interface ItrandingMovieRes {
    page: number
    results: ItrandingMovie[]
    total_pages: number
    total_results: number
  }
  
  export interface ItrandingMovie {
    backdrop_path: string ;
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    title: string;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    original_name ?: string;
    name ? : string
    email ? : string
  }
  