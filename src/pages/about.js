import React from "react";
import User from "../assets/Rectangle15.png";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="about">
      <Navbar></Navbar> 

      <div className="about-section">
        <ul>
          <li>T</li>
          <li>R</li>
          <li>U</li>
          <li>S</li>
          <li>T</li>
          <li>Y</li>
        </ul>

        <div className="about-photos">
          <p className="title">Über uns</p>
          <div className="photos">
            <div className="photoname">
              <img src={User} alt="" />
              <p>Ahmad</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>Media</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>Mohamad</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>Abobakr</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>Baihas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <p>Contact us</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email id" />
        <input type="text" placeholder="Phone Number" />
        <textarea
          id="w3review"
          name="w3review"
          rows="10"
          cols="50"
          placeholder="Message"
        />
        <input type="submit" />
      </div>
    </div>
  );
};

export default About;
