import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'movie-search', loadChildren: () => import('./pages/movie-search/movie-search.module').then(m => m.MovieSearchModule) }, { path: 'favorite-movies', loadChildren: () => import('./pages/favorite-movies/favorite-movies.module').then(m => m.FavoriteMoviesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
