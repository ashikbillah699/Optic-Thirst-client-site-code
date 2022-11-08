import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { img, title, price, description } = service

    return (
        <div className="card  bg-base-100 shadow-xl">
            <img className='w-full h-full' src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title m-auto ">{title}</h2>
                <p>{
                    description.length > 100 ?
                        <> {description.slice(0, 100) + '...'}<Link className='text-sky-800' to='/details'>Read more details</Link></>
                        :
                        <>{description}</>
                }</p>
                <p>Price : $ {price}</p>
                <div className="card-actions">
                    <Link to='/details'><button className="btn btn-black">Ditails</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;