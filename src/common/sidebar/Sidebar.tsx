import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './sidebarStyles.scss';

const Sidebar = () => (
  <Navbar
    bg="light"
    className="sidebar"
    expand="lg"
  >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto flex-column">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Sidebar;
