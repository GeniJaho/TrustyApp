import React from "react";
import User from "../assets/Rectangle15.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

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
          <p className="title">About us</p>
          <div className="photos">
            <div className="photoname">
              <img src={User} alt="" />
              <p>John</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>John</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>John</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>John</p>
            </div>
            <div className="photoname">
              <img src={User} alt="" />
              <p>John</p>
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
      <Footer></Footer>
    </div>
  );
};

export default About;
