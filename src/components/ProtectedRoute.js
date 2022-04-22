import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ user , children}) => {
    
   if(!user){
        return <Navigate to="/not_connected"></Navigate>
   }

   return (
       children
   )
};

export default ProtectedRoute;