import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchases, setPurchases] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  }, []);

  const navigate = useNavigate();
    const orderButton = id => {
        navigate(`/orderNow`);
    }

  return (
    <div className="text-center items-center justify-center flex mt-4 ">
      
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={purchases.img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h3 className="text-2xl font-bold"> {purchases.name}</h3>
        <p>Price:(Per Piece) {purchases.price}</p>
        <p>{purchases.description}</p>
        <p>Available Quantity: {purchases.availableQuantity} Pieces</p>
        <p>Minimum Order: {purchases.minimumQuantity} Pieces</p>
        <div className="card-actions">
          <button onClick={()=> orderButton(purchaseId)} className="btn btn-black">Order Now</button>
        </div>
        <Link>
        
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Purchase;
