import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

const { apikey, apiurl } = environment;

interface Params {
  t?: string;
  i?: string
}

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private httpClient: HttpClient) { }


  public findMovie(requestParams: Params) {
    let params: HttpParams = new HttpParams();
    params = params.append('apikey', apikey);

    Object.keys(requestParams).forEach(key => {
      const value = (requestParams as any)[key];
      params = params.append(key, value);
    });

    return this.httpClient.get<Movie>(apiurl, { params });
  }
}
