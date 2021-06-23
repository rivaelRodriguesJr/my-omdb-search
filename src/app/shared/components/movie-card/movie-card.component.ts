import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { StorageMovie } from 'src/app/models/storage-movie';

import { FavoriteMovieService } from './../../../services/favorite-movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: StorageMovie = {} as Movie;
  isFavorite: boolean = false;

  constructor(
    private favoriteMovieService: FavoriteMovieService
  ) { }

  ngOnInit(): void {
    if (this.movie?.imdbID) {
      console.log(this.favoriteMovieService.get(this.movie.imdbID))
      this.isFavorite = !!this.favoriteMovieService.get(this.movie.imdbID);
    }
  }

  onFavoriteClick() {
    if (this.isFavorite) {
      if (this.movie?.imdbID) {
        this.favoriteMovieService.unFavorite(this.movie.imdbID);
      }
    } else {
      this.favoriteMovieService.favorite(this.movie);
    }

    this.isFavorite = !this.isFavorite;
  }

}
