import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovieTableComponent } from './components/movie-table/movie-table.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class SharedModule { }
