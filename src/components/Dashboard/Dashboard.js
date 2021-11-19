import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAthentication from '../Hooks/useAthentication';

const Dashboard = () => {
    const [allUser , setAllUser] = useState([])
    const {user} =  useAthentication()
    useEffect(()=> {
        fetch('https://murmuring-citadel-01807.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setAllUser(data))
    } , [])
    const find = allUser.find(em => em.email === user.email) || {};
    console.log(find.role)
    return (
        <div>

            { find?.role ? <div className='grid-scnd-sec container text-center my-5'>
            <Link className='bg-warning text-white py-3 px-3 fs-2 rounded-pill text-dec' to='/manageallorders'>Manage All Orders</Link>
            <Link className='bg-warning text-white py-3 px-3 fs-2 rounded-pill text-dec' to='/adddrone'>Add A Drone</Link>
            <Link className='bg-warning text-white py-3 px-3 fs-2 rounded-pill text-dec' to='/makeadmin'>Make Admin</Link>
            <Link className='bg-warning text-white py-3 px-3 fs-2 rounded-pill text-dec' to='/managedrone'>Manage Drone</Link>
        </div> :
        <div className='grid-sec container text-center my-5'>
            <Link className='bg-warning text-white py-3 px-3 fs-1 rounded-pill text-dec' to='/pay'>Pay</Link>
            <Link className='bg-warning text-white py-3 px-3 fs-1 rounded-pill text-dec' to='/myorder'>My order</Link>
            <Link className='bg-warning text-white py-3 px-3 fs-1 rounded-pill text-dec' to='/review'>Review</Link>
            <br />
            
            </div>}
        
        </div>
    );
};

export default Dashboard;