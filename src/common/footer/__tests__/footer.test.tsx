import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

it('renders copyright name', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('© 2020 Copyright: M.E.S.S.')).toBeInTheDocument();
});