import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';



const useAthentication = () => {
    return useContext(AuthContext);
};

export default useAthentication;