import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://sheltered-castle-28994.herokuapp.com/myOrder?email=${user.email}`

      )
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h3 className="text-2xl mb-6">My Orders: {myOrders.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Order Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{myOrder.name}</td>
                <td>{myOrder.email}</td>
                <td>{myOrder.address}</td>
                <td>{myOrder.phone}</td>
                <td>{myOrder.quantity}P</td>
                <td>{ <Link to={`/dashboard/payment/${myOrder._id}`}> <button className="btn btn-xm ">Pay</button></Link> }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
