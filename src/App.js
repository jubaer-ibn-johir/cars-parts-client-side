import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Login from "./Pages/Login/Login";
import PartsDetails from "./Pages/PartsDetails/PartsDetails";
import NotFound from "./Pages/Shared/NotFound";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";

function App() {
  return (
    <div className="mx-4">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/cardetail/:cardetailId"
          element={
            <RequireAuth>
              <PartsDetails />
            </RequireAuth>
          }
        />

        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
