import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { FavoriteMoviesRoutingModule } from './favorite-movies-routing.module';
import { FavoriteMoviesComponent } from './favorite-movies.component';

@NgModule({
  declarations: [
    FavoriteMoviesComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FavoriteMoviesRoutingModule,
    SharedModule
  ]
})
export class FavoriteMoviesModule {}
