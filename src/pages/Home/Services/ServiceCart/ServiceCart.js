import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { img, title, price, description } = service

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ?
                        <p> {description.slice(0, 100) + '...'} <Link className='text-sky-800' to='/details'>Read more</Link></p>
                        :
                        <>{description}</>
                }</p>
                <p>Price : {price}</p>
                <div className="card-actions">
                    <Link to='/details'><button className="btn btn-primary">Ditails</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;