import React, { useEffect, useState } from 'react';
import ServiceCart from '../Home/Services/ServiceCart/ServiceCart';

const AllImgCatagory = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' container m-auto my-20'>

            <div className='text-center'>
                <h3 className='text-4xl font-bold'>All Image Catagory</h3>
                <p className='pt-5 text-1xl uppercase'> I am so pleased you have found my online home!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }

            </div>
        </div>
    );
};

export default AllImgCatagory;