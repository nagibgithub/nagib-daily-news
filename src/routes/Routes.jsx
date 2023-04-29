import {createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../components/Pages/Home"
import About from "../components/Pages/About";
import Career from "../components/Pages/Career";
import Login from "../components/LoginSignin/Login";
import LoginRoute from "../components/LoginSignin/LoginRoute";
import SignUp from "../components/LoginSignin/SignUp";
import Category from "../components/Pages/Category";
import NewsDetails from "../components/Pages/NewsDetails";
import NewsLayout from "../components/News/NewsLayout";
import PrivateRoute from "./PrivateRoute";
import TermsCondition from "../components/Pages/TermsCondition";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:3000/news'),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/news'),
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${ params.id }`)
            },
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "/news/:id",
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${ params.id }`)
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
            },
            {
                path: '/log/terms_condition',
                element: <TermsCondition></TermsCondition>
            }
        ]
    }
])

export default router