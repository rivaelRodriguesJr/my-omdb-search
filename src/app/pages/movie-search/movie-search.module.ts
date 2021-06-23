import { AppModule } from './../../app.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MovieSearchRoutingModule } from './movie-search-routing.module';
import { MovieSearchComponent } from './movie-search.component';
import { MovieSearchService } from './movie-search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MovieSearchRoutingModule,
    SharedModule
  ], providers: [MovieSearchService]
})
export class MovieSearchModule { }
