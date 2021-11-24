import React from "react";

//import bootstrap
import { Form, FormControl, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import images
import Family from '../images/Family.png';

const LoginSection = () => {
    return (

        <div className='container' >
            <div className='row text-center'>
                <h5 className='text-info'>dont have any acount yet?</h5>
                <p style={{ color: '#2be3c0 ' }}>dont worry,its to easy.
                    fill the inputs billow to join into oure big familly
                </p>
            </div>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <img src={Family} className='img-fluid' />
                </div>
                <div className='col-md-5 ms-auto'>
                    <h5 style={{ color: '#9d6beb' }} className='mb-4'>enter the specifications for login <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg></h5>
                    <FloatingLabel
                        className='mb-3'
                        controlId="floatingInput"
                        label="youre name"
                    >
                        <Form.Control type="email" placeholder="yore name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className='my-3'>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="confim youre pass word" className='mb-3'>
                        <Form.Control type="password" placeholder="confim youre pass word" />
                    </FloatingLabel>
                    <Button variant='outline-primary'>login</Button>
                </div>
            </div>
        </div>
    )
}


export default LoginSection;