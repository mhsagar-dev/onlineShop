import React from 'react';
import foodPic from '../images/food.png'

const Banner = () => {
    return (
        <div className='bg-light'>
            <div className='container'>
            <main style={{ height: '540px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>
                        Delicious Food
                    </h1>
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat quibusdam numquam temporibus laudantium illum?
                    </p>
                    <button className='btn btn-primary rounded-pill'>Start Your Journey</button>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded' src={foodPic} alt="" />
                </div>
            </main>
            </div>
        </div>

    );
};

export default Banner;