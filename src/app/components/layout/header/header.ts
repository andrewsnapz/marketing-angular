import { Component, signal } from '@angular/core';

import { Logo } from '../../shared/svg/logo/logo';
import { IconButton } from '../../shared/icon-button/icon-button';
import { Hamburger } from '../../shared/svg/hamburger/hamburger';
import { MobileNav } from './mobile-nav/mobile-nav';

@Component({
  selector: 'app-header',
  imports: [Logo, IconButton, Hamburger, MobileNav],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMobileNavOpen = signal(false);

  openMobileNav() {
    this.isMobileNavOpen.set(true);
  }

  closeMobileView() {
    this.isMobileNavOpen.set(false);
  }
}
