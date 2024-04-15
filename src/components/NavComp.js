import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavComp = () => {
    return (
        <Navbar variant='dark' className='bar' >
            <Container>
                <Navbar.Brand href="home">Xenon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#faq">Faq</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComp;
