import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor:"white"}}>
            <Container>
            <Navbar.Brand style={{fontWeight:"bolder"}} href="#home">RatePX</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#features">About US</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header
