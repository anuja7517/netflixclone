import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  movieId! :string;
  movieObj! :any
  backgroundImage! :string
private _auth =inject(ActivatedRoute);
private _movieServices = inject(MovieService)
  constructor() { }

  ngOnInit(): void {
    this.movieId =  this._auth.snapshot.params['movieId']
    console.log(this.movieId);
    this._movieServices.fetchMovieInfo(this.movieId)
    .subscribe(res=>{
      console.log(res);
      this.movieObj =res;
      this.backgroundImage = `https:image.tmdb.org/t/p/original/`+this.movieObj?.backdrop_path || this.movieObj.poster_path
      
    })
  }

}
