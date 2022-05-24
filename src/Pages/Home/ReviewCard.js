import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-2 lg:my-2">
      <div className="card-body">
        <div>
          <p>{review.review}</p>
        </div>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p>{review.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
