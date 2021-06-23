import { Component, Input, OnInit } from '@angular/core';
import { NavRoute } from 'src/app/models/nav-route';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() brand: string = '';
  @Input() routes: NavRoute[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
