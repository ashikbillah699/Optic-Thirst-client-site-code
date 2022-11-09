import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { _id, img, title, price, description } = service

    return (
        <div className="card  bg-base-100 shadow-xl">
            <img className='w-full h-full' src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title  text-2xl font-extralight	">{title}</h2>
                <p className=' font-extralight py-1 text-sm		'>
                    {
                        description.length > 100 ?
                            <> {description.slice(0, 100) + '...'}<Link className='text-sky-800' to={`/details/${_id}`}>Read more details</Link></>
                            :
                            <>{description}</>
                    }
                </p>
                <p className=' font-extralight pb-3 text-sm	'>Price : $ {price}</p>
                <div className="card-actions ">
                    <Link to={`/details/${_id}`}><button className="btn btn-outline px-16 py-0 font-extralight">Ditails</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;