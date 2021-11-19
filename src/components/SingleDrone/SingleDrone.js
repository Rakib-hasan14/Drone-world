import React from 'react';
import { Link } from 'react-router-dom';
import './Singledrone.css'

const SingleDrone = ({drone}) => {
    const {_id, img , name , des , price} = drone; 
    return (
        <div className='drones'>
            <img className='w-100' src={img} alt="" />
            <div className='drone-det mt-3'>
                <h2>{name}</h2>
                <p className="text-secondary">{des.slice(0,150)}</p>
                <h6>{price}</h6>
                <Link to={`/alldrones/${_id}`}>
                <button className='btn btn-outline-primary mb-3'>Place order</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleDrone;