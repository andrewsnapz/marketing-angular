import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[appIconButton]',
  standalone: true,
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.scss',
})
export class IconButton {
  size = input<'sm' | '2xl'>('sm');
  visuallyHiddenText = input.required<string>();

  @HostBinding('class')
  get iconButtonClasses(): string {
    return `icon-button icon-button-svg-${this.size()}`;
  }

  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return this.visuallyHiddenText();
  }
}
