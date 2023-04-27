import {Outlet} from "react-router-dom";
import NavbarItem from "../shared/Navbar";

const LoginRoute = () => {
    return (
        <div>
            <NavbarItem></NavbarItem>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginRoute;