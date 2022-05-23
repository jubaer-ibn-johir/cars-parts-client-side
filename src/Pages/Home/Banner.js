import React from "react";
import parts from "../../assets/images/car-parts.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={parts} class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your Car Is Waiting for New Parts!</h1>
          <p class="py-6">
            It's important to keep your vehicle in tune and up-to-date with
            repairs. Regular auto maintenance can prevent unexpected breakdowns
            and accidents when you're far away from an auto shop.
          </p>
          <button class="btn btn-black text-white">Get Car Parts</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
