import React, { useEffect, useState } from 'react';
import CarPart from './CarPart';

const CarParts = () => {
    const [carParts, setCarParts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-castle-28994.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setCarParts(data))
    },[])
    return (
        <div className='mb-28'>
           <h3 className='text-center text-4xl mb-6 uppercase font-bold'>Car Parts</h3> 
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >
           {
               carParts.map(carPart => <CarPart
               key={carPart._id}
               carPart={carPart}
               ></CarPart>)
           }
           </div>
        </div>
    );
};

export default CarParts;