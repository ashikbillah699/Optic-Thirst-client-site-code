import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Ditails = () => {
    const { title, price, img, description } = useLoaderData();
    return (
        <div className='mb-14 mt-10 container m-auto'>
            <div className='text-center mb-10 '>
                <h3 className='text-4xl font-bold'>Service Ditails</h3>
                <p className='pt-5 text-1xl uppercase'> I am so pleased you have found your favorite picture</p>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
                <figure className='w-1/2'><img src={img} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-4xl font-extralight">{title}</h2>
                    <p className='text-1xl  leading-7 font-extralight'>{description}</p>
                    <p className='text-1xl font-extralight pt-5 pb-2'>You can buy it.</p>
                    <p className='text-1xl font-extralight'>Price : $ {price}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Listen</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ditails;