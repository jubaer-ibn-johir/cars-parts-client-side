import React from 'react';
import { useParams } from 'react-router-dom';

const PartsDetails = () => {
    // const {_id, name, img, description, availableQuantity, minimumQuantity, price } =
    // carPart;
    const {cardetailId} = useParams()
    return (
        <div>
            <h3>parts details {cardetailId}</h3>
        </div>
    );
};

export default PartsDetails;