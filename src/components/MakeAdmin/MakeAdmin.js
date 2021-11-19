import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email , setEmail] = useState('')
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const makeAdmin = e => {
        const user = {email}
            fetch('http://localhost:5000/users', {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                alert('Thank you!!')
                window.location.reload();
            })

        e.preventDefault()
    }

    return (
        <div className='text-center'>
            <h1 className="text-center text-danger">Make admin</h1>
            <form onSubmit={makeAdmin} className='text-center'>
                <label>Email</label>
                <br />
                <input onBlur={getEmail} type='email' placeholder='Email' />
                <br />
                <input className='btn-primary btn my-3' type="submit" value="Make admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;