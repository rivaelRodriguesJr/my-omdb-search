import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageMovie } from 'src/app/models/storage-movie';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {

  @Input() movies: StorageMovie[] = [];
  @Output() rowClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(imdbID: string) {
    this.rowClick.emit(imdbID);
  }

}
