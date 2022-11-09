import React, { useEffect, useState } from 'react';

const MyReviewCart = ({ order, handleDelete }) => {
    const { service, viwerName, message, _id } = order
    const [review, setReview] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [service])


    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-24 h-24">
                            {
                                review?.img &&
                                <img src={review.img} alt="" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{review?.title}</div>
                    </div>
                </div>
            </td>
            <td>
                {viwerName}
            </td>
            <td>{message}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyReviewCart;