import React, { useEffect, useState } from 'react';
import ManagingOrder from '../ManagingOrders/ManagingOrder';

const ManageAllOrder = () => {
    const [orders , setOrders] = useState([])
    useEffect(()=> {
        fetch('https://murmuring-citadel-01807.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [])
    return (
        <div>
            <h1 className='text-danger text-center'>Manage all order</h1>
            <div className="container">
                {
                    orders.map(ord => <ManagingOrder
                    key={ord._id}
                    ord={ord}
                    ></ManagingOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrder;