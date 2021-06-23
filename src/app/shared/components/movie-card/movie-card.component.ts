import { Component, Input, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie = {} as Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
