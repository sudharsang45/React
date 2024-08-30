import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

test('renders home link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Edit/i);
  expect(linkElement).toBeInTheDocument();
});



