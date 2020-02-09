import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

it('renders brand name', () => {
  const { getByText } = render(<Header />);
  expect(getByText('M.E.S.S.')).toBeInTheDocument();
});
