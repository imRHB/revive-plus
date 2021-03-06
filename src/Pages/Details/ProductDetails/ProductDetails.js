import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css';

const ProductDetails = () => {
    const { pdId } = useParams();

    const [prodDetails, SetProdDetails] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/revive-plus-data/main/products.json')
            .then(res => res.json())
            .then(data => SetProdDetails(data));
    }, []);

    useEffect(() => {
        const productInfo = prodDetails.find(prod => prod?.id == pdId);
        setDetails(productInfo);
    }, [prodDetails]);

    return (
        <div className="container my-5">
            <div className="d-flex align-items-center justify-content-center bg-light rounded-3 pd-detail-card">
                <div className="prod-img">
                    <img src={details?.image} alt="" />
                </div>
                <div className="mx-3">
                    <h3>{details?.name}</h3>
                    <p className="fs-4 fw-bold">${details?.price}</p>
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;