import { Component } from '@angular/core';
import { render, screen } from '@testing-library/angular';

import { IconButton } from './icon-button';
import { Hamburger } from '../svg/hamburger/hamburger';

@Component({
  selector: 'testButton',
  standalone: true,
  template: `<button appIconButton visuallyHiddenText="hidden-text">
    <app-hamburger-svg />
  </button>`,
  imports: [Hamburger, IconButton],
})
class TestButton {}

async function renderComponent() {
  const { container } = await render(TestButton);
  return container;
}

it('IconButton successfully renders', async () => {
  await renderComponent();
});

it("assigns 'visuallyHiddenText' to aria-label and hidden span", async () => {
  await renderComponent();
  screen.logTestingPlaygroundURL();
  const iconButton = screen.getByRole('button', { name: /hidden\-text/i });
  expect(iconButton).toBeInTheDocument();
  expect(iconButton).toHaveAttribute('aria-label', 'hidden-text');
});
