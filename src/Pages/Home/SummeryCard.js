import React from "react";

const SummeryCard = ({img, cardTitle, cardDetails}) => {
  return (
    <div class="card lg:card-side  shadow-xl bg-black">
      <figure className="lg:pl-5 pt-2">
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
        
      </div>
    </div>
  );
};

export default SummeryCard;
