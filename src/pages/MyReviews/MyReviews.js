import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCart from './MyReviwsCart/MyReviewCart';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://optic-thirst-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancle this review?')
        if (proceed) {
            fetch(`https://optic-thirst-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    return (


        <div className='container m-auto'>
            { }
            <div className='text-center mt-14  mb-7'>
                <h3 className='text-4xl font-bold'>My Review</h3>
                <p className='pt-2 text-1xl uppercase'> I am so pleased you have found all review</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table z-0 w-full">
                    <thead>
                        <tr>
                            <th>Service Image and Name</th>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ?
                                <>
                                    {orders?.map(order => <MyReviewCart key={order._id} handleDelete={handleDelete} order={order}></MyReviewCart>)}
                                </>
                                :
                                <tr className='text-4xl text-red-600 m-auto text-center'><td>No reviews were added'</td></tr>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;