import React from 'react';
import { render } from '@testing-library/react';
import Products from '../Products';

it('renders welcome message', () => {
  const { getByText } = render(<Products />);
  expect(getByText('Products')).toBeInTheDocument();
})
