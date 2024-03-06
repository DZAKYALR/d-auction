import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { server } from '../../tests/server';


test('redirects to auctioneer dashboard after successful auctioneer login', async () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'auctioneer' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });

  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => expect(screen.getByRole('heading', { name: /auctioneer dashboard/i })).toBeInTheDocument());
});

