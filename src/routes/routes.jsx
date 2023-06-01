import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])