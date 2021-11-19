import React, { useState } from 'react';
import useAthentication from '../Hooks/useAthentication';

const Register = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');
    const {createUserWithEmailAndPassword , setUser, auth , setError, error, user , updateProfile} = useAthentication();



    const userEmail = e =>{
        const findEmail = e.target.value;
        console.log(findEmail)
        setEmail(findEmail)
    }
    const userPass = e =>{
        const findPass = e.target.value;
        console.log(findPass)
        setPassword(findPass)
    }
    const userName = e =>{
        const findName = e.target.value;
            
        setName(findName)
    }


    //Update Name
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(() => {})
        .catch((error) => {setError(error.message)});   
    }

    //Register
    const handleRegister = e => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            
            setUserName();
            setUser(user)
            userData(email , name)
            window.location.reload();
        })
        .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
  });
  e.preventDefault();
    }

    // POST DB users
    const userData = (email , displayName) => {
        const user = {email , displayName}
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    

    return (
        <div className='w-50 mx-auto text-center my-5 res-input'>
            <h1 className='res-title'>Register please</h1>
            <form onSubmit={handleRegister}>
                <label>Name </label>
                <input className='w-75' onBlur={userName} type="text" placeholder='Name' required/>
                <br />
                <br />
                <label>Email </label>
                <input className='w-75' onBlur={userEmail} type="text" placeholder='Email' required/>
                <br />
                <br />
                <label>Password </label>
                <input className='w-75' onBlur={userPass} type="password"  placeholder='Password' required/>
                <br />
                <br />
                <input className='btn-primary btn' type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Register;