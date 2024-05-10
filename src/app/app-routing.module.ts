import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { MovieDetailsComponent } from './shared/component/movie-details/movie-details.component';
import { SingleMovieComponent } from './shared/component/single-movie/single-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch :'full'
    
  },
  {
    path :'home',
    component : HomeComponent
  },
  {
    path : 'moviedetails/:movieId',
    component: MovieDetailsComponent
  },
  {
    path :'singlemovie/:movieId',
    component : SingleMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
