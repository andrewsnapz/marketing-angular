import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-error-404',
  imports: [Button],
  templateUrl: './error-404.html',
  styleUrl: './error-404.scss',
})
export class Error404 {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
