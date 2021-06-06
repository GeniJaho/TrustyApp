import React from "react";
import userphoto from "../assets/Rectangle15.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WorkProfile = () => {
  return (
    <div className="work">
      <Navbar></Navbar>
      <div className="work-profile">
        <ul>
          <li>T</li>
          <li>R</li>
          <li>U</li>
          <li>S</li>
          <li>T</li>
          <li>Y</li>
        </ul>
        <div className="worker-details">
          <div className="little-nav">
            <p>Worker Profile</p>
            <button>kontaktieren</button>
          </div>
          <img src={userphoto} alt="" />
          <p className="name">Srinath Bro</p>
          <p className="work-domain">Painter , 23</p>
          <div className="details-worker">
            <button className="type">PERSONAL</button>
            <p className="first">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p className="header-second">Beschreibung </p>
            <p className="thrid">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <p></p>
          </div>
          <div className="details-worker">
            <button className="type">REVIEWS</button>
            <p className="first">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p className="header-second">Beschreibung </p>
            <p className="thrid">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WorkProfile;
