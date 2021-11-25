import React, { useEffect, useState } from "react";


//import axios
import axios from "axios";


//import redux hook
import { useDispatch, useSelector } from "react-redux";

//import bootstrap
import { Card, Button } from 'react-bootstrap';


const ProductCards = () => {

    const [menClothing, setManCloth] = useState([])
    const [womenClothing, setWomenCloth] = useState([])
    const [electronic, setElectronic] = useState([])
    const [jeweleryes, setJeweleryes] = useState([])
    const category = useSelector(state => state.categories)

    console.log(category)

    //use redux hooks
    const dispath = useDispatch()


    const jsonHandler = (data) => {
        data.map(item => {
            switch (item.category) {
                case 'jewelery':
                    setJeweleryes([item])
                    break;
                case "men's clothing":
                    setManCloth([item])
                    break;
                case "women's clothing":
                    setWomenCloth([item])
                    break;
                case 'electronics':
                    setElectronic([item])
                    break;
                default:
                    break;
            }
        })
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                jsonHandler(response.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    console.log(jeweleryes)

    const renderCards = () => {
        switch (category) {
            case "jewelery":
                jeweleryes.map(items => {

                    <div className='container align-items-center' >
                        <div className='row'>
                            <div className='col-md-3'>
                                <Card className='mt-5 me-3' style={{
                                    backgroundColor: '#3ff7a5'
                                }} >
                                    <Card.Img variant="top" src={items.image} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            {items.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                })


            case "men's clothing":
                menClothing.map(items => {

                    <div className='container align-items-center' >
                        <div className='row'>
                            <div className='col-md-3'>
                                <Card className='mt-5 me-3' style={{
                                    backgroundColor: '#3ff7a5'
                                }} >
                                    <Card.Img variant="top" src={items.image} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            {items.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                })
            case "women's clothing":
                womenClothing.map(items => {

                    <div className='container align-items-center' >
                        <div className='row'>
                            <div className='col-md-3'>
                                <Card className='mt-5 me-3' style={{
                                    backgroundColor: '#3ff7a5'
                                }} >
                                    <Card.Img variant="top" src={items.image} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            {items.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                })
            case "electronics":

                electronic.map(items => {

                    <div className='container align-items-center' >
                        <div className='row'>
                            <div className='col-md-3'>
                                <Card className='mt-5 me-3' style={{
                                    backgroundColor: '#3ff7a5'
                                }} >
                                    <Card.Img variant="top" src={items.image} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>
                                            {items.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                })
            default:
                break;
        }
    }
    return (
        <>
            {renderCards()}
        </>
    )
}

export default ProductCards;