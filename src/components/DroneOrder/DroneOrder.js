import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAthentication from '../Hooks/useAthentication';

const DroneOrder = () => {
    const axios = require('axios');
    const { id } = useParams();
    const [order , setOrder] = useState({})
    const {user} = useAthentication();

    const {displayName , email} = user;
    
    useEffect(()=> {
        fetch(`https://murmuring-citadel-01807.herokuapp.com/drones/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    // Place order

    //Getting Value
    const userName = useRef('');
    const userEmail = useRef('');
    const [address , setAddress ] = useState('')
    const [phone , setphone ] = useState('')
    
    //Set email and name
    const mainName = userName.current.value;
    const mainEmail = userEmail.current.value;


    //Set other info
    const userAddress = e =>{
        setAddress(e.target.value)
    }
    const userPhone = e =>{
        setphone(e.target.value)
    }
    


    //POST data in /bookings
    const placeOrder = (e) => {
        const data = {
            name: mainName,
            email: mainEmail,
            address: address,
            phone: phone,
            status: 'Pending'
        }
         axios.post('https://murmuring-citadel-01807.herokuapp.com/orders', data)
          .then(res => {
            if(res.data.insertedId){
                  alert('Successfully Order. Thank You!')
                window.location.reload()
              }
          }  )
        
        e.preventDefault()
    }

    const {name , img , des , price } = order;
    return (
        <div className='mx-auto w-75 text-center my-5'>
            <div>
                <h1 className='text-primary mb-3'>{name}</h1>
                <img src={img} alt="" />
                <p className="text-secondary w-50 mx-auto mt-4 fw-bold">{des}</p>
                <h4 className='fw-bold'>Price: {price}</h4>
            </div>
            <form className='my-5' onSubmit={placeOrder}>
                <label className='fw-bold me-2'>Name </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2'  type="text" value={displayName} ref={userName} readOnly/>
                <br />
                <label className='fw-bold me-2'>Email </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="text" value={email} ref={userEmail} readOnly/>
                <br />
                <label className='fw-bold me-2 text-end'>Address </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="text" placeholder='Address' onChange={userAddress} required />
                <br />
                <label className='fw-bold me-2'>Phone </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="number" placeholder='Phone Number' onChange={userPhone} required/>
                <br />
                <input className='btn btn-primary mt-3' type="submit" value="Order now" />
            </form>
        </div>
    );
};

export default DroneOrder;