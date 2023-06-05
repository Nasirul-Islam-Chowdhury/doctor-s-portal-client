import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from '../../hooks/useAdmin';
const AdminRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const [isAdmin,isAdminloading] = useAdmin(user?.email)
    const location = useLocation();
    if (loader || isAdminloading) {
      return (
        <div>
          <progress className="progress w-52"></progress>
         
        </div>
      );
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };


export default AdminRoute;