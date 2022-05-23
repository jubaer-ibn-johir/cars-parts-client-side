import React from "react";
import tools from '../../assets/images/settings.png';
import delivery from '../../assets/images/shipped.png';
import repaire from '../../assets/images/maintenance.png';
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Best Tools',
            description: 'We ensure that we can provide you the best tools for your car. We have reputations for our best car parts',
            img: tools

        },
        {
            _id: 2,
            name: 'Fast Delivery',
            description: 'We can give you guaranty about your goods, we store them securely and ship them out fast.',
            img: delivery

        },
        {
            _id: 3,
            name: 'Repairing System',
            description: 'If you want to take our car repairing facility we can provide you that. we have experts for repairing your lovely car.',
            img: repaire

        }
    ]
  return (
    <div className="my-28">
      <div>
        <h2 className="text-center uppercase text-4xl font-bold">Our Services</h2>
        <h3 className="text-center text-4xl">Services We Provide</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {
              services.map(service => <Service
              key={service._id}
              service={service} 
              ></Service>)

          }
      </div>
    </div>
  );
};

export default Services;
