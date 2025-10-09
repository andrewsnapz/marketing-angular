import { Component } from '@angular/core';

import { Logo } from '../../shared/svg/logo/logo';
import { IconButton } from '../../shared/icon-button/icon-button';
import { Hamburger } from '../../shared/svg/hamburger/hamburger';

@Component({
  selector: 'app-header',
  imports: [Logo, IconButton, Hamburger],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
