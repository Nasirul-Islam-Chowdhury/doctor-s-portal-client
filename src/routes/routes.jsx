import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Appointment from "../pages/appointment/appointment/Appointment";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./privateRoute/PrivateRoute";
import DashboardLayout from "../Layout/dashboardLayout/DashboardLayout";
import Myappointment from "../pages/Dashboard/myAppointment/Myappointment";
import AllUsers from "../pages/Dashboard/allUsers/AllUsers";
import AdminRoute from "./adminRoute/AdminRoute";
import AddDoctor from "../pages/Dashboard/addDoctor/AddDoctor";
import ManageDoctors from "../pages/Dashboard/manageDoctors/ManageDoctors";

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
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            
            {
                path: '/appointment',
                element: <Appointment/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
            path:"/dashboard",
            element: <Myappointment/>
        },
            {
            path:"/dashboard/allusers",
            element:<AdminRoute><AllUsers/></AdminRoute>,
        },
            {
            path:"/dashboard/addDoctor",
            element:<AdminRoute><AddDoctor/></AdminRoute>,
        },
            {
            path:"/dashboard/manageDoctors",
            element:<AdminRoute><ManageDoctors/></AdminRoute>,
        }
    ]
    },
])