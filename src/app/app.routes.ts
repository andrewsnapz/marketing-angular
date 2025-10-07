import { Routes } from '@angular/router';

import { Error404 } from './components/pages/error-404/error-404';

export const routes: Routes = [
  {
    path: '**',
    component: Error404,
  },
];
