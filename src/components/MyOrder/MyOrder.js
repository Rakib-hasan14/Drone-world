import React, { useEffect, useState } from 'react';
import useAthentication from '../Hooks/useAthentication';
import './MyOrder.css'

const MyOrder = () => {
    const [order , setOrder] = useState([]);
    const {user} = useAthentication();
    useEffect(()=> {
        fetch('https://murmuring-citadel-01807.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    } , [])

    const findOrder = order.find(order => order.email === user.email || '')
    const {name , _id , address , email , status , phone} = findOrder || '' ;

    const cancalOrder = (id) => {
        const corfirmation = window.confirm('Are you sure to cancal your order ?');
        if (corfirmation) {
            fetch(`https://murmuring-citadel-01807.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload()
                }
            });
        }
    }
    return (
        <div className='my-5  py-4 bg-danger text-center w-50 mx-auto text-white res-order'>
            {name !== undefined ? <div>
                
                <h1 className='mb-4'>My order</h1>
            <h3>{name}</h3>
            <h6>Order Id: {_id}</h6>
            <h5>Email: {email}</h5>
            <h5>Number: {phone}</h5>
            <p>Address: {address}</p>
            <p>Status: {status}</p>
            <button onClick={()=>cancalOrder(_id)} className='btn btn-warning text-danger fw-bold'>Cancal order</button>
                </div> : <h1>No orders</h1>
                }
               
                
        </div>
    );
};

export default MyOrder;