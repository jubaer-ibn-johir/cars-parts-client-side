import React from 'react';
import jubaer from '../../assets/images/jubaer.png'

const MyPortfolio = () => {
    return (
        <div class="card card-side mt-6 bg-base-100 shadow-xl">
  <figure><img src={jubaer} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Name: Jubaer Ibn Zohir</h2>
    <p>Email: jubaeribnzohir@gmail.com</p>
    <p>Education: Jagannath University</p>
    <p>Skills: HTML, CSS, CSS framework- bootstrap and tailwind, daisyUI, JavaScript, React, node, express, mongodb. </p>
    <p>My Three websites below:</p>
    <p>1. <a className='text-blue-700' href="https://laptop-services-3115e.firebaseapp.com/">Laptop Inventories</a> </p>
    <p>2. <a className='text-blue-700' href="https://travel-guide-155be.firebaseapp.com/">Travel guide</a> </p>
    <p>3. <a className='text-blue-700' href="https://laptop-services-3115e.firebaseapp.com/">Laptop Inventories</a> </p>
    
  </div>
</div>
    );
};

export default MyPortfolio;