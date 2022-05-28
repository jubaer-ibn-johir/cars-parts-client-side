import React from "react";
import { useForm } from "react-hook-form";

const AddReviews = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div>
      <h2 className="text-1xl font-bold ml-44 uppercase">Add a Reviews</h2>
      <div className="ml-28">
        <h2 className="text-2xl uppercase ml-12"> </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Review</span>
            </label>
            <input
              type="text"
              placeholder="Review"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "review is Required",
                },
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full max-w-xs"
              {...register("Rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              placeholder="img"
              className="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "file is Required",
                },
              })}
            />
          </div>

          <input
            className="btn w-full mt-4 max-w-xs text-white"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
