import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const { name, price, image, description, id } = props.product;

    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard bg-dark">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={image} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-light">{name}</h5>
                    <p style={{ color: 'white' }}>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold">$ {price}</h3>
                        <Link to={`/bookVehicle/${id}`}>
                            <button className="btn btn-danger">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;