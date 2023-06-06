import { useContext } from "react";
import Navbar from "../../shared/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../contexts/AuthProvider";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [admin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
 
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-white text-black">
    {/* Page content here */}
    <Outlet />

  
  </div> 
  <div className="drawer-side z-[999]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content z-[999]">
      {/* Sidebar content here */}
      <li><Link to="/dashboard"> My Appointments</Link></li>
      {
        admin &&
        <>
        <li><Link to="/dashboard/allusers">All Users</Link></li>
        <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
        <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;
