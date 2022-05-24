import React from "react";

const SummeryCard = ({img, cardTitle, cardDetails}) => {
  return (
    <div className="card lg:card-side  shadow-xl bg-black">
      <figure className="lg:pl-5 pt-2">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
        
      </div>
    </div>
  );
};

export default SummeryCard;
