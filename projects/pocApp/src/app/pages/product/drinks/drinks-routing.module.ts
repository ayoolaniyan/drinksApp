import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinksPage } from './drinks.page';

const routes: Routes = [
  {
    path: '',
    component: DrinksPage
  },
  {
    path: ':idDrink',
    loadChildren: () => import('./drink-detail/drink-detail.module').then(m => m.DrinkDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinksPageRoutingModule { }
