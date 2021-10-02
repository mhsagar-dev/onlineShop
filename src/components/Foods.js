import React from 'react';
import { allFoods } from '../data';
import Food from './Food';

const Foods = () => {
    return (
        <div className='container mt-5'>
             <h1 className='mt-5 text-center'>Choose Yours</h1>
            <div className='row'>
            {
                allFoods.map((food) => (
                    <Food food={food} key={food.id} />
                ))
            }
            </div>
        </div>
    );
};

export default Foods;