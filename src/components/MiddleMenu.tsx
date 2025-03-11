'use client';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// Middle Navigation Menu
const MiddleMenu = () => (
  <Navbar className="justify-content-center">
    <Nav className="d-flex flex-row">
      <NavDropdown title={<strong>MEN</strong>} id="men-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>WOMEN</strong>} id="women-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>KIDS</strong>} id="kids-dropdown" className="px-3">{null}</NavDropdown>
      <NavDropdown title={<strong>BRANDS</strong>} id="brands-dropdown" className="px-3">{null}</NavDropdown>
      <Nav.Link className="px-3"><strong>SEARCH</strong></Nav.Link>
    </Nav>
  </Navbar>
);

export default MiddleMenu;
