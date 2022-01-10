import React, { useEffect, useState } from 'react';

//import Router hook
import { useParams } from 'react-router';

//import axios
import axios from 'axios';

//import bootstrap
import { Spinner, Button, Modal, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart_action, getProduct } from '../redux/actions/getProduct.action';
import { userLogin } from '../redux/reducers/userLogin';
import SkeletonProduct from './skeletons/skeletonProduct';

const ProductCard = () => {

    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const { login } = useSelector(state => state.userLogin)
    const ID = useSelector(state => state.userID)
    const { loading, product, error } = useSelector(state => state.product)

    const params = useParams()
    const dispath = useDispatch()

    useEffect(() => {
        dispath(getProduct(params.id))
    }, [params.id, userLogin])

    const handleShowLogin = () => {
        dispath({
            type: 'showLogin'
        })
    }

    const increase = () => {
        let quantityy = quantity
        quantityy++
        setQuantity(quantityy)
    }

    const decrease = () => {
        let quantityy = quantity
        quantityy--
        setQuantity(quantityy)
    }

    const addToCart = () => {
        dispath(addToCart_action(ID, product.id, quantity))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { buy, buyMsg, loadingCart } = useSelector(state => state.addCart)

    return (
        <>
            {
                loading ?
                    <SkeletonProduct />
                    :
                    <div className='container mt-5 d-flex align-items-center position-relative'>
                        <div className="card mb-3" style={{ backgroundColor: '#33eee5' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} className='img-fluid rounded-start h-100' />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">quantity: {quantity}</p>
                                        <Badge bg='info' text='dart' className='position-absolute top-0 start-0'>
                                            {product.price} $
                                        </Badge>
                                        {login ? <> <Button onClick={handleShow} variant='success align-items-center'>add to cart
                                            <span className='ms-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </span>
                                        </Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>youre order</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p className='h-3 text-danger'>{buyMsg}</p>
                                                    <p className='h5'>are you sure wants to buy this?</p>
                                                    <p className='d-flex'>
                                                        {product.title}
                                                    </p>
                                                    <p className='d-flex'>
                                                        quantity: {quantity}
                                                    </p>
                                                    <p className='d-flex'>
                                                        {product.price * quantity} $
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        cancel
                                                    </Button>

                                                    <>
                                                        {loadingCart ? <Spinner animation="grow"
                                                            variant="primary" />
                                                            : buy ?
                                                                <Button variant="info" disabled>
                                                                    Your purchase was successful
                                                                </Button>
                                                                :
                                                                <Button variant="primary" onClick={addToCart}>
                                                                    buy
                                                                </Button>}
                                                    </>

                                                </Modal.Footer>
                                            </Modal>
                                            <Button onClick={increase} className='ms-2 me-3' variant='success'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-up' viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                </svg></Button>
                                            <Button onClick={decrease} disabled={quantity === 1} variant='success'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-down' viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
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