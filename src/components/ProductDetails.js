import { Add, Remove } from '@material-ui/icons';
import React from 'react';

const ProductDetails = () => {
    return (
        <div className='bg-light'>
            <div className='container'>
                <main style={{ height: '540px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                <img className='img-fluid rounded' style={{ height: '400px' }} src='https://i.ibb.co/CmVCZt0/cup-coffee-with-drawn-heart-1286-225.jpg' alt="" />
                </div>
                <div className="col-md-6">
                <h1>
                Delicious Food
                </h1>
                <p className='text-secondary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.Laboriosam dolores excepturi impedit aperiam, facere rem!Possimus vero quae eveniet dolores.Doloribus commodi eos voluptates velit quod hic quidem nihil nisi.Dignissimos enim vero, ex maxime consequatur rem eius quisquam quasi repellendus iure reprehenderit eaque sit ducimus libero cum sed impedit?Tempore aut doloribus consequatur quasi est facere cumque laborum quod?
                </p>
                <h3>
                $20
                </h3>
                <div>
                <Remove></Remove>
                <span style={{ width: '100px', height: '100px', border: '1px solid', margin: '0px 5px'}}>100</span>
                <Add></Add>
                <button className='ms-5'>Add To Cart</button>
                </div>
            </div>
        </main>
            </div >
        </div >
    );
};

export default ProductDetails;