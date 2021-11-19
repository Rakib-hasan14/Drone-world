import React, { useEffect, useState } from 'react';
import SingleDrone from '../SingleDrone/SingleDrone';
import './Drones.css'

const Drones = () => {
    const [drones , setDrones] = useState([])

    useEffect(()=> {
        fetch('https://murmuring-citadel-01807.herokuapp.com/drones')
        .then(res => res.json())
        .then(data => setDrones(data.slice(0,6)))
    } , [])
    return (
        <div className='my-5 text-center container'>
            <h1 className='text-primary'>Best drones</h1>
            <div className='grid-sec mt-4'>
                {
                    drones.map(drone => <SingleDrone
                    key={drone.name}
                    drone={drone}
                    ></SingleDrone>)
                }
            </div>
        </div>
    );
};

export default Drones;