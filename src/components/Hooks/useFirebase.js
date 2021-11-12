import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged , signOut, updateProfile} from "firebase/auth";
import { useState } from "react";
import firebaseAthentication from '../../Firebase/firebase.init';


firebaseAthentication()
    

const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [error , setError] = useState('');
    
    //Password sign up
    const auth = getAuth();
  // const handleSignUp =(email , password) => {
    
  // }
  const userSignOut = () => {
    signOut(auth).then(() => {
     setUser({})
    }).catch((error) => {
      setError(error.message)
    });
  }

   onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      
    }
  });
  



    return {
      auth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
        setUser,
        setError,
        user,
        error,
        userSignOut,
        updateProfile
    }
}

export default useFirebase;