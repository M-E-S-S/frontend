import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Helpers
import { hexToRgb } from '../_helpers/colors';

const NavbarPrivateListItem = styled(NavLink)`
  color: ${({ theme }) => theme.COLORS.black};
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => `rgba(${hexToRgb(theme.COLORS.gray10)}, 0.5)`}; 
  }
  &.active {
    box-shadow: ${({ theme }) => `inset 3px 0px 0px 0px ${theme.COLORS.primary}`};
    color: ${({ theme }) => theme.COLORS.primary};
  }
`;
const NavbarPrivateList = styled.div``;

// Types
interface NavbarLink {
  path: string;
  title: string;
  key: string;
}

interface NavbarPrivateProps {
  links: NavbarLink[];
}

const NavbarPrivate = ({ links }: NavbarPrivateProps) => (
  <NavbarPrivateList>
    {links.map((item: NavbarLink) => (
      <NavbarPrivateListItem
        key={item.key}
        to={item.path}
      >
        {item.title}
      </NavbarPrivateListItem>
    ))}
  </NavbarPrivateList>
);

export default NavbarPrivate;
