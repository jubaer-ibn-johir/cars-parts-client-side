import React from 'react';

const ContactUs = () => {
    return (
        <section
       className=" bg-gray-200 rounded my-28 mx-6 justify-center items-center pt-20 text-center "
    >
      <h3  className="text-xl text-primary font-bold ">Contact Us</h3>
      <h2  className="text-3xl m-4 ">Stay connected with us</h2>
      <input
        type="name"
        placeholder="Your Name"
         className=" my-2 input input-bordered input-md w-full max-w-xs"
      /> <br/>
      <input
        type="email"
        placeholder="Your Email"
         className="my-2 input input-bordered input-md w-full max-w-xs"
      /> <br/>

      <input
        type="text"
        placeholder="Your message"
         className=" my-2 input input-bordered input-lg w-full max-w-xs"
      />

      
      <div  className="mt-6 pb-12">
      <button className="btn btn-active">Submit</button>
      </div>
    </section>
    );
};

export default ContactUs;