import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/NotFound";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import OrderNow from "./Pages/Purchase/OrderNow";
import Blogs from "./Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyProfile from "./Pages/DashBoard/MyProfile";
import AddReviews from "./Pages/DashBoard/AddReviews";
import MyOrders from "./Pages/DashBoard/MyOrders";
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import AddProduct from "./Pages/DashBoard/AddProduct";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import Payment from "./Pages/DashBoard/Payment";

function App() {
  return (
    <div className="mx-4">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/orderNow"
          element={
            <RequireAuth>
              <OrderNow />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="/dashboard/addreview" element={<AddReviews></AddReviews>}></Route>
            <Route path="/dashboard/myOrder" element={<MyOrders></MyOrders>}></Route>

            <Route path="/dashboard/payment/:id" element={<Payment></Payment>}></Route>

            <Route path="/dashboard/manageOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path="/dashboard/addProduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path="/dashboard/manageProduct" element={<ManageProduct></ManageProduct>}></Route>
          </Route>

        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
