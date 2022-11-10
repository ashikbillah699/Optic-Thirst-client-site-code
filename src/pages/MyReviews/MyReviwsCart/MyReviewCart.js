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

                <label htmlFor="my-modal" className="btn">Edit</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit</h3>
                        <p className="py-4">You can editt and update</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">update!</label>
                        </div>
                    </div>
                </div>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyReviewCart;