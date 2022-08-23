import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('change-title button is on the page', () => {
  render(<App />);

  expect(screen.getByRole('button', {
    name: 'Change Title'
  })).toBeInTheDocument();
});

test();