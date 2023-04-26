import {createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../components/Pages/Home"
import About from "../components/Pages/About";
import Career from "../components/Pages/Career";

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
    }
])

export default router