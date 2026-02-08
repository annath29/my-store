import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/customers/customer-search/customer-search.component').then(
        (m) => m.CustomerSearchComponent,
      ),
  },
];
