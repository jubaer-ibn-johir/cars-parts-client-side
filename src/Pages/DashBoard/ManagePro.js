import React from 'react';


const ManagePro = ({carPart}) => {
    const {_id, name, img, description, availableQuantity, minimumQuantity, price } =
    carPart;



    const deleteTheProduct = id => {
        
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
          <button onClick={()=> deleteTheProduct(_id, name, img, description, availableQuantity, minimumQuantity, price)} className="btn btn-black">Delete</button>
        </div>
      </div>
    </div>
    );
};

export default ManagePro;