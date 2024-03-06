import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../src/components/Login';

test('renders login form', () => {
  render(<Login onLogin={() => {}} />);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole('button', { name: /login/i });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('calls onLogin prop when login button is clicked', () => {
  const mockOnLogin = jest.fn();
  render(<Login onLogin={mockOnLogin} />);
  const loginButton = screen.getByRole('button', { name: /login/i });

  fireEvent.click(loginButton);

  expect(mockOnLogin).toHaveBeenCalled();
});
