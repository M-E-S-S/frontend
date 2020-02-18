import React from 'react';
import styled from 'styled-components';

// Routes
import { routes } from '../../routes';

// Components
import { NavbarPrivate } from '../navbar';

const LayoutPrivateWrapper = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
`;

const LayoutPrivateLeft = styled.div`
  background-color: ${({ theme }) => theme.COLORS.white};
  flex: 0 0 250px;
`;

const LayoutPrivateRight = styled.div`
  flex: 1;
`;

interface LayoutPrivateProps {
  children: React.ReactNode;
}

export const LayoutPrivate = ({ children }: LayoutPrivateProps) => (
  <LayoutPrivateWrapper>
    <LayoutPrivateLeft>
      <NavbarPrivate
        links={[
          routes.dashboard,
          routes.products,
        ]}
      />
    </LayoutPrivateLeft>
    <LayoutPrivateRight>{children}</LayoutPrivateRight>
  </LayoutPrivateWrapper>
);

export default LayoutPrivate;
