import React, { useEffect, useState } from 'react';
import ManagePro from './ManagePro';

const ManageProduct = () => {
    const [carParts, setCarParts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-castle-28994.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setCarParts(data))
    },[])



    return (
        <div className='mb-28'>
           <h3 className=' text-2xl mb-6 uppercase font-bold'>Manage Ptoducts</h3> 
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >
           {
               carParts.map(carPart => <ManagePro
               key={carPart._id}
               carPart={carPart}
               ></ManagePro>)
           }
           </div>
        </div>
    );
};

export default ManageProduct;