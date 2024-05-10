import { Component, OnInit, inject } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieService } from '../services/movie.service';
import { ItrandingMovie } from '../../model/movies';


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
    
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }
   movieArr :Array<ItrandingMovie>=[];
  // movieArr! : any
private _movieservices = inject(MovieService)

  constructor() { }

  ngOnInit(): void {
  //  this._movieservices.fetchTrendingMovies()
  //  .subscribe((res:any) =>{
  //   console.log(res);
  //   this.movieArr =res
    
  //  })
  this._movieservices.fetchTrendingMovies()
  .subscribe(res =>{
    console.log(res);
    this.movieArr =res
    
  })
  }
}
