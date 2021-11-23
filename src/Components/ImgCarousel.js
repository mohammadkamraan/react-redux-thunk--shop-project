import React from "react";

import { Card, Button } from 'react-bootstrap';

import menCloth from '../images/menCloth.png';
import womenCloth from '../images/womenCloth.png';
import elec from '../images/elec.png';
import jewelery from '../images/jewelery.png';


const ImgCarousel = () => {
    return (
        <>
            <div className='container align-items-center'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Card style={{
                            backgroundColor: '#3ff7a5'
                        }} >
                            <Card.Img variant="top" src={menCloth} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 my-3 my-md-0'>
                        <Card style={{
                            backgroundColor: '#3ab1cf'
                        }}>
                            <Card.Img variant="top" src={womenCloth} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card style={{
                            backgroundColor: '#f60446'
                        }}>
                            <Card.Img variant="top" src={jewelery} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3 my-3 my-md-0'>
                        <Card style={{
                            backgroundColor: '#f68e04'
                        }}>
                            <Card.Img variant="top" src={elec} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ImgCarousel;