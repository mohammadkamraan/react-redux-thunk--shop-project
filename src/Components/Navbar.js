import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

    // const [show, setShow] = useState(false);

    const dispath = useDispatch()

    const shown = useSelector(state => state.userLogin)

    console.log(shown)

    const handleClose = () => {
        dispath({
            type: 'hideLogin'
        })
    }
    const handleShow = () => {
        dispath({
            type: 'showLogin'
        })
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow position-sticky sticky-top '>
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
                                    <Button onClick={handleShow} variant="outline-success"
                                        className='mb-2 ms-lg-2 mt-2 mb-lg-0 mt-lg-0'>login
                                    </Button>
                                    <Modal show={shown} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='text-success' >Login form</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <FloatingLabel controlId="floatingPassword" label="user name" className='mb-3'
                                            >
                                                <Form.Control type="text" placeholder="user name" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="password"
                                            >
                                                <Form.Control type="password" placeholder="youre password" />
                                            </FloatingLabel>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                cancel
                                            </Button>
                                            <Button variant="info" >
                                                Login
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
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