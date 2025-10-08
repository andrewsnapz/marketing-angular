import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[appIconButton]',
  standalone: true,
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.scss',
})
export class IconButton {
  size = input<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');
  visuallyHiddenText = input.required();

  @HostBinding('class')
  get buttonClasses(): string {
    return `icon-button icon-button-${this.size()}`;
  }
}
