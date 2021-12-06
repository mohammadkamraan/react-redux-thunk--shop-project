import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Modal, FloatingLabel, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';


const Header = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const dispath = useDispatch()

    const shown = useSelector(state => state.modalLogin)
    const login = useSelector(state => state.userLogin)

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

    const getUserName = (e) => setUserName(e.target.value)

    const getPassword = (e) => setPassword(e.target.value)

    const handleLogin = () => {
        setLoading(true)
        axios.post('https://fakestoreapi.com/auth/login', {
            username: `${userName}`,
            password: `${password}`
        })
            .then(response => {
                console.log(response)
                if (response.data.status === 'Error') {
                    setError(response.data.msg)
                } else {
                    dispath({
                        type: 'loged_in'
                    })
                    dispath({
                        type: 'hideLogin'
                    })
                    setError('')
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleSingOut = () => {
        dispath({
            type: 'loged_out'
        })
    }

    const searchOnChangeHandler = (e) => {
        let maches = []
        if (searchValue.length > 0) {
            maches = products.filter(prod => {
                const regex = new RegExp(`${searchValue}`, 'gi');
                return prod.title.match(regex)
            })
        }
        console.log(maches)
        setSuggestions(maches)
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const searchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
        }
        searchProducts()
    }, [])

    const exitSearch = () => {
        setSearchValue('')
        setSuggestions([])
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow position-sticky sticky-top '>
                <Container >
                    <Navbar.Brand className='text-danger' href="#home">miki kala</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex gy-2">
                            <Link to='/'>
                                <Nav.Link >Home</Nav.Link>
                            </Link>
                            <Nav.Link >About</Nav.Link>
                            <NavDropdown title="us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">lorem</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">lorem</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">lorem</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated lorem</NavDropdown.Item>
                            </NavDropdown>
                            <div className='row  align-items-center'>
                                <div className='col-3'>
                                    {
                                        login ? <Button onClick={handleSingOut} variant="outline-danger"
                                            className='mb-2 ms-lg-2 mt-2 mb-lg-0 mt-lg-0'>Sing.out
                                        </Button>
                                            :
                                            <Button onClick={handleShow} variant="outline-success"
                                                className='mb-2 ms-lg-2 mt-2 mb-lg-0 mt-lg-0'>Login
                                            </Button>
                                    }
                                    <Modal show={shown} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='text-success' >Login form</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p className='text-danger h-5 my-3'>{error}</p>
                                            <FloatingLabel onChange={getUserName} controlId="floatingPassword" label="user name" className='mb-3'
                                            >
                                                <Form.Control type="text" placeholder="user name" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                onChange={getPassword}
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
                                            {
                                                loading ? <Spinner animation="border" variant="info" />
                                                    : <Button onClick={handleLogin} variant="info" disabled={userName.length == 0 || password.length == 0} >
                                                        login
                                                    </Button>

                                            }
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </Nav>
                        <Form className="d-flex inline-block">
                            <FormControl
                                value={searchValue}
                                onChange={searchOnChangeHandler}
                                type="search"
                                placeholder="Search"
                                className="me-2  align-items-center"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {suggestions && suggestions.map(prd =>
                // console.log(prd.title)
                <Link onClick={exitSearch} to={`/product/${prd.id}`} className='d-flex block text-decoration-none search'>
                    < p key={prd.id} > {prd.title}</p>
                </Link>
            )
            }
        </header >
    )
}


export default Header;