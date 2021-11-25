import React, { useEffect, useState } from "react";

import { Card, Button } from 'react-bootstrap';

//import images
import menCloth from '../images/menCloth.png';
import womenCloth from '../images/womenCloth.png';
import elec from '../images/elec.png';
import jewelery from '../images/jewelery.png';

//import react-router
import { Link } from "react-router-dom";

//import axios
import axios from "axios";


//import redux hook
import { useDispatch } from "react-redux";

//import actions
import { product } from '../actions';

const CategoryCards = () => {

    const [categories, setCategories] = useState('')
    const dispath = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    const sendMenClothingToRedux = () => {
        dispath(product(categories[2]))
    }

    const sendWomenClothingToRedux = () => {
        dispath(product(categories[3]))
    }

    const sendJeweleryesToRedux = () => {
        dispath(product(categories[1]))
    }

    const sendElectronicsToRedux = () => {
        dispath(product(categories[0]))
    }
    console.log(categories[2])
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #9433d8 " fill-opacity="1" d="M0,288L120,266.7C240,245,480,203,720,197.3C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div style={{ backgroundColor: '#9433d8' }}>
                <div className='container align-items-center' >
                    <div className='row'>
                        <div className='col-md-3'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#3ff7a5'
                            }} >
                                <Card.Img variant="top" src={menCloth} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`./${categories[2]}`}><Button onClick={sendMenClothingToRedux} variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3 my-3 my-md-0'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#3ab1cf'
                            }}>
                                <Card.Img variant="top" src={womenCloth} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`./${categories[3]}`}><Button onClick={sendWomenClothingToRedux} variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#f60446'
                            }}>
                                <Card.Img variant="top" src={jewelery} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`./${categories[1]}`}> <Button onClick={sendJeweleryesToRedux} variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3 my-3 my-md-0'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#f68e04'
                            }}>
                                <Card.Img variant="top" src={elec} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`./${categories[0]}`}><Button onClick={sendElectronicsToRedux} variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #9433d8 " fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>
        </>
    )

}

export default CategoryCards;