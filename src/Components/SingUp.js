import React, { useEffect, useState } from "react";

//import bootstrap
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import images
import Family from '../images/Family.png';

//import axios
import axios from "axios";


const SingUp = () => {

    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [userName, setUserName] = useState('')


    const nameHanler = (e) => {
        let name = e.target.value
        setName(name)
    }

    const lastNameHanler = (e) => {
        let lName = e.target.value
        setlastName(lName)
    }

    const emailHanler = (e) => {
        let email = e.target.value
        setEmail(email)
    }

    const passwordHanler = (e) => {
        let password = e.target.value
        setPassword(password)
    }

    const addressHanler = (e) => {
        let address = e.target.value
        setAddress(address)
    }

    const userNameHanler = (e) => {
        let userName = e.target.value
        setUserName(userName)
    }

    const userSingIn = () => {
        axios.post('https://fakestoreapi.com/users',
            {
                email: `${email}`,
                username: `${userName}`,
                password: `${password}`,
                name: {
                    firstname: `${name}`,
                    lastname: `${lastName}`
                },
                address: {
                    city: `${address}`,
                    street: '',
                    number: '',
                    zipcode: '',
                    geolocation: {
                        lat: '',
                        long: ''
                    },
                    phone: ''
                }
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container' >
            <div className='row text-center'>
                <h5 className='text-info'>dont have any acount yet?</h5>
                <p style={{ color: '#2be3c0 ' }}>dont worry,its to easy.
                    fill the inputs billow to join into our big familly
                </p>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <img src={Family} className='img-fluid' />
                </div>
                <div className='col-md-5 ms-auto'>
                    <h5 style={{ color: '#9d6beb' }} className='mb-4'>enter the specifications for Sing up <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg></h5>
                    <FloatingLabel
                        onChange={nameHanler}
                        className='mb-3'
                        controlId="floatingInput"
                        label="youre name"
                    >
                        <Form.Control type="text" placeholder="yore name" />
                    </FloatingLabel>
                    <FloatingLabel
                        onChange={lastNameHanler}
                        controlId="floatingInput"
                        label="youre last name"
                    >
                        <Form.Control type="text" placeholder="youre last name" className='mb-3' />
                        <FloatingLabel controlId="floatingPassword" label="user name" className='mb-3'
                            onChange={userNameHanler}>
                            <Form.Control type="text" placeholder="user name" />
                        </FloatingLabel>
                    </FloatingLabel>
                    <FloatingLabel
                        onChange={emailHanler}
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className='my-3'
                        onChange={passwordHanler}>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="address" className='mb-3'
                        onChange={addressHanler}>
                        <Form.Control type="text" placeholder="address" />
                    </FloatingLabel>
                    <Button onClick={userSingIn} variant='outline-primary'>Sing up</Button>
                </div>
            </div>
        </div>
    )
}


export default SingUp;