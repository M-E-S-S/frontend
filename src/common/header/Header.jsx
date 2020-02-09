import React from 'react';
import {
  Button, Form, FormControl, Navbar,
} from 'react-bootstrap';
import './headerStyles.scss';

const Header = () => (
  <Navbar
    bg="light"
    className="header"
    expand="lg"
    sticky="top"
  >
    <Navbar.Brand href="/dashboard">M.E.S.S.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline>
        <FormControl
          className="mr-sm-2"
          placeholder="Search"
          type="text"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
