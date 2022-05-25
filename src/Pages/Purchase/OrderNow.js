import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const OrderNow = () => {

  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2>Order here</h2>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-3xl uppercase font-bold text-center">Order Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("firstName", { required: true, maxLength: 20 })} />
      {/* <input type="text" placeholder={user.displayName} disabled class="input input-bordered input-black w-full max-w-xs" /> */}
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      {/* <input type="submit" /> */}
          </form>
          <div class="card-actions justify-center">
            <button class="btn btn-black">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
