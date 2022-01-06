import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { Card, Button, Spinner } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { getProducts_action } from "../redux/actions/getProducts.action";


const ProductCards = () => {

    const params = useParams()
    const dispatch = useDispatch()

    const allProducts = useSelector(state => state.products)


    const showCategory = () => {
        return (allProducts.category?.map(items => {
            return (
                <div className='col-md-3'>

                    <Card className='me-3  mt-5' style={{
                        backgroundColor: '#3ff7a5'
                    }} >
                        <Card.Img variant="top" className="img-fluid"
                            style={{ height: '190px' }}
                            src={items.image} />
                        <Card.Body>
                            <Card.Text className='h6'>
                                {items.title}
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/product/${items.id}`} className='text-dark text-decoration-none'>
                            <Button className='w-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </Button>
                        </Link>
                    </Card>
                </div>
            )
        }))

    }

    useEffect(() => {
        dispatch(getProducts_action(params.category))
    }, [])

    return (
        <>
            {
                allProducts.loading ?
                    <p className='mt-5 ms-auto me-auto d-flex justify-content-center h-2'>
                        loading...
                        <Spinner animation="grow"
                            variant="warning" />
                    </p>
                    :
                    < div className='container align-items-center' >
                        <div className='row'>
                            {showCategory()}
                        </div>
                    </div>
            }

        </>
    )
}

export default ProductCards;