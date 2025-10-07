import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Error404 } from './components/pages/error-404/error-404';
import { PageLayout } from './components/layout/page-layout/page-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Error404, PageLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
