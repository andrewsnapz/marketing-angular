import { Routes } from '@angular/router';

import { Landing } from './components/pages/landing/landing';
import { Error404 } from './components/pages/error-404/error-404';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: '**',
    component: Error404,
  },
];
