import React from 'react';
import styled from 'styled-components';

const PrivateLayoutWrapper = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
`;

const PrivateLayoutLeft = styled.div`
  flex: 0 0 200px;
`;

const PrivateLayoutRight = styled.div`
  flex: 1;
`;

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: PrivateLayoutProps) => (
  <PrivateLayoutWrapper>
    <PrivateLayoutLeft>left</PrivateLayoutLeft>
    <PrivateLayoutRight>{children}</PrivateLayoutRight>
  </PrivateLayoutWrapper>
);

export default PrivateLayout;
