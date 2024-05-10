import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItrandingMovie, ItrandingMovieRes } from '../../model/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  BASE_URL : string =environment.baseurl;
  API_KEY :string =environment.apikey;
  TRENDING_URL :string =`${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}`

private _http  = inject(HttpClient);

  constructor() { }
  fetchTrendingMovies():Observable<ItrandingMovie[]>{
   return this._http.get<ItrandingMovieRes>(this.TRENDING_URL)
   .pipe(
    map(res =>res.results)
   )
  }

  fetchMovieInfo(id:string):Observable<any>{
    let movieUrl = `${this.BASE_URL}/movie/${id} credits?api_key=${this.API_KEY}`
    return this._http.get<any>(movieUrl)
  }
}
