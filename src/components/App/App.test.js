import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react with nav', () => {
  render(<App />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
