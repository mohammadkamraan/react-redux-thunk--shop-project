import React, { useEffect, useState } from 'react';

//import Router hook
import { useParams } from 'react-router';

//import axios
import axios from 'axios';

//import bootstrap
import { Spinner, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ProductCard = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoding] = useState(true)
    const [login, setLogin] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);



    const params = useParams()
    const dispath = useDispatch()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data)
                setLoding(false)
            })
            .catch(err => console.log(err))
    }, [])


    const handleShowLogin = () => {
        dispath({
            type: 'showLogin'
        })
    }

    const incrace = () => {
        let quantityy = quantity
        quantityy++
        setQuantity(quantityy)
    }
    const dicrement = () => {
        let quantityy = quantity
        quantityy--
        setQuantity(quantityy)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(product)
    return (
        <>
            {
                loading ? <p className='mt-5 ms-auto me-auto d-flex justify-content-center h-2'>
                    loading...
                    <Spinner animation="grow"
                        variant="warning" />
                </p>
                    :
                    <div className='container mt-5 d-flex align-items-center'>
                        <div className="card mb-3" style={{ backgroundColor: '#33eee5' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} class="img-fluid rounded-start h-100" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">quantity: {quantity}</p>
                                        <p className="card-text d-flex align-items-end">{product.price * quantity}$</p>
                                        {login ? <> <Button onClick={handleShow} variant='success align-items-center'>add to cart
                                            <span className='ms-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </span>
                                        </Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            <Button onClick={incrace} className='ms-2 me-3' variant='success'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                </svg></Button>
                                            <Button onClick={dicrement} disabled={quantity === 1} variant='success'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                                </svg>
                                            </Button>
                                        </>
                                            : <Button onClick={handleShowLogin} variant='warning'>for shopping you have to login</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>


    )
}

export default ProductCard;