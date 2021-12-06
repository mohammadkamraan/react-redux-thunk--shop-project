import React from "react";

import NotFound from '../images/NotFound.png';

const PageNotFound = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <img src={NotFound} alt='page not found' className='img-fluid mt-5 ms-auto me-auto d-flex ' />
                </div>
            </div>

        </div>
    )

}

export default PageNotFound;