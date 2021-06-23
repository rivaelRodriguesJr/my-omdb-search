import { Injectable } from '@angular/core';
import { StorageMovie } from '../models/storage-movie';

const PREFIX = 'favorite_movie_'

@Injectable({
  providedIn: 'root'
})
export class FavoriteMovieService {

  constructor() { }

  favorite(movie: StorageMovie): void {
    const imdbID = movie.imdbID || '';
    localStorage.setItem(PREFIX + imdbID, JSON.stringify(movie));
  }

  unFavorite(imdbID: string): void {
    localStorage.removeItem(PREFIX + imdbID);
  }

  list(): StorageMovie[] {
    const movies: StorageMovie[] = [];
    Object.keys(localStorage).forEach((key) => {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      movies.push(value);
    });
    return movies;
  }

  get(imdbID: string): StorageMovie {
    return JSON.parse(localStorage.getItem(PREFIX + imdbID) || 'null') as StorageMovie;
  }

}
