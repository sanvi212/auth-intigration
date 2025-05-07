import {React, use} from "react";
import { AuthContext } from "../Contexts/AuthContexts";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

const Routes = ({ children }) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

  return children;
};

export default Routes;
