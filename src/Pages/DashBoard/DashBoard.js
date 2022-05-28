import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const user = useAuthState(auth);
    const admin = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
      <h2 className='text-3xl font-bold text-gray-500 uppercase'>Welcome to your Dashboard</h2>
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label for="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Profile</Link></li>
      
      {
        user &&  <li><Link to="/dashboard/myOrder">My Orders</Link></li>
          
      }
      {
         user &&  <li><Link to="/dashboard/addreview">Add a review</Link></li>   
      }

      {
        admin && <>
      <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li> 
       <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
       <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
       <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
        
        </> }
       

    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;