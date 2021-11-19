import React from 'react';

const ManagingOrder = ({ord}) => {
    const {_id , address , status} = ord;


    //Update Status
    const handleStatus = id => {
        const approved = {status: 'Approved'}
        fetch(`https://murmuring-citadel-01807.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload();
                }
            })
    }

     // Delete Booking

     const handleDelete = (id) => {
        const corfirmation = window.confirm('Are you sure to Delete this Booking ?');
        if (corfirmation) {
            fetch(`https://murmuring-citadel-01807.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                }
            });
        }
    }

    return (
        <div className='row bg-warning py-3 my-3  text-center text-light'>
            <div className="col-md-3">
                <h6>Order Id: {_id}</h6>
            </div>
            <div className="col-md-3">
                <h6>Address: {address}</h6>
            </div>
            <div className="col-md-3">
                <h6>Status: {status}</h6>
            </div>
            <div className="col-md-3">
                <button onClick={()=> handleStatus(_id)} className="btn btn-danger">Update Status</button>
                <button onClick={()=> handleDelete(_id)} className="btn btn-danger ms-2">Delete</button>
            </div>
        </div>
    );
};

export default ManagingOrder;