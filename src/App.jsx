import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">MyApp</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#web">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#mobile">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Item href="#cloud">Cloud Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Button variant="outline-light" className="me-2">
              Login
            </Button>
            <Button variant="primary">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App
