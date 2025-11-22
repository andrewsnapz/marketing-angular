import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  imports: [],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  isMobileNavOpen = input.required();
  closeMobileNav = input.required<() => void>();

  onHandleCloseMobileNav() {
    console.log('called...');
    console.log(this.closeMobileNav);
    this.closeMobileNav();
  }
}
