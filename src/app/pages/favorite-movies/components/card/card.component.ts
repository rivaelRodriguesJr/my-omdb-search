import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageMovie } from './../../../../models/storage-movie';
import { FavoriteMovieService } from './../../../../services/favorite-movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  movie: StorageMovie = {} as StorageMovie;
  showMovie: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private favoriteMovieService: FavoriteMovieService
  ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.movie = this.favoriteMovieService.get(params['imdbID']);
      this.showMovie = !!this.movie;
    });
  }

}
