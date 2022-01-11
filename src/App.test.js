import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText('Clock 25 + 5');
  expect(linkElement).toBeInTheDocument();
});
