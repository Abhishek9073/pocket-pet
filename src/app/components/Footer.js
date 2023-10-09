import React from 'react';
import {FaFacebook,FaTelegram} from 'react-icons/fa';

import {BsWhatsapp} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {FiYoutube} from 'react-icons/fi';


const Footer = () => {
  return (
    <div>
{/* Footer */}
<footer className="text-center text-lg-start bg-light text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />pocket-pet
          </h6>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum, aperiam provident,
            maiores officia voluptas inventore,
            est culpa aliquid blanditiis illo ducimus sequi reprehenderit 
            accusantium voluptatum optio debitis necessitatibus quidem.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Pets
          </h6>
          <p>
            <a href="#!" className="text-reset">Snake</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Scorpian</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Spider</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Lizard</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <div>
          <FaFacebook /> <br/>
        <GrInstagram/><br/>
        <FaTelegram/><br/>
        <FiYoutube/><br/>
        <BsWhatsapp/>

          </div>
        


        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Pocket-pet.com</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}



    </div>
  )
}

export default Footer