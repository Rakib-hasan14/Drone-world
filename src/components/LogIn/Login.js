import React, { useState } from 'react';
import useAthentication from '../Hooks/useAthentication';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    
    const {signInWithEmailAndPassword , setUser , setError , error , auth} = useAthentication();

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

    const signIn = e => {
        signInWithEmailAndPassword(auth, email, password)
    .then((result) => { 
    const user = result.user;
    setUser(user)
    
  })
  .catch((error) => {
    setError(error.message);
  });
        e.preventDefault()
    }
    return (
        <div className='w-50 mx-auto text-center my-4'>
            <h1 className='mb-3'>Log In please!</h1>
            <form onSubmit={signIn}>
                <label>Email</label>
                <input onBlur={userEmail} type="text" placeholder='Email'/>
                <br />
                <br />
                <label >Password</label>
                <input onBlur={userPass} type="password" placeholder='Password' />
                <br />
                <br />
                <input className='btn btn-primary' type="submit" value="Log in" />
            </form>
            <h6 className="text-danger">{error}</h6>
        </div>
    );
};

export default Login;