import React from 'react';


const SingleReview = ({singleRv }) => {
    var Rating = require('react-rating');
    const {name , email , rvDes }  = singleRv;
    return (
        <div className='review text-center mt-4 border rounded py-3 px-4'>
            <h3>User : {name}</h3>
            <p className="text-secondary my-3">{rvDes}</p>
            {/* <Rating /> */}
            {/* //Trying to use rating but not working .If i uncomment Rating then in my website there show an error!! */}
        </div>
    );
};

export default SingleReview;