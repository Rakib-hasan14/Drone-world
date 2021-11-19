import React, { useEffect, useState } from 'react';
import SingleDrone from '../SingleDrone/SingleDrone';

const AllDrons = () => {
    const [drones , setDrones] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/drones')
        .then(res => res.json())
        .then(data => setDrones(data))
    } , [])
    return (
        <div className='text-center container my-5'>
            <h1 className='text-primary'>All drones</h1>
            <div className="grid-sec">
                {
                    drones.map(drone => <SingleDrone
                    key={drone._id}
                    drone={drone}
                    ></SingleDrone>)
                }
            </div>
        </div>
    );
};

export default AllDrons;