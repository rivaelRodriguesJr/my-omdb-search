import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageMovie } from './../../../../models/storage-movie';
import { FavoriteMovieService } from './../../../../services/favorite-movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: StorageMovie[] = [];

  constructor(
    private favoriteMovieService: FavoriteMovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movies = this.favoriteMovieService.list();
  }

  navigateToCard(imdbID: string) {
    this.router.navigate(['favorite-movies', 'card', imdbID]);
  }

}
