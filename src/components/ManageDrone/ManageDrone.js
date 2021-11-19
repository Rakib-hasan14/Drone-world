import React, { useEffect, useState } from 'react';
import ManagingDrones from '../ManagingDrones/ManagingDrones';

const ManageDrone = () => {
    const [drones , setDrones] = useState([])
    useEffect(()=> {
        fetch('https://murmuring-citadel-01807.herokuapp.com/drones')
        .then(res => res.json())
        .then(data => setDrones(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-danger">Manage Drone</h1>
            <div className='container manage-drone'>
                {
                        drones.map(drn => <ManagingDrones
                        key={drn._id}
                        drone={drn}
                        ></ManagingDrones>)
                }
            </div>
        </div>
    );
};

export default ManageDrone;