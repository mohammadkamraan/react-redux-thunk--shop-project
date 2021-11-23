import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow ' sticky="top">
                <Container >
                    <Navbar.Brand className='text-danger' href="#home">miki kala</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex gy-2">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">about</Nav.Link>
                            <NavDropdown title="us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">lorem</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">lorem</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">lorem</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated lorem</NavDropdown.Item>
                            </NavDropdown>
                            <div className='rowd-flex align-items-center'>
                                <div className='col-3'>
                                    <Button variant="outline-success"
                                        className='mb-2 ms-lg-2 mt-2 mb-lg-0 mt-lg-0'>login
                                    </Button>
                                </div>
                            </div>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2  align-items-center"
                                aria-label="Search"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;