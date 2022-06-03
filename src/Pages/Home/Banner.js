import React from "react";
import parts from "../../assets/images/car-parts.jpg";

const Banner = () => {
  return (
    <div className="my-12 hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={parts} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your Car Is Waiting for New Parts!</h1>
          <p className="py-6">
            It's important to keep your vehicle in tune and up-to-date with
            repairs. Regular auto maintenance can prevent unexpected breakdowns
            and accidents when you're far away from an auto shop.
          </p>
          <button className="btn btn-yellow text-white">Get Car Parts</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


