import React, { useState } from 'react';
import useAthentication from '../Hooks/useAthentication';

const Review = () => {
    const axios = require('axios');
    const {user} = useAthentication();
    const [rvDes , setRevDes] = useState('')
    const [rate , setRate] = useState(0)
    const {displayName , email} = user;

    const getDes = (e)=> {
        setRevDes(e.target.value)
    }
    const getRate = (e)=> {
        setRate(e.target.value)
    }

    const handleReview = (e) => {
        const data = {
            name: displayName,
            email: email,
            rvDes: rvDes,
            rate: rate,
        }
         axios.post('https://murmuring-citadel-01807.herokuapp.com/reviews', data)
          .then(res => {
            if(res.data.insertedId){
                  alert('Thank You for yor review!')
                window.location.reload()
              }
          }  )
        e.preventDefault()
    }
    return (
        <div className='my-5'>
            <h1 className='text-danger text-center'>Review Here!</h1>
            <form onSubmit={handleReview} className='mx-auto text-center w-50'>
                <label>Name</label>
                <br />
                <input type="text" value={displayName} readOnly/>
                <br /><br />
                <label>Email</label>
                <br />
                <input type="text" value={email} readOnly/>
                <br /><br />
                <label>Review</label>
                <br />
                <textarea onChange={getDes} cols="25" rows="5" required></textarea>
                <br /><br />
                <label>Rating</label>
                <br />
                <input onChange={getRate} type="number" required/>
                <br />
                <input className="btn btn-danger text-white fw-bold mt-3" type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Review;