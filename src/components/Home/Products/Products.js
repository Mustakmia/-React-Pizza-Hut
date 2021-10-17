import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./item.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <section id="order" className="mt-5 container">

            <h2 className="text-center fw-bolder">Our <span style={{ color: '#ff4d30' }}>Food</span></h2>
            <p className="text-center">To contribute to positive change and achieve our <br /> sustainability goals with many extraordinary</p>


            <div className="row">
                {
                    products.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Products;