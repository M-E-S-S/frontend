import React from 'react';
import { render } from '@testing-library/react';
import Product from '../Product';

it('renders welcome message', () => {
  const { getByText } = render(<Product />);
  expect(getByText('Product')).toBeInTheDocument();
})
