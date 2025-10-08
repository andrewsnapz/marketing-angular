import { Component } from '@angular/core';

import { Hamburger } from '../../shared/svg/hamburger/hamburger';
import { IconButton } from '../../shared/icon-button/icon-button';

@Component({
  selector: 'app-landing',
  imports: [IconButton, Hamburger],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
