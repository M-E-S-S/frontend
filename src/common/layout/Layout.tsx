import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
`;

const LayoutLeft = styled.div`
  flex: 0 0 200px;
`;

const LayoutRight = styled.div`
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper>
    <LayoutLeft>left</LayoutLeft>
    <LayoutRight>{children}</LayoutRight>
  </LayoutWrapper>
);

export default Layout;
