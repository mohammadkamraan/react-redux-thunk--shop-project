import React, { useEffect, useState } from "react";

import { Card, Button } from 'react-bootstrap';

//import images
import menCloth from '../images/menCloth.png';
import womenCloth from '../images/womenCloth.png';
import electronic from '../images/electronic.png';
import jewelery from '../images/jewelery.png';

//import react-router
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../redux/actions/getCategories.action'



const CategoryCards = () => {

    // categories[2]= mens clothing
    // categories[3]= womens clothing
    // categories[1]= jewelery
    // categories[0]= electronic

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const { categories, errMsg } = useSelector(state => state.categories)

    console.log(categories, errMsg)

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
                                    <Card.Title>men clothing</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`category/${categories[2]}`}><Button variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3 my-3 my-md-0'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#3ab1cf'
                            }}>
                                <Card.Img variant="top" src={womenCloth} />
                                <Card.Body>
                                    <Card.Title>women clothing</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`category/${categories[3]}`}><Button variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#f60446'
                            }}>
                                <Card.Img variant="top" src={jewelery} />
                                <Card.Body>
                                    <Card.Title>jewelery</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`category/${categories[1]}`}> <Button variant="primary">Go somewhere</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3 my-3 my-md-0'>
                            <Card className='mt-5' style={{
                                backgroundColor: '#f68e04'
                            }}>
                                <Card.Img variant="top" src={electronic} />
                                <Card.Body>
                                    <Card.Title>electronic</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Link to={`category/${categories[0]}`}><Button variant="primary">Go somewhere</Button></Link>
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