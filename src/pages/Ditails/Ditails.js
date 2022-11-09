import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRows from './OrderRow/OrderRows';

const Ditails = (props) => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.fastname.value} ${form.lastname.value}`
        const photo = form.photo.value;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(name, phone, photo, email, message)

        const order = {
            service: _id,
            serviceName: { title },
            price,
            viwerName: name,
            photo,
            email,
            phone,
            message

        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your purchase has been confirmed!')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div className='container  m-auto'>
            {/* service details part */}
            <div className='mb-14 mt-10'>
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
            <div>
                {/* chackOut part */}
                <div>
                    <div className='text-center  mb-10'>
                        <h3 className='text-4xl font-bold'>Enter your info</h3>
                        <p className='pt-5 text-1xl uppercase'> Enter your information and add review</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5'>
                                <input name='fastname' type="text" placeholder="First name" className="input input-bordered w-full" />
                                <input name='lastname' type="text" placeholder="Last name" className="input input-bordered w-full" />
                            </div>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5'>
                                <input name='phone' type="number" placeholder="Phone number" className="input input-bordered w-full" />
                                <input name='email' type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                            </div>
                            <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                            <div className='text-center mt-5'>
                                <input type="submit" className="btn btn-active btn-ghost m-auto" value="Add Review" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* reviw part */}

                {
                    user?.email ?
                        <>
                            <div>
                                <div className='text-center mt-14  mb-7'>
                                    <h3 className='text-4xl font-bold'>Total Review</h3>
                                    <p className='pt-2 text-1xl uppercase'> I am so pleased you have found all review</p>
                                </div>
                                <div className="overflow-x-auto w-full">
                                    <table className="table z-0 w-full">
                                        <thead>
                                            <tr>
                                                <th>Picture </th>
                                                <th>Name</th>
                                                <th>Message</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders?.map(order => <OrderRows key={order._id} order={order}></OrderRows>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='my-20 text-center'>
                                <Link to='/login'><button className="btn btn-outline">Login</button></Link>

                                <p className='text-2xl text-red-600 pt-10'>Please login to add a review</p>

                            </div>

                        </>
                }
            </div>
        </div>
    );
};

export default Ditails;