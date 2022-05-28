import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myOrder?email=${user.email}`
      // , {
      //   method: "GET",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //   },
      // }
      )
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h3 className="text-2xl mb-6">My Orders: {myOrders.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Order Quantity</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
