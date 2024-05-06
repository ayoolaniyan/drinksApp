import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'drinks',
        loadChildren: () => import('../pages/product/drinks/drinks.module').then(m => m.DrinksPageModule)
      },
      {
        path: '',
        redirectTo: 'drinks',
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
      },
    ]
  }
];

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'drinks',
//         loadChildren: () => import('../pages/drinks/drinks.module').then(m => m.DrinksPageModule)
//       },
//       {
//         path: 'tab2',
//         loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
//       },
//       {
//         path: 'tab3',
//         loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
