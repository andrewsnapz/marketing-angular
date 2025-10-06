import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { App } from './app';

async function renderComponent() {
  const { container } = await render(App, {});
  return container;
}

it('renders componnet successfully', async () => {
  await renderComponent();
});

it('increases count when the button is clicked', async () => {
  await renderComponent();

  const increaseCounterBtn = screen.getByRole('button', { name: /increase count/i });
  const originalCount = screen.getByText(/count:/i).textContent;

  await userEvent.click(increaseCounterBtn);

  const newCount = screen.getByText(/count:/i).textContent;

  expect(originalCount).not.toBe(newCount);
});
