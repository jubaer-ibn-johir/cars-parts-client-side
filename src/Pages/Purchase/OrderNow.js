import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const OrderNow = () => {

  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/myOrder`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(data);
        // if(data.success){
        //     toast(`Your order is completed`);
        // }
    })

  };
  return (
    <div className="justify-center flex items-center m-4 align-middle mx-auto w-50">

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl uppercase font-bold text-center">Order Now</h2>
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <p>Product Name:</p>
                <input placeholder="Product"   className="border border-gray-800 rounded " {...register("name",  { required: true, maxLength: 20 })} />
                <p className="mt-2">Email:</p>
                <input placeholder="Email" value={user?.email || ''}  className="border border-gray-800 rounded  " {...register("email")} />
                <p className="mt-2">Your Address:</p>
                <input placeholder="Address" className="border border-gray-800 rounded w-100 " {...register("address" )} />
                <p className="mt-2">Your Number:</p>
                <input placeholder="phone" className="border border-gray-800 rounded "  {...register("phone")} />
                <p className="mt-2">Order  Quantity:</p>
                <input placeholder="How Many Pieces?" className="border border-gray-800 rounded"  {...register("quantity")} />
                <br/>
                <input className="border border-gray-800 rounded text-white mt-4 uppercase py-2 px-4 bg-slate-800" value="Order" type="submit" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;

