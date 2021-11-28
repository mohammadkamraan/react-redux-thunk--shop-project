import React, { useEffect, useState } from "react";


//import axios
import axios from "axios";

// import Router
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//import redux hook
import { useDispatch, useSelector } from "react-redux";

//import bootstrap
import { Card } from 'react-bootstrap';




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
                        </Card>
                    </Link>
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