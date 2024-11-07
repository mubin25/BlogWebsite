import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Tourisim">Tourisim</Nav.Link>
            <Nav.Link href="/Farming">Farming</Nav.Link>
            <Nav.Link href="/Movie">Movie</Nav.Link>
            <Nav.Link href="/Food">Food</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navbar1
