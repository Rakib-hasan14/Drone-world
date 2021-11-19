import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [review , setReview] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    
    return (
        <div>
            <h1 className='text-center text-primary fw-bold'>All Reviews</h1>
            <div className="grid-sec container">
                {
                 review.map(singleRv => <SingleReview
                 key={singleRv._id}
                 singleRv={singleRv}
                 ></SingleReview>)           
                }
            </div>
        </div>
    );
};

export default Reviews;