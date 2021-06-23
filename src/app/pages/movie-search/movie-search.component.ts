import { Component, OnInit } from '@angular/core';

import { Movie } from './../../models/movie';
import { MovieSearchService } from './movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieTitle: string = '';
  movie: Movie = {} as Movie;
  showMovie: boolean = false;
  showErrorAlert: boolean = false;

  constructor(
    private movieSearchService: MovieSearchService
  ) { }

  ngOnInit(): void {
  }

  onSearchClick() {
    this.showMovie = false;
    this.movie = {} as Movie;
    this.movieSearchService.findMovie({ t: this.movieTitle}).subscribe(response => {
      this.movie = response;

      this.showMovie = response && this.toBoolean(response.Response);

      if(!this.showMovie) {
        this. showErrorAlert = true;
      }

    }, error => {
      this.movie = {
        Response: 'False',
        Error: JSON.stringify(error)
      }
      this. showErrorAlert = true;
    });
  }

  onResetClick() {
    this.showMovie = false;
    this.showErrorAlert = false;
    this.movieTitle = '';
    this.movie = {} as Movie;
  }

  private toBoolean(value: string) {
    if (value.toString() === 'True' || value.toString() === 'true') {
      return true;
    } else if (value.toString() === 'False' || value.toString() === 'false') {
      return false;
    } else {
      return false;
    }
  }

}
