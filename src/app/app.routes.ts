import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/customers/customer-search/customer-search.component').then(
        (m) => m.CustomerSearchComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/list-products/list-products.component').then(
        (m) => m.ListProductsComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
