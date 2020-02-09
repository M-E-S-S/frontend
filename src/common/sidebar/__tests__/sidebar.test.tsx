import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';

it('renders brand name', () => {
  const { getByText } = render(<Sidebar />);
  expect(getByText('Dashboard')).toBeInTheDocument();
  expect(getByText('Products')).toBeInTheDocument();
});
