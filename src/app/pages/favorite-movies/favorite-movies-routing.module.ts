import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [{
    path: 'list',
    component: ListComponent
  },
  {
    path: 'card/:imdbID',
    component: CardComponent
  },
  {
    path: '',
    redirectTo: '/favorite-movies/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteMoviesRoutingModule { }
