import React from "react";
import { useNavigate } from "react-router-dom";

const CarPart = ({ carPart }) => {
  const {_id, name, img, description, availableQuantity, minimumQuantity, price } =
    carPart;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

  return (
    <div className="card w-96  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="tools"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price:(Per Piece) {price}</p>
        <p>{description}</p>
        <p>Available Quantity: {availableQuantity} Pieces</p>
        <p>Minimum Order: {minimumQuantity} Pieces</p>
        <div className="card-actions">
          <button onClick={()=> navigateToPurchase(_id, name, img, description, availableQuantity, minimumQuantity, price)} className="btn btn-black">Purchase</button>
        </div>
      </div>
    </div>

    // <div>
    //     <img src={img} alt="" ></img>
    //     <h2>{name}</h2>
    //     <h2>Price:(per piece) {price}</h2>
    //     <h2>{description}</h2>
    //     <h2>Available Quantity: {availableQuantity}</h2>
    //     <h2>Minimum Order: {minimumQuantity}</h2>
    // </div>
  );
};

export default CarPart;
