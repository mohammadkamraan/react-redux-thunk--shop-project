import React, { useEffect, useState } from 'react';

//import Router hook
import { useParams } from 'react-router';

//import axios
import axios from 'axios';

//import bootstrap
import { Spinner, Button } from 'react-bootstrap';

const ProductCard = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoding] = useState(true)
    const [login, setLogin] = useState(true)
    const params = useParams()

    console.log(params.id)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => console.log(err))
        setLoding(false)
    }, [])

    console.log(product)
    return (
        <>
            {
                loading ? <Spinner animation="grow"
                    className='  mt-5 ms-auto me-auto '
                    variant="warning" />
                    :
                    <div className='container mt-5 d-flex align-items-center'>
                        <div class="card mb-3" style={{ backgroundColor: '#33eee5' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={product.image} class="img-fluid rounded-start" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                        <p class="card-text">{product.description}</p>
                                        {login ? <Button variant='success align-items-center'>add to cart
                                            <span className='ms-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </span>
                                        </Button>
                                            : <Button disabled variant='warning'>for shopping you have to login</Button>}
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