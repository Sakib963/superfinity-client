import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingPic from '../assets/images/loading-pic.png'
import Swal from "sweetalert2";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <div className="bg-white">
                <img src={loadingPic} alt="" className="animate-spin mx-auto"/>
            </div>
        )
    }
    if(user){
        return children;
    }
    Swal.fire({
        title: "Log In!",
        text: "You Have to Login first to go there.",
        icon: "info",
        showConfirmButton: false,
        timer: 1500
      });
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;