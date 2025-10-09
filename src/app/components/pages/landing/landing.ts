import { Component } from '@angular/core';

import { Header } from '../../layout/header/header';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-landing',
  imports: [Header, PageLayout],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
