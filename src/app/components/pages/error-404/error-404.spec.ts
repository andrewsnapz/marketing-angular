import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { Error404 } from './error-404';
import { Landing } from '../landing/landing';

async function renderComponent() {
  TestBed.configureTestingModule({
    imports: [Error404, Landing],
    providers: [provideRouter(routes)],
  });
  const { container } = await render(Error404);

  return container;
}

it('clicking the button in the Error404 page redirects to landing page', async () => {
  // render component, setup testing router
  await renderComponent();
  const harness = await RouterTestingHarness.create();
  await harness.navigateByUrl('/not-a-route');
  harness.detectChanges();

  // get button in error404 page and redirect
  const redirectHome = screen.getByRole('button', { name: /back to home/i });
  await userEvent.click(redirectHome);

  expect(TestBed.inject(Router).url).toBe('/');
});
