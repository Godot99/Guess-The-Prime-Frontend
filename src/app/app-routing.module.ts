import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid/grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
