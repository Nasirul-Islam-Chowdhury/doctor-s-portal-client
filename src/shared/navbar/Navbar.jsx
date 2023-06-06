import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const location = useLocation()
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then(res=>{})
    .catch(e=>console.log(e))
  }
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
   
    { user?.uid ?  <>
      <li><button onClick={handleLogout}>Sign out</button></li>
    </>
    :
   <>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/signup'>Signup</Link></li>
   </>
  
    }
    </>
    return (
        <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <label tabIndex="0"  className="btn text-black btn-ghost lg:hidden">
              <svg className="text-black" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="1" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-black text-xl">Doctor's Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
       {
        location.pathname == "/dashboard" &&
     
        <label   htmlFor="my-drawer-2" tabIndex="2" className="btn text-black btn-ghost lg:hidden">
        
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    
       }
  
      </div>
    );
};

export default Navbar;