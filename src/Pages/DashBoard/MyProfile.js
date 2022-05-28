import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    console.log(data);
    const url = `https://sheltered-castle-28994.herokuapp.com/dashboard`;
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
  });
}
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase">my profile</h2>
      <div className="my-4">
        <h2>Name: {user.displayName}</h2>
        <h2>Email: {user.email}</h2>
      </div>
      <div>
        <h2 className="text-1xl font-bold ml-44 uppercase">Add more info</h2>
        <div className="ml-28">
          <h2 className="text-2xl uppercase ml-12"> </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <input
                type="text"
                placeholder=" education"
                className="input input-bordered w-full max-w-xs"
                {...register("education", {
                  required: {
                    value: true,
                    message: "education is Required",
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">My location</span>
              </label>
              <input
                type="text"
                placeholder="location"
                className="input input-bordered w-full max-w-xs"
                {...register("location", {
                  required: {
                    value: true,
                    message: "location is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone number"
                className="input input-bordered w-full max-w-xs"
                {...register("Phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Linkedin Id</span>
              </label>
              <input
                type="text"
                placeholder="Linkedin"
                className="input input-bordered w-full max-w-xs"
                {...register("Linkedin", {
                  required: {
                    value: true,
                    message: "Linkedin is Required",
                  },
                })}
              />
            </div>

            <input
              className="btn w-full mt-4 max-w-xs text-white"
              type="submit"
              value="Add info"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
