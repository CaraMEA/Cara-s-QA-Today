import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About Me heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
});

