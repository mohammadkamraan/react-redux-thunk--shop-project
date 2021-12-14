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
    const [cartModal, setCartModal] = useState(false)
    const [login, setLogin] = useState(false)

    const dispath = useDispatch()

    const shown = useSelector(state => state.modalLogin)
    // const login = useSelector(state => state.userLogin)

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
                    localStorage.setItem('login', true)
                    let userLogin = localStorage.getItem('login')
                    userLogin = JSON.parse(userLogin)
                    setLogin(userLogin)
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
        localStorage.setItem('login', false)
        let userLogin = localStorage.getItem('login')
        userLogin = JSON.parse(userLogin)
        setLogin(userLogin)
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
        let initialLogin = localStorage.getItem('login')
        initialLogin = JSON.parse(initialLogin)
        setLogin(initialLogin)
    }, [login])

    const exitSearch = () => {
        setSearchValue('')
        setSuggestions([])
    }

    const showCarts = () => {
        let userCarts = localStorage.getItem('data')
        userCarts = JSON.parse(userCarts)
        console.log(userCarts)
        if (userCarts.length === 0) {
            <p className='text-info h-3'>you dont buy enything yet</p>
        } else {
            return (userCarts.map(items => {
                return (
                    <div className='d-flex' key={items.index}>
                        <p>{items.title}</p>
                        <p>{items.quantity}</p>|<p>{items.price}$</p>
                    </div>
                )
            }))
        }
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow position-sticky sticky-top '>
                <Container >
                    <Link to='/' className='text-danger navbar-brand'>miki kala</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex gy-2">
                            <Link to='/' className='nav-link'>
                                Home
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
                        <svg onClick={() => setCartModal(true)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                        </svg>
                        <Modal show={cartModal} onHide={() => setCartModal(false)}>
                            <Modal.Header closeButton />
                            <Modal.Body>
                                {showCarts()}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setCartModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {suggestions && suggestions.map(prd =>
                <Link onClick={exitSearch} to={`/product/${prd.id}`} className='d-flex block text-decoration-none search'>
                    < p key={prd.id} > {prd.title}</p>
                </Link>
            )
            }
        </header >
    )
}


export default Header;