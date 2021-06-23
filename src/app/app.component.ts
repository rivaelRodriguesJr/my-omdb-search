import { Component } from '@angular/core';
import { NavRoute } from './models/nav-route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: NavRoute[] = [
    {
      name: 'Buscar Filmes',
      path: 'movie-search'
    },
    {
      name: 'Filmes favoritos',
      path: 'favorite-movies'
    }
  ];
}
