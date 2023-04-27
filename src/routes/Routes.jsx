import {createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../components/Pages/Home"
import About from "../components/Pages/About";
import Career from "../components/Pages/Career";
import Login from "../components/LoginSignin/Login";
import LoginRoute from "../components/LoginSignin/LoginRoute";
import SignUp from "../components/LoginSignin/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    },
    {
        path: "/log",
        element: <LoginRoute></LoginRoute>,
        children: [
            {
                path: "/log/login",
                element: <Login></Login>
            },
            {
                path: '/log/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router