import React, { useEffect, useState } from "react";


//import axios
import axios from "axios";

// import Router
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//import redux hook
import { useDispatch, useSelector } from "react-redux";

//import bootstrap
import { Card, Button } from 'react-bootstrap';




const ProductCards = () => {

    const [menClothing, setManCloth] = useState([])
    const [womenClothing, setWomenCloth] = useState([])
    const [electronic, setElectronic] = useState([])
    const [jeweleries, setJeweleries] = useState([])
    const [allCategories, setAllCategories] = useState([])

    //use redux hooks
    const dispath = useDispatch()

    //use Router hook
    const params = useParams()


    const jsonHandler = (data) => {
        data.map(item => {
            switch (item.category) {
                case 'jewelery':
                    let jeweleriess = jeweleries
                    jeweleries.push(item)
                    setJeweleries(jeweleriess)
                    break;
                case "men's clothing":
                    let menCloth = menClothing
                    menCloth.push(item)
                    setManCloth(menCloth)
                    break;
                case "women's clothing":
                    let womanClothes = womenClothing
                    womanClothes.push(item)
                    setWomenCloth(womanClothes)
                case 'electronics':
                    let elec = electronic
                    elec.push(item)
                    setElectronic(elec)
                default:
                    setAllCategories(item)
            }
        })
    }
    const showJewelery = () => {
        return (jeweleries.map(items => {
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

    const showMenClothing = () => {
        return (menClothing.map(items => {
            return (
                <div className='col-md-3'>
                    <Link to={`/product`} className='text-dark text-decoration-none'>
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
                    </Link>
                </div>
            )
        }))
    }
    const showWomenClothing = () => {
        return (womenClothing.map(items => {
            return (
                <div className='col-md-3'>
                    <Link to={`/product`} className='text-dark text-decoration-none'>
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
                    </Link>
                </div>
            )
        }))
    }
    const showElectronics = () => {
        return (electronic.map(items => {
            return (
                <div className='col-md-3'>
                    <Link to={`/product`} className='text-dark text-decoration-none'>
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
                    </Link>
                </div>
            )
        }))
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                jsonHandler(response.data)
            })
            .catch(err => { console.log(err) })
    }, [])




    const renderCards = () => {
        switch (params.category) {
            case "jewelery":
                return showJewelery()
            case "men's clothing":
                return showMenClothing()
            case "women's clothing":
                return showWomenClothing()
            case "electronics":
                return showElectronics()
        }
    }


    return (
        <>
            < div className='container align-items-center' >
                <div className='row'>
                    {renderCards()}
                </div>
            </div>
        </>
    )
}

export default ProductCards;