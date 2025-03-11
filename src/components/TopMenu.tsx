'use client';

import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => {
  // CART COUNT
  const [cartCount] = useState(0);
  return (
    <Navbar bg="light" expand="lg" className="py-2">
      <Container>
        {/* Left-aligned Social Icons */}
        <Nav className="me-auto">
          <Nav.Link href="#"><Facebook /></Nav.Link>
          <Nav.Link href="#"><Twitter /></Nav.Link>
          <Nav.Link href="#"><Pinterest /></Nav.Link>
          <Nav.Link href="#"><Instagram /></Nav.Link>
        </Nav>

        {/* Right-aligned Icons */}
        <Nav>
          <Nav.Link href="#"><HouseFill /></Nav.Link>
          <Nav.Link href="#"><Search /></Nav.Link>
          <Nav.Link href="#"><PersonFill /></Nav.Link>
          <NavDropdown
            title={(
              <>
                <Cart />
                {' '}
                <span className="ms-1">{cartCount}</span>
              </>
)}
            id="cart-dropdown"
          >
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
