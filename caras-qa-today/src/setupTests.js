// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarasQAToday from './CarasQAToday';

test('renders welcome message', () => {
  render(<CarasQAToday />);
  
  const heading = screen.getByText(/welcome to cara's qa today/i);
  expect(heading).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<CarasQAToday />);
  
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});

