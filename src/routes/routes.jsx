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
import Payment from "../pages/Dashboard/payment/Payment";
import DisplayError from "../shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                errorElement: <DisplayError/>
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
                element: <PrivateRoute><Appointment/></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
            path:"/dashboard",
            element: <Myappointment/>,
            errorElement: <DisplayError/>
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
        },
            {
            path:"/dashboard/payment/:id",
            element:<PrivateRoute><Payment/></PrivateRoute>,
            loader: ({params})=> fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/bookings/${params.id}`)
        }
    ]
    },
])