'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Footer Section
const FooterMenu = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col>
          NAVIGATION
          <hr className="bg-light" />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          MAIN MENU
          <hr className="bg-light" />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          CONNECT
          <hr className="bg-light" />
          <div>Sign Up For The Latest Updates</div>
          <Form className="d-flex">
            <Form.Control type="text" placeholder="Enter Email Address" className="me-2" />
            <Button variant="dark">Join</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
