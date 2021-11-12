import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAthentication = () =>{
    const app = initializeApp(firebaseConfig);
}

export default firebaseAthentication;