import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h2 className='text-3xl font-bold text-gray-500 uppercase'>Welcome to your Dashboard</h2>
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Profile</Link></li>
      {
          user  && <li><Link to="/dashboard/myOrder">My Orders</Link></li>
          
      }
      {
          user && <li><Link to="/dashboard/addreview">Add a review</Link></li>
          
      }
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;