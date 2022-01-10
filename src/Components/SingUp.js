import React, { useState } from "react";

import { Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Family from '../images/Family.png';


import { useSelector, useDispatch } from 'react-redux'
import { singUp_action } from '../redux/actions/singUp.action';

const SingUp = () => {

    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()

    const { loading, payload } = useSelector(state => state.userSingUp)


    const nameHandler = (e) => {
        let name = e.target.value
        setName(name)
    }

    const lastNameHandler = (e) => {
        let lName = e.target.value
        setlastName(lName)
    }

    const emailHandler = (e) => {
        let email = e.target.value
        setEmail(email)
    }

    const passwordHandler = (e) => {
        let password = e.target.value
        setPassword(password)
    }

    const addressHandler = (e) => {
        let address = e.target.value
        setAddress(address)
    }

    const userNameHandler = (e) => {
        let userName = e.target.value
        setUserName(userName)
    }

    const userSingIn = () => {
        dispatch(singUp_action(email, userName, password, name, lastName, address))
    }


    return (
        <div className='container' >
            <div className='row text-center'>
                <h5 className='text-info'>dont have any acount yet?</h5>
                <p style={{ color: '#2be3c0 ' }}>dont worry,its to easy.
                    fill the inputs to join our big familly
                </p>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <img src={Family} className='img-fluid' />
                </div>
                <div className='col-md-5 ms-auto'>
                    <h5 style={{ color: '#9d6beb' }} className='mb-4'>enter the specifications for Sing up <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg></h5>
                    <FloatingLabel
                        onChange={nameHandler}
                        className='mb-3'
                        controlId="floatingInput"
                        label="youre name"
                    >
                        <Form.Control type="text" placeholder="yore name" />
                    </FloatingLabel>
                    <FloatingLabel
                        onChange={lastNameHandler}
                        controlId="floatingInput"
                        label="youre last name"
                    >
                        <Form.Control type="text" placeholder="youre last name" className='mb-3' />
                        <FloatingLabel controlId="floatingPassword" label="user name" className='mb-3'
                            onChange={userNameHandler}>
                            <Form.Control type="text" placeholder="user name" />
                        </FloatingLabel>
                    </FloatingLabel>
                    <FloatingLabel
                        onChange={emailHandler}
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className='my-3'
                        onChange={passwordHandler}>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="address" className='mb-3'
                        onChange={addressHandler}>
                        <Form.Control type="text" placeholder="address" />
                    </FloatingLabel>
                    {
                        <>
                            {loading ? <Spinner animation="border"
                                variant="primary" />
                                :
                                <Button disabled={payload} onClick={userSingIn} variant='outline-primary'>{payload ? payload : 'singUp'}</Button>}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}


export default SingUp;