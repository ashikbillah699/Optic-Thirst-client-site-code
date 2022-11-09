import React from 'react';

const OrderRows = ({ order }) => {
    const { viwerName, photo, message, price } = order
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {viwerName}
            </td>
            <td>{message}</td>
            <td>{price}</td>
        </tr>
    );
};

export default OrderRows;