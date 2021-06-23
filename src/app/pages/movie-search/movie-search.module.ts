import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieSearchRoutingModule } from './movie-search-routing.module';
import { MovieSearchComponent } from './movie-search.component';


@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    MovieSearchRoutingModule
  ]
})
export class MovieSearchModule { }
