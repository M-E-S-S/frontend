import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

it('renders welcome message', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText('Dashboard welcome message')).toBeInTheDocument();
});