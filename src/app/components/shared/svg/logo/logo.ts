import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-logo-svg',
  standalone: true,
  templateUrl: '../../../../../../public/abstractly.svg',
})
export class Logo {
  @HostBinding('aria-hidden')
  get ariaHidden(): boolean {
    return true;
  }
}
