import React from 'react';

const ManagingDrones = ({drone}) => {
    const {_id , name , price} = drone;
    const handleDelete = (id) => {
        
            const corfirmation = window.confirm('Are you sure to delete this Drone ?');
            if (corfirmation) {
                fetch(`https://murmuring-citadel-01807.herokuapp.com/drones/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted successfully');
                            window.location.reload()
                    }
                });
            }
    }
    return (
        <div className='row text-center my-3 py-3 bg-light'>
            <div className="col-md-3">
                <h6>Drone-id: {_id}</h6>
            </div>
            <div className="col-md-3">
                <h6>Name: {name}</h6>
            </div>
            <div className="col-md-3">
                <h6>Price: {price}</h6>
            </div>
            <div className="col-md-3">
                <button onClick={()=> handleDelete(_id)} className='btn btn-primary'>Delete</button>
            </div>
        </div>
    );
};

export default ManagingDrones;