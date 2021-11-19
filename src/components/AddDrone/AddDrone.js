import React, { useRef, useState } from 'react';

const AddDrone = () => {
    const axios = require('axios');


    // Place order

    //Getting Value
    // const droneName = useRef('');
    // const description = useRef('');
    // const imgLink = useRef('');
    // const prices = useRef('');
    const [mainName , setMainName] = useState('')
    const [des , setDes] = useState('')
    const [img , setImg] = useState('')
    const [price , setPrice] = useState('')

    const droneName = e => {
        setMainName(e.target.value)
    }
    const description = e => {
        setDes(e.target.value)
    }
    const imgLink = e => {
        setImg(e.target.value)
    }
    const prices = e => {
        setPrice(e.target.value)
    }
    
    //Set All
    // const mainName = droneName.current.value;
    // const des = description.current.value;
    // const img = imgLink.current.value;
    // const price = prices.current.value;

    //POST data in /bookings
    const placeOrder = (e) => {
        const data = {
            name: mainName,
            des: des,
            img: img,
            price: price
        }
         axios.post('http://localhost:5000/drones', data)
          .then(res => {
            if(res.data.insertedId){
                  alert('Successfully Added!')
                  console.log(data)
                window.location.reload()
              }
          }  )
        
        e.preventDefault()
    }

    return (
        <div className='my-4'>
            <h1 className="text-center text-danger">Add a Drone</h1>
            <div>
            <form className='my-5 text-center mx-auto' onSubmit={placeOrder}>
                <label className='fw-bold me-2'>Name </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2'  type="text" onChange={droneName} required/>
                <br />
                <label className='fw-bold me-2'>Des </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="text" onChange={description} required/>
                <br />
                <label className='fw-bold me-2 text-end'>Img src </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="text" placeholder='Img Src' onChange={imgLink} required />
                <br />
                <label className='fw-bold me-2'>Price </label>
                <br />
                <input className='w-25 border-secondary rounded mb-2' type="text" placeholder='Prices' onChange={prices} required/>
                <br />
                <input className='btn btn-primary mt-3' type="submit" value="Add" />
            </form>
            </div>
        </div>
    );
};

export default AddDrone;