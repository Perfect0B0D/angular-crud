import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {ActorsListComponent} from './actors-list/actors-list.component';

const routes: Routes = [
  {path: 'actors-list', component: ActorsListComponent},
  {path: 'movies-list', component: MoviesListComponent},
  {path: '', redirectTo: '/movies-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
