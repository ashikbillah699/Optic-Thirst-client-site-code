import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart/ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=' container m-auto my-20'>

            <div className='text-center'>
                <h3 className='text-4xl font-bold'>My Click service</h3>
                <p className='pt-5 text-1xl uppercase'> I am so pleased you have found my online home!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }

            </div>
            <div className='text-center mt-16'>
                <Link to='/servicecatagory'><button className="btn btn-wide">ALL IMAGE</button></Link>
            </div>
        </div>
    );
};

export default Services;