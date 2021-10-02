import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from "@material-ui/icons";


const Food = ({food}) => {


    return (
        <div className="col-md-4 mt-5">
            <div class="card bg-light">
                <img class="card-img-top" src={food.imgURL} alt="Card image cap"/>
                <div class ="card-body">
                <h5 class ="card-title text-center">{food.name}</h5>
                <h1 class ="card-text text-center">${food.price}</h1>
                <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptas.</p>
                <Link className="form-control btn btn-danger"> <ShoppingCartOutlined /> Add To Cart</Link>
                </div>
                {/* as={Link} to={`/foods/${_id}`} */}
            </div>
        </div>
    );
};

export default Food;