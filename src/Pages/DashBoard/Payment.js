import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Payment = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://sheltered-castle-28994.herokuapp.com/myOrder/${id}`;

  const { data: myorder, isLoading } = useQuery(["myOrder", id], () =>
    fetch(url, {}).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">Hello, {user.displayName} </h2>
          <h2 className="card-title">Pay for {myorder.name}</h2>
          <p className="text-orange-700">
            Your product will be reach on time in your door.
          </p>
          <p>please pay: $1437</p>
        </div>
      </div>
    <div>
    <input type="text" placeholder="amount" className="input input-bordered w-full max-w-xs mb-4" /> <br></br>
      <button className="btn btn-wide">Payment</button>

    </div>
    </div>
  );
};

export default Payment;
