import {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <h1 className="text-center">Loading News: <span><FontAwesomeIcon icon={faSpinner} spinPulse /></span></h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/log/login' replace></Navigate>;
};

export default PrivateRoute;